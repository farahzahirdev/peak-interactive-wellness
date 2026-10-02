import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-24 bg-white/60">
      <div className="container-main">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Social proof</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Over 350 five-star Google reviews.
          </h2>
          <p className="text-lead mt-4">
            Patients describe feeling heard, respected, and finally partnered with a team that takes
            their whole story seriously.
          </p>
        </Reveal>

        <div className="pk-quotes">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.quote.slice(0, 24)} delay={(Math.min((index % 4) + 1, 4) as 1 | 2 | 3 | 4)}>
              <figure className="pk-quote">
                <div className="pk-stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <div className="pk-quote-mark" aria-hidden>
                  “
                </div>
                <blockquote>{item.quote}</blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
