import Reveal from "@/components/Reveal";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">How it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Start with eligibility—then build a plan around you.
          </h2>
          <p className="text-lead mt-4">
            TMS and Spravato® require screening. We make that first step clear, compassionate, and
            straightforward.
          </p>
        </Reveal>

        <ol className="pk-steps list-none p-0">
          {HOW_IT_WORKS.map((item, index) => (
            <li key={item.step}>
              <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)} className="pk-step">
                <p className="pk-step-num">{item.step}</p>
                <h3 className="pk-step-title">{item.title}</h3>
                <p className="pk-step-desc">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
