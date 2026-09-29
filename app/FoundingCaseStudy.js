import { foundingCaseStudy } from "./data/caseStudy";

export default function FoundingCaseStudy() {
  if (!foundingCaseStudy.published) return null;

  return (
    <section className="section caseStudySection" id="case-study">
      <div className="shell caseStudyGrid">
        <div>
          <div className="eyebrow"><span /> VERIFIED FOUNDING CLIENT CASE STUDY</div>
          <h2>{foundingCaseStudy.clientName}</h2>
          <p className="caseStudyMeta">{foundingCaseStudy.trade} · {foundingCaseStudy.location} · {foundingCaseStudy.period}</p>
          <p className="leadText">{foundingCaseStudy.summary}</p>
          {foundingCaseStudy.quote && (
            <blockquote>
              “{foundingCaseStudy.quote}”
              <footer>{foundingCaseStudy.quoteName}{foundingCaseStudy.quoteRole ? ` — ${foundingCaseStudy.quoteRole}` : ""}</footer>
            </blockquote>
          )}
        </div>
        <div className="caseMetricGrid">
          {foundingCaseStudy.metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              {metric.note && <small>{metric.note}</small>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
