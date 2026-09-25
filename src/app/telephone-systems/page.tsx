import { ServicePage } from "@/components/ServicePage";
import { telephoneSystems } from "@/content/services/telephone-systems";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(telephoneSystems);

export default function TelephoneSystemsPage() {
  return <ServicePage service={telephoneSystems} />;
}
