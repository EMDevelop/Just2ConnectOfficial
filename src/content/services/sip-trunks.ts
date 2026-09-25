import heroImage from "@/images/ProductPage/sipTrunksHero.svg";
import type { ServiceContent } from "@/types/service-content";

export const sipTrunks: ServiceContent = {
  slug: "sip-trunks",
  navLabel: "SIP Trunks",
  heading: "SIP Trunks",
  strapline: ["Low Cost Calls", "No Line Rental", "Business Continuity"],
  metaTitle: "SIP Trunks for Business",
  metaDescription:
    "SIP trunks let your existing PBX make and receive calls over the internet. A direct replacement for ISDN lines, with lower call costs and no line rental.",
  heroImage,
  heroImageAlt: "Illustration of SIP trunk connectivity",
  nutshell: [
    "SIP Trunks enable a traditional PBX telephone system to make and receive calls over the internet, and are a direct replacement for traditional ISDN lines. Our Business SIP connections have been designed for reliability and flexibility.",
  ],
  features: [
    {
      title: "Business Continuity",
      description:
        "If your office has to be temporarily relocated, continuity can quickly and cost effectively be achieved with SIP trunking.",
    },
    {
      title: "Save Money",
      description:
        "IP connectivity costs less than ISDN with lower monthly rental charges and generally lower call costs.",
    },
    {
      title: "Flexibility",
      description:
        "Having a SIP connection allows you to move office and keep your same geographic number, without any ongoing call forwarding costs.",
    },
    {
      title: "Resilience",
      description:
        "A phone service that will cope with any situation and ensure up time on your telephony.",
    },
    {
      title: "Line Rationalisation",
      description:
        "SIP trunks remove the need for ISDN lines, thereby dramatically reducing your monthly line costs.",
    },
  ],
  faqs: [
    {
      question: "Can I replace my ISDN lines with a SIP Trunk?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, SIP trunks are a direct replacement for ISDN lines. You will save money, plus SIP trunks don't normally have monthly subscription costs, unlike ISDN lines, and calls are cheaper.",
        },
        {
          kind: "paragraph",
          text: "ISDN is being switched off completely on 31 January 2027, so this is a move every business still on ISDN needs to make.",
        },
      ],
    },
    {
      question: "Can I use a SIP Trunk on my PBX?",
      answer: [
        {
          kind: "paragraph",
          text: "Many have the capability for SIP trunks already built in. If not, you can either add a SIP card to the PBX or buy a converter box - available from many suppliers.",
        },
      ],
    },
    {
      question: "Can I keep my existing phone numbers?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, you can. You can 'port' your numbers to the SIP trunk provider and all your incoming and outgoing calls will go over the SIP trunk.",
        },
        {
          kind: "paragraph",
          text: "Another option is to retain inbound calls over the ISDN lines, but reduce the number of lines you pay for, and use the SIP trunk for outbound calls. You wouldn't need to port your numbers in this scenario, and this would also give you greater continuity if either the ISDN lines or the SIP trunk was down.",
        },
      ],
    },
    {
      question: "How many concurrent calls can I have on my SIP Trunk?",
      answer: [
        {
          kind: "paragraph",
          text: "A SIP trunk can have as many channels or concurrent calls as you need. Most SIP trunk providers sell channel capacity in batches.",
        },
        {
          kind: "paragraph",
          text: "Each SIP trunk call takes up 100KB bandwidth on your broadband, so if you have a maximum of 10 concurrent calls at any one time, you would need to have 1MB of broadband available for the calls. If you need to ask any questions, give us a call on 01442 573030.",
        },
      ],
    },
  ],
};
