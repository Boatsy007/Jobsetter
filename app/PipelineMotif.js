export default function PipelineMotif({ compact = false, tone = "light" }) {
  const steps = [
    ["Lead", "Captured"],
    ["Contact", "Worked"],
    ["Book", "Next step"],
    ["Quote", "Followed up"],
    ["Win", "Outcome"],
  ];

  return (
    <div className={`pipelineMotif ${compact ? "compact" : ""} ${tone === "dark" ? "dark" : ""}`} aria-label="JobSetter pipeline">
      <div className="pipelineLine" aria-hidden="true" />
      {steps.map(([title, sub], index) => (
        <div className="pipelineNode" key={title}>
          <span>{index + 1}</span>
          <div><b>{title}</b>{!compact && <small>{sub}</small>}</div>
        </div>
      ))}
    </div>
  );
}
