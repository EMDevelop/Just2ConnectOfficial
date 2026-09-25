/**
 * Typed access to the `NEXT_PUBLIC_*` variables.
 *
 * Next.js inlines these at build time only when referenced as complete literals,
 * so each one is spelled out rather than looked up dynamically.
 */
export interface PublicEnv {
  readonly emailJsServiceId: string;
  readonly emailJsTemplateId: string;
  readonly emailJsPublicKey: string;
  readonly gaMeasurementId: string;
}

export const publicEnv: PublicEnv = {
  emailJsServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  emailJsTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  emailJsPublicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
};

/**
 * The enquiry form falls back to a "please call us" message rather than failing
 * silently, so a missing key never costs a lead without telling the visitor.
 */
export function isEmailJsConfigured(): boolean {
  return (
    publicEnv.emailJsServiceId !== "" &&
    publicEnv.emailJsTemplateId !== "" &&
    publicEnv.emailJsPublicKey !== ""
  );
}

export function isAnalyticsConfigured(): boolean {
  return publicEnv.gaMeasurementId !== "";
}
