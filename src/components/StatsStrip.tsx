import { stats } from "@/content/credentials";

export function StatsStrip() {
  return (
    <section className="statsStrip" aria-label="Just2Connect at a glance">
      <dl className="statsStrip__list">
        {stats().map((stat) => (
          <div key={stat.label} className="stat">
            <dt className="stat__label">{stat.label}</dt>
            <dd className="stat__value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
