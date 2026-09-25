import { ServicePage } from "@/components/ServicePage";
import { sipTrunks } from "@/content/services/sip-trunks";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(sipTrunks);

export default function SipTrunksPage() {
  return <ServicePage service={sipTrunks} />;
}
