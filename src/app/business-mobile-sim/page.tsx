import { ServicePage } from "@/components/ServicePage";
import { businessMobileSim } from "@/content/services/business-mobile-sim";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(businessMobileSim);

export default function BusinessMobileSimPage() {
  return <ServicePage service={businessMobileSim} />;
}
