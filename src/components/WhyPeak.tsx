import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FORM_SECTION_ID, IMAGES, WHY_ITEMS } from "@/lib/constants";

export default function WhyPeak() {
  return (
    <section id="why" className="section-padding scroll-mt-24 bg-white/60">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="section-label">Why Peak</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Whole-person care that listens first.
              </h2>
              <p className="text-lead mt-4">
                We&apos;re here for the self-aware, the self-starters, and anyone who&apos;s tried
                therapy or medication before and felt something was missing. Mental health is
                personal—your care should be, too.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <ul className="pk-why-grid list-none p-0">
                {WHY_ITEMS.map((item) => (
                  <li key={item} className="pk-why-item">
                    <span className="pk-why-check" aria-hidden>
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3} className="mt-8">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-teal">
                Find out if you Qualify
              </a>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="pk-why-media">
              <Image
                src={IMAGES.clinic}
                alt="Calm, modern clinic space at Peak Interactive Wellness"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="pk-why-img"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
