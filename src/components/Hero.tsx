import Image from "next/image";
import Link from "next/link";
import {
  FORM_SECTION_ID,
  HERO_FEATURES,
  IMAGES,
  LOGO_MARK_URL,
  LOGO_ON_LIGHT_URL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pk-hero-shell">
      <div className="pk-hero-top">
        <div className="container-main pk-hero-top-inner">
          <Link href="/" className="pk-hero-logo-link shrink-0">
            <Image
              src={LOGO_MARK_URL}
              alt=""
              width={44}
              height={74}
              className="pk-hero-logo-mark"
              priority
              unoptimized
            />
            <Image
              src={LOGO_ON_LIGHT_URL}
              alt="Peak Interactive Wellness"
              width={200}
              height={82}
              className="pk-hero-logo-word"
              priority
              unoptimized
            />
          </Link>

          <ul className="pk-hero-meta list-none p-0 m-0">
            <li className="pk-hero-meta-item pk-hero-meta-item--hide-sm">
              <PinIcon />
              <span>Greenwood Village &amp; Denver, CO</span>
            </li>
            <li aria-hidden className="pk-hero-meta-divider pk-hero-meta-item--hide-sm" />
            <li className="pk-hero-meta-item pk-hero-meta-item--hide-sm">
              <LaptopIcon />
              <span>In-person or Virtual</span>
            </li>
            <li aria-hidden className="pk-hero-meta-divider pk-hero-meta-item--hide-sm" />
            <li className="pk-hero-meta-item">
              <a href={PHONE_HREF} className="pk-hero-meta-phone">
                <PhoneIcon />
                <span className="pk-hero-phone-label">{PHONE_NUMBER}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pk-hero-main">
        <div className="pk-hero-copy-col">
          <div className="container-main pk-hero-copy-inner">
            <p className="pk-hero-eyebrow">
              <span>Innovative mental health care</span>
              <span className="pk-hero-eyebrow-line" aria-hidden />
            </p>

            <h1 id="hero-heading" className="pk-hero-title">
              You&apos;re More Than a Diagnosis
            </h1>

            <p className="pk-hero-lede">
              Personalized, compassionate, evidence-based treatment for those who have tried therapy
              or medication before and felt something was missing.
            </p>

            <p className="pk-hero-services">
              TMS Therapy <span aria-hidden>/</span> Spravato® <span aria-hidden>/</span>{" "}
              Psychiatric Care
            </p>

            <div className="pk-hero-actions">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary btn-pill">
                Find out if you Qualify
                <ArrowIcon />
              </a>
              <a href={PHONE_HREF} className="btn btn-ghost-dark btn-pill">
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        <div className="pk-hero-media-col" aria-hidden>
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            priority
            quality={95}
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="pk-hero-img"
            unoptimized
          />
        </div>
      </div>

      <div className="pk-hero-features" role="region" aria-label="Why Peak">
        <div className="container-main">
          <ul className="pk-hero-features-grid list-none p-0 m-0">
            {HERO_FEATURES.map((item) => (
              <li key={item.title} className="pk-hero-feature">
                <span className="pk-hero-feature-icon" aria-hidden>
                  <FeatureIcon id={item.id} />
                </span>
                <div>
                  <p className="pk-hero-feature-title">{item.title}</p>
                  <p className="pk-hero-feature-desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H7A2 2 0 015 15V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-2M9 17v2h6v-2M9 17h6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.312a11.042 11.042 0 005.516 5.516l.312-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.456 0-13.5-6.044-13.5-13.5V3.5z" clipRule="evenodd" />
    </svg>
  );
}

function FeatureIcon({ id }: { id: (typeof HERO_FEATURES)[number]["id"] }) {
  const className = "h-6 w-6";
  switch (id) {
    case "tms":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.59-.659L5 14.5m14 0V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.5" />
        </svg>
      );
    case "team":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "insurance":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "locations":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      );
    case "reviews":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
        </svg>
      );
  }
}
