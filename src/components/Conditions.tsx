import Reveal from "@/components/Reveal";
import { CONDITIONS, CONDITIONS_SECTION_ID } from "@/lib/constants";

export default function Conditions() {
  return (
    <section id={CONDITIONS_SECTION_ID} className="section-padding scroll-mt-24 bg-white/60">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Who it&apos;s for</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Conditions we help treat.
          </h2>
          <p className="text-lead mt-4">
            Built for self-aware adults who want a trusted partner, especially when medication or
            therapy alone hasn&apos;t been enough.
          </p>
        </Reveal>

        <ul className="pk-cond-grid list-none p-0">
          {CONDITIONS.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <div className="pk-cond-item h-full">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
