import type { StaticImageData } from "next/image";

import terryPhoto from "@/images/Contact/Terry.jpg";

export interface Person {
  readonly name: string;
  readonly role: string;
  readonly photo: StaticImageData;
  readonly bio: readonly string[];
}

export const people: readonly Person[] = [
  {
    name: "Terry Martin",
    role: "CEO",
    photo: terryPhoto,
    bio: [
      "Terry Martin graduated from Bradford University and started his business career at Hewlett Packard. He then moved to Apple UK in the sales team, rising to Sales Director. He subsequently became a Sales Director of Samsung in 1997 before moving to Ingram Micro as the Commercial Sales Director, responsible for sales of over £500 million. He joined Scoot in 1999 as a Sales Director, becoming Managing Director in 2001. In 2006, he was appointed to the Board of Coms plc, which was listed on the London Stock Exchange AIM market in 2006 with a vision to use the internet to carry and deliver voice telephone calls as an alternative to traditional telephony.",
      "Terry founded Just2Connect in 2009, offering new and innovative telephony and broadband solutions to businesses.",
    ],
  },
];
