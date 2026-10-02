import Reveal from "@/components/Reveal";
import { FORM_SECTION_ID, SERVICES, SERVICES_SECTION_ID } from "@/lib/constants";

export default function Services() {
  return (
    <section id={SERVICES_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Innovative care when traditional treatment isn&apos;t enough.
          </h2>
          <p className="text-lead mt-4">
            Peak offers interventional options for treatment-resistant depression and related
            conditions—personalized, evidence-based, and grounded in whole-person psychiatry.
          </p>
        </Reveal>

        <ul className="pk-service-grid list-none p-0">
          {SERVICES.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <a href={service.href} className="pk-service-link">
                  <span className="pk-service-index">0{index + 1}</span>
                  <h3 className="pk-service-title">{service.title}</h3>
                  <p className="pk-service-desc">{service.description}</p>
                  <span className="pk-service-more">
                    Learn more
                    <ArrowIcon />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
            Find out if you Qualify
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
