import Image from "next/image";

import tickIcon from "@/images/icons/tickIconPink.svg";
import type { ServiceFeature } from "@/types/service-content";

export interface FeatureGridProps {
  readonly features: readonly ServiceFeature[];
  readonly title?: string;
}

export function FeatureGrid({ features, title = "Features" }: FeatureGridProps) {
  if (features.length === 0) {
    return null;
  }

  return (
    <section className="featureSection" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sectionTitle">
        {title}
      </h2>

      <ul className="featureGrid">
        {features.map((feature) => (
          <li key={feature.title} className="featureItem">
            <Image
              src={tickIcon}
              alt=""
              className="featureItem__icon"
              unoptimized
            />
            <h3 className="featureItem__title">{feature.title}</h3>
            <p className="featureItem__text">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
