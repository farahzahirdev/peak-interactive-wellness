import Image from "next/image";
import { FORM_SECTION_ID, INSURANCE_LOGOS } from "@/lib/constants";

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="pk-insurance-track list-none p-0 m-0"
      aria-hidden={ariaHidden || undefined}
    >
      {INSURANCE_LOGOS.map((logo) => (
        <li key={`${ariaHidden ? "dup-" : ""}${logo.alt}`} className="pk-insurance-logo">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="pk-insurance-img"
            loading="lazy"
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}

export default function InsuranceBar() {
  return (
    <section
      id="insurance"
      className="pk-insurance"
      aria-labelledby="insurance-heading"
    >
      <div className="pk-insurance-inner">
        <div className="pk-insurance-marquee" aria-label="Accepted insurance plans">
          <div className="pk-insurance-fade pk-insurance-fade--left" aria-hidden />
          <div className="pk-insurance-fade pk-insurance-fade--right" aria-hidden />

          <div className="pk-insurance-marquee-track">
            <LogoTrack />
            <LogoTrack ariaHidden />
          </div>
        </div>

        <ul className="pk-insurance-static list-none p-0 m-0 container-main" aria-label="Accepted insurance plans">
          {INSURANCE_LOGOS.map((logo) => (
            <li key={logo.alt} className="pk-insurance-logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="pk-insurance-img"
                loading="lazy"
                unoptimized
              />
            </li>
          ))}
        </ul>

        <div className="container-main">
          <h2 id="insurance-heading" className="pk-insurance-copy">
            We accept most commercial insurance plans. Please{" "}
            <a href={`#${FORM_SECTION_ID}`} className="pk-insurance-link">
              contact us
            </a>{" "}
            for more information.
          </h2>
        </div>
      </div>
    </section>
  );
}
