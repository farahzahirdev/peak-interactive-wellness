import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  FORM_SECTION_ID,
  IMAGES,
  PROVIDERS_SECTION_ID,
  TEAM_URL,
} from "@/lib/constants";

export default function Providers() {
  return (
    <section id={PROVIDERS_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <div className="pk-providers-media">
              <Image
                src={IMAGES.meetOurTeam}
                alt="Meet the Peak Interactive Wellness clinical team in Denver and Greenwood Village"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="pk-providers-hero-img"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={2}>
              <p className="section-label">Our providers</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">Meet our team.</h2>
              <p className="text-lead mt-4">
                Compassionate, licensed nurse practitioners take time to understand your full
                story (emotional, physical, and environmental) so your treatment plan reflects you,
                not just a diagnosis.
              </p>
              <p className="mt-4 text-base text-muted">
                From evaluation through TMS, Spravato®, and ongoing medication management, you&apos;ll
                work with a dedicated Colorado team that listens first and partners with you for the
                long haul.
              </p>
            </Reveal>

            <Reveal delay={3} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                Find out if you Qualify
              </a>
              <a
                href={TEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Meet our providers
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
