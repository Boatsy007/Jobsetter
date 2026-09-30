const steps = ["LEAD", "CONTACT", "BOOK", "QUOTE", "WIN"];

export default function ProcessBanner() {
  return (
    <div className="processBanner" aria-label="JobSetter process">
      <div className="processBannerTrack">
        {steps.map((step, index) => (
          <div className="processBannerStep" key={step} style={{ "--step": index }}>
            <span>{step}</span>
            {index < steps.length - 1 && <i>→</i>}
          </div>
        ))}
      </div>
    </div>
  );
}
