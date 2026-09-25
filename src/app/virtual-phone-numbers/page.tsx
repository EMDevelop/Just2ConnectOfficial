import { ServicePage } from "@/components/ServicePage";
import { virtualPhoneNumbers } from "@/content/services/virtual-phone-numbers";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(virtualPhoneNumbers);

export default function VirtualPhoneNumbersPage() {
  return <ServicePage service={virtualPhoneNumbers} />;
}
