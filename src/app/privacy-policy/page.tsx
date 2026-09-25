import { business, mailtoHref } from "@/content/business";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Just2Connect collects, uses and stores your personal information, and the cookies used on this website.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "25 September 2026";

function formattedAddress(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    business.address;

  return `${streetAddress}, ${addressLocality}, ${addressRegion}, ${postalCode}`;
}

export default function PrivacyPolicyPage() {
  return (
    <article className="prosePage">
      <p className="prosePage__eyebrow">{business.tradingName}</p>
      <h1 className="prosePage__title">Privacy Policy</h1>
      <p className="prosePage__updated">Last updated {LAST_UPDATED}</p>

      <div className="prose">
        <h2>About us</h2>
        <p>
          We are {business.legalName}, a provider of internet, telephony and
          related services. This privacy notice explains how we use any personal
          information we collect about you when you use this website. Our
          website is operated by {business.legalName}, company registration{" "}
          {business.companyNumber}, registered office: {formattedAddress()}.
        </p>

        <h2>What information do we collect about you?</h2>
        <p>We collect:</p>
        <ul>
          <li>
            Your name, contact details and the services you are interested in,
            when you submit an enquiry or register an interest in one of our
            services, as well as any transaction details.
          </li>
          <li>
            Your name and contact details when you voluntarily complete customer
            surveys published on our website and provide feedback.
          </li>
        </ul>

        <h2>How will we use the information about you?</h2>
        <p>
          We collect information about you to enable us to process and respond
          to your enquiry or interest.
        </p>
        <p>
          The information you provide to us when you complete a survey or
          provide feedback will be used to improve the services we provide.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          We do not set any analytics cookies unless you choose
          &ldquo;Accept&rdquo; on the cookie banner. If you accept, we load
          Google Analytics, which sets cookies to count visits and tell us which
          pages people find useful. The data these cookies store never shows
          personal details from which your identity can be established.
        </p>
        <p>
          You can change your mind at any time by clearing this site&rsquo;s
          data in your browser, which removes the stored choice and shows the
          banner again. You can also block cookies entirely using your
          browser&rsquo;s settings. Note that if you block all cookies, some
          websites may not work as expected.
        </p>

        <h2>Links to other websites</h2>
        <p>
          Our website may contain links to other websites over which we have no
          control. We are not responsible for the privacy policies or practices
          of other websites you choose to visit from ours, and we encourage you
          to review their privacy policies.
        </p>

        <h2>Call recordings</h2>
        <p>
          All support calls made and received by {business.tradingName} are
          recorded and may be used to support the learning and development of
          our staff. They may also be used when investigating compliments and
          complaints.
        </p>
        <p>
          Calls will be managed in the same way as all other personal
          information processed by us, in line with current legislation.
        </p>

        <h2>How we share information</h2>
        <p>
          Only {business.tradingName} staff will have access to your
          information, and we will not share your data with any other third
          party. We will not use or share your information for automated
          decision making, profiling or marketing purposes unless you consent to
          it.
        </p>

        <h2>How long do we keep your personal data?</h2>
        <p>
          We hold the information you submit to us for one year after the last
          contact. The information collected from cookies is kept for as long as
          is reasonably necessary to provide you with a good experience when
          browsing our website.
        </p>

        <h2>Legal basis for the processing of your information</h2>
        <p>
          We, and you, have a legitimate interest in us providing you with the
          information you ask us for. It is necessary for us to process your
          information in order to do this.
        </p>
        <p>
          We, and users of our services, have a legitimate interest in better
          understanding how we can improve our services. In order to do this it
          is necessary for us to process the information you provide when you
          complete enquiry forms, customer surveys and feedback questionnaires.
        </p>
        <p>
          Analytics cookies are set only on the basis of the consent you give
          through the cookie banner.
        </p>

        <h2>Your rights</h2>
        <p>You have a right to:</p>
        <ul>
          <li>Access the information we hold about you.</li>
          <li>Correct inaccuracies in the information we hold about you.</li>
          <li>
            Withdraw any consent you have given to the use of your information.
          </li>
          <li>
            Complain to the relevant supervisory authority in any jurisdiction
            about our use of your information.
          </li>
          <li>
            In some circumstances: erase information we hold about you; receive
            a copy of your personal data in an electronic format and require us
            to provide this information to a third party; restrict the use of
            information we hold about you; and object to the use of information
            we hold about you.
          </li>
        </ul>
        <p>You can exercise these rights by contacting us as detailed below.</p>

        <h2>How to contact us</h2>
        <p>Data Protection Officer, {formattedAddress()}</p>
        <p>
          Or email <a href={mailtoHref}>{business.email}</a>.
        </p>

        <h2>How to complain</h2>
        <p>
          You also have the right to raise any concerns about how your personal
          data is being processed by us with the Information Commissioner&rsquo;s
          Office (ICO):
        </p>
        <ul>
          <li>
            <a
              href="https://ico.org.uk/concerns"
              target="_blank"
              rel="noreferrer"
            >
              ico.org.uk/concerns
            </a>
          </li>
          <li>0303 123 1113</li>
        </ul>

        <h2>Changes to our privacy notice</h2>
        <p>
          We keep our privacy notice under regular review and we will place any
          updates on this webpage.
        </p>
      </div>
    </article>
  );
}
