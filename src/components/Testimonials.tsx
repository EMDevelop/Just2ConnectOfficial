import Image from "next/image";

import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/testimonials";
import fiveStars from "@/images/icons/FiveStars.svg";

/** Renders the quote with its emphasised fragment marked up. */
function Quote({ testimonial }: { readonly testimonial: Testimonial }) {
  const index = testimonial.quote.indexOf(testimonial.emphasis);

  if (index === -1) {
    return <p className="testimonial__quote">{testimonial.quote}</p>;
  }

  const before = testimonial.quote.slice(0, index);
  const after = testimonial.quote.slice(index + testimonial.emphasis.length);

  return (
    <p className="testimonial__quote">
      {before}
      <mark>{testimonial.emphasis}</mark>
      {after}
    </p>
  );
}

export function Testimonials() {
  return (
    <section className="testimonialSection" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="testimonialSection__title">
        What our customers say
      </h2>

      <ul className="testimonialTrack">
        {testimonials.map((testimonial) => (
          <li key={testimonial.company} className="testimonial">
            <Image
              src={fiveStars}
              alt="Rated five out of five"
              className="testimonial__stars"
              unoptimized
            />

            <blockquote>
              <Quote testimonial={testimonial} />
            </blockquote>

            <footer className="testimonial__attribution">
              <div className="testimonial__name">
                {testimonial.name}, {testimonial.role}
              </div>
              <div className="testimonial__company">{testimonial.company}</div>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
