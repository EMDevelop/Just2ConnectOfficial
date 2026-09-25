import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { business } from "@/content/business";
import { allServices } from "@/content/services";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="notFound">
      <h1 className="pageHeading">We can&rsquo;t find that page</h1>
      <p className="notFound__text">
        The page you were after has moved or no longer exists. Here is
        everything we do:
      </p>

      <ul className="notFound__links">
        {allServices.map((service) => (
          <li key={service.slug}>
            <Link href={`/${service.slug}`}>{service.navLabel}</Link>
          </li>
        ))}
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact us</Link>
        </li>
      </ul>

      <div className="notFound__actions">
        <CallLink source="not_found" className="buttonPrimary">
          Call {business.phone.display}
        </CallLink>
        <Link href="/" className="buttonSecondary">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
