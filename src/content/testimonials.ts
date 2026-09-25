export interface Testimonial {
  readonly quote: string;
  /** Fragment of `quote` to render in the accent colour. */
  readonly emphasis: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "It was the best thing we ever did! Terry and his team offer a first-class service - highly recommend them",
    emphasis: "best thing we ever did!",
    name: "Jackie Steadman",
    role: "Founder",
    company: "TravelTimeWorld",
  },
  {
    quote:
      "Terry Martin is the epitome of great service who goes out of his way to make sure everything is first rate. Use him. You will not be disappointed",
    emphasis: "the epitome of great service",
    name: "Bryan Wright",
    role: "Director",
    company: "Yellowyoyo",
  },
  {
    quote:
      "They are a great company to work with, they know us and our set up personally - I really could not be happier with the service",
    emphasis: "could not be happier with the service",
    name: "Melanie Langley",
    role: "Managing Director",
    company: "Oliver Myles",
  },
  {
    quote:
      "Amazing and excellent are just not enough to describe the level of service received from this company - and fantastic value",
    emphasis: "fantastic value",
    name: "Chris Davy",
    role: "Owner",
    company: "Davy Associates",
  },
  {
    quote:
      "Reliable, responsive and helpful for my business needs. I would highly recommend them to anyone",
    emphasis: "Reliable, responsive and helpful",
    name: "David Green",
    role: "Owner",
    company: "Greens Of Berkhamsted",
  },
  {
    quote: "Very helpful and a pleasure to deal with",
    emphasis: "pleasure to deal with",
    name: "Jamie Rankin",
    role: "CEO",
    company: "Micklefield Hall",
  },
];
