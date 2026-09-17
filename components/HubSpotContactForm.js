import { useEffect } from "react";
import Script from "next/script";

const HUBSPOT_FORM_ID = "71b08e44-33ac-4219-99ba-27f6d6ece275";

const FORM_INSTANCES = [
  {
    id: "hubspot-modern-form-inline",
    title: "Modern embedded form",
    description:
      "Uses HubSpot's current form-frame embed and exercises the standard success event.",
  },
  {
    id: "hubspot-modern-form-second-instance",
    title: "Second modern form instance",
    description:
      "A second instance of the same testing form for multi-instance and deduplication checks.",
  },
];

function getContactDetails(fieldValues) {
  const fields = fieldValues.reduce((contact, field) => {
    const fieldName = field.name.split("/").pop().toLowerCase();
    contact[fieldName] = field.value;
    return contact;
  }, {});

  const email = String(fields.email || "").trim().toLowerCase();
  const name =
    String(fields.name || fields.fullname || "").trim() ||
    [fields.firstname, fields.lastname]
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .join(" ");

  return {
    email,
    ...(name && { name }),
    ...(fields.phone && { phone: String(fields.phone) }),
    ...(fields.company && { company: String(fields.company) }),
    ...(fields.jobtitle && { jobTitle: String(fields.jobtitle) }),
    hubspotFormId: HUBSPOT_FORM_ID,
  };
}

export default function HubSpotContactForm() {
  useEffect(() => {
    const identifyHubSpotContact = async (event) => {
      if (
        event.detail?.formId !== HUBSPOT_FORM_ID ||
        !window.HubSpotFormsV4
      ) {
        return;
      }

      try {
        const form = window.HubSpotFormsV4.getFormFromEvent(event);
        const fieldValues = await form.getFormFieldValues();
        const contact = getContactDetails(fieldValues);

        // An email is the stable identifier available for this contact form.
        if (!contact.email) return;

        window.LOQ = window.LOQ || [];
        window.LOQ.push([
          "ready",
          async (LO) => {
            try {
              await LO.$internal.ready("visitor");
              await LO.visitor.identify(contact.email, contact);
            } catch (error) {
              console.error(
                "Unable to identify the HubSpot contact in Lucky Orange.",
                error
              );
            }
          },
        ]);
      } catch (error) {
        console.error("Unable to read the HubSpot form submission.", error);
      }
    };

    window.addEventListener(
      "hs-form-event:on-submission:success",
      identifyHubSpotContact
    );

    return () => {
      window.removeEventListener(
        "hs-form-event:on-submission:success",
        identifyHubSpotContact
      );
    };
  }, []);

  return (
    <>
      <Script
        id="hubspot-contact-form-script"
        src="https://js.hsforms.net/forms/embed/52002907.js"
        strategy="afterInteractive"
      />
      <div className="space-y-8">
        {FORM_INSTANCES.map(({ id, title, description }) => (
          <div key={id} className="border border-navy/20 p-4">
            <h3 className="pb-2 font-brand text-lg">{title}</h3>
            <p className="pb-4 text-sm">{description}</p>
            <div
              id={id}
              className="hs-form-frame min-h-[220px]"
              data-region="na1"
              data-form-id={HUBSPOT_FORM_ID}
              data-portal-id="52002907"
            />
          </div>
        ))}
      </div>
    </>
  );
}
