export interface TimelineEntry {
  readonly year: string;
  readonly description: string;
  /** Renders in the dark accent style. Used for the first and last entries. */
  readonly highlighted?: boolean;
}

export const timeline: readonly TimelineEntry[] = [
  {
    year: "2009",
    description:
      "Just2Connect is founded - offering new and innovative telephony solutions to businesses.",
    highlighted: true,
  },
  {
    year: "2011",
    description:
      "Just2Connect enters the broadband space to significantly improve clients' experience.",
  },
  {
    year: "2012",
    description:
      "Just2Connect becomes a reseller for Timico's voice platform, Synergy.",
  },
  {
    year: "2014",
    description:
      "Just2Connect employs an in-house marketing consultant, Richard Quilter.",
  },
  {
    year: "2016",
    description:
      "Just2Connect relocates from Park Royal, London and opens its head office in Berkhamsted, Herts.",
  },
  {
    year: "2016",
    description: "Just2Connect joins the local BNI chapter to network locally.",
  },
  {
    year: "2016",
    description:
      "Just2Connect joins the Hospice of St Francis Corporate Partner Programme.",
  },
  {
    year: "2017",
    description:
      "Just2Connect expands to provide telephone systems and broadband to businesses in Tring, Hemel Hempstead and Aylesbury.",
  },
  {
    year: "2017",
    description:
      "Berkhamsted & District Chamber of Commerce is formed and Just2Connect becomes a member.",
  },
  {
    year: "2017",
    description:
      "Just2Connect makes front page news in The Gazette for supplying superfast broadband to a business industrial estate in Berkhamsted.",
  },
  {
    year: "2018",
    description:
      "Just2Connect joins forces with FNS IT to provide first line support to our customers.",
  },
  {
    year: "2018",
    description:
      "Just2Connect expands to provide telephone systems and broadband to businesses in Watford, Luton and Harpenden.",
  },
  {
    year: "2019",
    description:
      "Just2Connect mentors a team from JFK School, Hemel Hempstead in the Dragons Apprentice Challenge.",
  },
  {
    year: "2020",
    description:
      "Just2Connect helps local businesses adapt to lockdown and home working during the pandemic.",
  },
  {
    year: "2021",
    description:
      "Just2Connect expands to provide telephone systems and broadband to businesses in Harrow and St Albans.",
  },
  {
    year: "2021",
    description: "Goldendoodle Molly appointed as MD (Managing Doggo).",
  },
];
