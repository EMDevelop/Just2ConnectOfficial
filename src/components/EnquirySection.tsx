import { ContactForm } from "@/components/ContactForm";

export interface EnquirySectionProps {
  readonly heading?: string;
  readonly intro?: string;
}

/** Closing enquiry block used at the foot of the home and service pages. */
export function EnquirySection({
  heading = "Talk to us",
  intro = "Tell us what you need and we will come back to you with a straight answer and a price.",
}: EnquirySectionProps) {
  return (
    <section className="enquirySection">
      <ContactForm heading={heading} intro={intro} onLightBackground />
    </section>
  );
}
