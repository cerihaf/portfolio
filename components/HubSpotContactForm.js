import Script from "next/script";

export default function HubSpotContactForm() {
  return (
    <>
      <Script
        id="hubspot-contact-form-script"
        src="https://js.hsforms.net/forms/embed/52002907.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame min-h-[220px]"
        data-region="na1"
        data-form-id="71b08e44-33ac-4219-99ba-27f6d6ece275"
        data-portal-id="52002907"
      />
    </>
  );
}
