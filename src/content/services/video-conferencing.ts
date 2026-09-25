import heroImage from "@/images/ProductPage/videoConferencingHero.svg";
import type { ServiceContent } from "@/types/service-content";

export const videoConferencing: ServiceContent = {
  slug: "video-conferencing",
  navLabel: "Video Conferencing",
  heading: "Video Conferencing",
  strapline: ["Video Conferencing", "Communicate Face To Face"],
  metaTitle: "Business Video Conferencing",
  metaDescription:
    "Web Meet video conferencing for up to 100 participants. Screen sharing, recording and instant messaging, supported locally by Just2Connect.",
  heroImage,
  heroImageAlt: "Illustration of a video conference call",
  nutshell: [
    "Web Meet allows up to 100 users at a time to securely video call and conference.",
  ],
  features: [
    {
      title: "Screen Sharing",
      description:
        "Communicate face to face with participants using screen sharing.",
    },
    {
      title: "Instant Messaging",
      description:
        "Private or public messaging allows you to converse in real time, share links, text and much more.",
    },
    {
      title: "Video Recording",
      description:
        "Record and review your meeting through the Web Meet portal with easy playback.",
    },
    {
      title: "Blur Background",
      description:
        "Hide your location if required by toggling the 'blur background' option.",
    },
    {
      title: "Multiple Conferences",
      description:
        "You can have multiple conferences running simultaneously, with a number of participants in each call.",
    },
    {
      title: "Range Of Shortcuts",
      description:
        "Speed up and customise your call with a range of control shortcuts within the video conference call.",
    },
    {
      title: "Speaker Stats",
      description: "Ensure everyone has airtime throughout the conference.",
    },
  ],
  faqs: [
    {
      question: "Can I use Web Meet on my mobile and tablet?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, the system is compatible with most devices.",
        },
      ],
    },
    {
      question: "Do I have to pay separately for each video conference?",
      answer: [
        {
          kind: "paragraph",
          text: "No, you pay a flat monthly fee for the service and access to as many conferences as you wish with up to 100 participants in each conference.",
        },
      ],
    },
    {
      question:
        "Do participants have to pay to dial into the conference by telephone?",
      answer: [
        {
          kind: "paragraph",
          text: "We will allocate you a local rate number for your participants to call to access the service. They will only pay the same amount they'd pay to their provider to make a local call. If they were using a mobile with unlimited calls, they wouldn't have to pay anything as the cost of the call would be included in their monthly mobile tariff.",
        },
      ],
    },
    {
      question: "Can I join a conference with voice and video turned off?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, you can. Simply click on the voice and video icons to toggle each one on and off.",
        },
      ],
    },
  ],
};
