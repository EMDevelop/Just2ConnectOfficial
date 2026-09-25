import Image from "next/image";

import { clientLogos } from "@/content/clients";
import type { ClientLogo } from "@/content/clients";

function LogoTrack({ hidden = false }: { readonly hidden?: boolean }) {
  return (
    <ul className="logoMarquee__track" aria-hidden={hidden ? "true" : undefined}>
      {clientLogos.map((client: ClientLogo) => (
        <li key={client.name} className="logoMarquee__item">
          <Image
            src={client.logo}
            alt={hidden ? "" : client.name}
            className={
              client.rounded === true
                ? "logoMarquee__logo logoMarquee__logo--rounded"
                : "logoMarquee__logo"
            }
            sizes="140px"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Continuously scrolling wall of customer logos.
 *
 * Two identical tracks sit side by side and both slide left by their own width,
 * so the loop is seamless. The second is hidden from assistive technology to
 * avoid reading every company name twice. The animation is disabled under
 * `prefers-reduced-motion`, where it becomes a normal scrollable row.
 */
export function LogoMarquee() {
  return (
    <section className="logoMarquee" aria-labelledby="logo-marquee-heading">
      <h2 id="logo-marquee-heading" className="logoMarquee__heading">
        Trusted by {clientLogos.length}+ businesses across Hertfordshire,
        Bedfordshire and Buckinghamshire
      </h2>

      <div className="logoMarquee__viewport">
        <LogoTrack />
        <LogoTrack hidden />
      </div>
    </section>
  );
}
