import type { Metadata } from "next";

import type { ServiceContent } from "@/types/service-content";

export interface PageMetadataInput {
  readonly title: string;
  readonly description: string;
  /** Root-relative path, e.g. "/contact-us". */
  readonly path: string;
}

/**
 * Builds the per-page metadata. Every page needs its own title, description and
 * canonical: the previous build served one shared title across all ten URLs.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
    },
  };
}

export function buildServiceMetadata(service: ServiceContent): Metadata {
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
  });
}
