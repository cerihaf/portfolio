import { useEffect } from "react";
import Script from "next/script";

const HUBSPOT_PORTAL_ID = "52002907";
const HUBSPOT_FORM_ID = "71b08e44-33ac-4219-99ba-27f6d6ece275";
const LEGACY_FORM_TARGET_ID = "hubspot-legacy-v2-form";

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

export default function HubSpotContactForm() {
  const renderLegacyForm = () => {
    const target = document.getElementById(LEGACY_FORM_TARGET_ID);

    if (!target || target.dataset.rendered || !window.hbspt?.forms) return;

    target.dataset.rendered = "true";
    window.hbspt.forms.create({
      region: "na1",
      portalId: HUBSPOT_PORTAL_ID,
      formId: HUBSPOT_FORM_ID,
      target: `#${LEGACY_FORM_TARGET_ID}`,
    });
  };

  useEffect(() => {
    renderLegacyForm();
  }, []);

  return (
    <>
      <Script
        id="hubspot-contact-form-script"
        src="https://js.hsforms.net/forms/embed/52002907.js"
        strategy="afterInteractive"
      />
      <Script
        id="hubspot-legacy-form-script"
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={renderLegacyForm}
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
              data-portal-id={HUBSPOT_PORTAL_ID}
            />
          </div>
        ))}
        <div className="border border-navy/20 p-4">
          <h3 className="pb-2 font-brand text-lg">Legacy v2 embedded form</h3>
          <p className="pb-4 text-sm">
            Uses hbspt.forms.create() to verify the existing hsFormCallback
            integration path still identifies visitors and tracks submissions.
          </p>
          <div id={LEGACY_FORM_TARGET_ID} className="min-h-[220px]" />
        </div>
      </div>
    </>
  );
}
