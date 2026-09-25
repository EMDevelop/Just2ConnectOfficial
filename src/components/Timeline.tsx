import { timeline } from "@/content/timeline";

export function Timeline() {
  return (
    <section className="timelineSection" aria-labelledby="history-heading">
      <h2 id="history-heading" className="timelineSection__title">
        Our History
      </h2>

      <ol className="timeline">
        {timeline.map((entry, index) => (
          <li
            key={`${entry.year}-${index}`}
            className={
              entry.highlighted === true
                ? "timeline__entry timeline__entry--highlighted"
                : "timeline__entry"
            }
          >
            <span className="timeline__marker" aria-hidden="true" />
            <div className="timeline__card">
              <h3 className="timeline__year">{entry.year}</h3>
              <p>{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
