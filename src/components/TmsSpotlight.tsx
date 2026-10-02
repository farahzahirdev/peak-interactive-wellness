import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FORM_SECTION_ID, IMAGES } from "@/lib/constants";

const EXPECT = [
  "Comprehensive evaluation to confirm candidacy",
  "Non-invasive sessions—no anesthesia required",
  "Typically covered by many commercial plans for qualifying patients",
] as const;

export default function TmsSpotlight() {
  return (
    <section id="tms" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <div className="pk-tms-panel">
            <div className="pk-tms-media">
              <Image
                src={IMAGES.tms}
                alt="Patient receiving TMS therapy in a comfortable clinical setting"
                fill
                quality={95}
                sizes="(max-width: 900px) 100vw, 52vw"
                className="pk-tms-img"
                unoptimized
              />
            </div>

            <div className="pk-tms-copy">
              <p className="pk-spotlight-kicker">TMS Therapy</p>
              <h2 className="pk-spotlight-title">
                Targeted brain stimulation—not another medication trial.
              </h2>
              <p className="pk-spotlight-lede">
                When depression hasn&apos;t responded to antidepressants, TMS delivers precise
                magnetic pulses to underactive mood circuits. Sessions are comfortable; most people
                return to their day afterward.
              </p>
              <ul className="pk-expect-list">
                {EXPECT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                  See if TMS is right for you
                  <ArrowIcon />
                </a>
              </div>
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
