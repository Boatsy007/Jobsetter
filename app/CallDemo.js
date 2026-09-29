export default function CallDemo() {
  const url = process.env.NEXT_PUBLIC_CALL_DEMO_URL;
  if (!url) return null;

  return (
    <section className="section callDemoSection" id="call-demo">
      <div className="shell callDemoGrid">
        <div>
          <div className="eyebrow"><span /> HEAR A REAL JOBSETTER CALL</div>
          <h2>Listen to the service instead of reading about it.</h2>
          <p className="leadText">This recording is published only with the required consent and with customer-identifying information removed where appropriate.</p>
        </div>
        <div className="audioCard">
          <small>ANONYMISED / CONSENTED CALL DEMO</small>
          <audio controls preload="metadata" src={url}>Your browser does not support audio playback.</audio>
        </div>
      </div>
    </section>
  );
}
