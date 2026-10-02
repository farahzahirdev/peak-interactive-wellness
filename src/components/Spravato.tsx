import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FORM_SECTION_ID, IMAGES } from "@/lib/constants";

const EXPECT = [
  "In-office nasal spray under licensed supervision",
  "Private, supportive setting with post-session monitoring",
  "Insurance verification and prior-auth support available",
] as const;

export default function Spravato() {
  return (
    <section id="spravato" className="scroll-mt-24 py-10 sm:py-14">
      <div className="container-main">
        <Reveal>
          <div className="pk-spravato-panel">
            <div className="pk-spravato-copy">
              <p className="section-label">Spravato®</p>
              <h2 className="pk-spotlight-title text-teal-deep">
                Hope for depression that hasn&apos;t found lasting relief.
              </h2>
              <p className="mt-3 max-w-xl text-lead !text-base">
                Spravato® (esketamine) is a prescription nasal spray that targets NMDA receptors to
                support new neural pathways—administered only in-clinic through the REMS program.
              </p>

              <ul className="pk-expect-list">
                {EXPECT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-6">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                  See if Spravato® is right for you
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="pk-spravato-media">
              <Image
                src={IMAGES.spravato}
                alt="Supportive treatment setting for Spravato® therapy at Peak Interactive Wellness"
                fill
                quality={95}
                sizes="(max-width: 900px) 100vw, 48vw"
                className="pk-spravato-img"
              />
            </div>
          </div>
        </Reveal>
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
