"use client";

import { useId, useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS, FORM_SECTION_ID, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="pk-faq-layout">
          <div className="pk-faq-intro">
            <Reveal>
              <p className="section-label">FAQ</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Questions before you take the next step.
              </h2>
              <p className="text-lead mt-4">
                Straight answers about eligibility, insurance, and what care looks like at Peak.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={`#${FORM_SECTION_ID}`} className="btn btn-primary">
                  Find out if you Qualify
                </a>
                <a href={PHONE_HREF} className="btn btn-outline">
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0">
            <Reveal delay={2}>
              {FAQ_ITEMS.map((item, index) => {
                const open = openIndex === index;
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-btn-${index}`;

                return (
                  <div key={item.question} className={`pk-faq-item${open ? " is-open" : ""}`}>
                    <button
                      type="button"
                      id={buttonId}
                      className="pk-faq-trigger"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      {item.question}
                      <span className="pk-faq-icon" aria-hidden>
                        +
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="pk-faq-panel"
                    >
                      <div className="pk-faq-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
