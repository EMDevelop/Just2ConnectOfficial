import type { StaticImageData } from "next/image";

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
}

/**
 * FAQ answers are structured rather than raw JSX so the content files stay
 * plain data, which keeps them readable for non-developers and lets the same
 * answers feed FAQPage structured data later.
 */
export type FaqBlock =
  | { readonly kind: "paragraph"; readonly text: string }
  | { readonly kind: "list"; readonly items: readonly string[] };

export interface ServiceFaq {
  readonly question: string;
  readonly answer: readonly FaqBlock[];
}

export interface ServiceContent {
  readonly slug: string;
  /** Label used in the header navigation. */
  readonly navLabel: string;
  /** Page `h1`. */
  readonly heading: string;
  /** Pipe-separated strapline fragments under the heading. */
  readonly strapline: readonly string[];
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly heroImage: StaticImageData;
  readonly heroImageAlt: string;
  /** "In a nutshell" paragraphs. */
  readonly nutshell: readonly string[];
  readonly features: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
}
