import { credentials } from "@/content/credentials";

export function Credentials() {
  return (
    <section className="credentials" aria-labelledby="credentials-heading">
      <h2 id="credentials-heading" className="credentials__heading">
        Why businesses stay with us
      </h2>

      <ul className="credentials__grid">
        {credentials.map((item) => (
          <li key={item.title} className="credential">
            <h3 className="credential__title">{item.title}</h3>
            <p className="credential__detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
