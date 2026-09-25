import type { NextConfig } from "next";

/**
 * Permanent redirects from the URLs the previous Create React App build served.
 *
 * Next.js matches `source` case-insensitively, so a redirect is only safe when the
 * lowercased source differs from the destination. Every pair below satisfies that:
 * the new slugs are hyphenated, the old ones were not.
 */
const legacyRedirects = [
  { from: "/TelephoneSystems", to: "/telephone-systems" },
  { from: "/mobile-worker", to: "/telephone-systems" },
  { from: "/multiple-sites", to: "/telephone-systems" },
  { from: "/office", to: "/telephone-systems" },
  { from: "/Broadband", to: "/business-broadband" },
  { from: "/VideoConferencing", to: "/video-conferencing" },
  { from: "/MobileSIM", to: "/business-mobile-sim" },
  { from: "/mobile-phones", to: "/business-mobile-sim" },
  { from: "/VirtualPhoneNumbers", to: "/virtual-phone-numbers" },
  { from: "/SIPTrunks", to: "/sip-trunks" },
  { from: "/About", to: "/about-us" },
  { from: "/company-information", to: "/about-us" },
  { from: "/Contact", to: "/contact-us" },
  { from: "/Privacy", to: "/privacy-policy" },
  { from: "/home/how-to-help", to: "/" },
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
