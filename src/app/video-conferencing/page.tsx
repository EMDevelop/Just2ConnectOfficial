import { ServicePage } from "@/components/ServicePage";
import { videoConferencing } from "@/content/services/video-conferencing";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(videoConferencing);

export default function VideoConferencingPage() {
  return <ServicePage service={videoConferencing} />;
}
