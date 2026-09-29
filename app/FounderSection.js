export default function FounderSection() {
  const videoUrl = process.env.NEXT_PUBLIC_FOUNDER_VIDEO_URL;
  const imageUrl = process.env.NEXT_PUBLIC_FOUNDER_IMAGE_URL;

  return (
    <section className="section founderSection" id="founder">
      <div className="shell founderGrid">
        <div className="founderIdentity">
          {imageUrl ? (
            <img className="founderPhoto" src={imageUrl} alt="Rohan, founder of JobSetter" />
          ) : (
            <div className="founderAvatar" aria-hidden="true">RH</div>
          )}
          <div>
            <small>FOUNDER, JOBSETTER</small>
            <h3>Rohan</h3>
            <p>Building JobSetter around one thing: no good lead should be left sitting there.</p>
          </div>
        </div>

        <div className="founderMessage">
          <div className="eyebrow"><span /> WHY JOBSETTER EXISTS</div>
          <h2>Getting the lead is only half the job.</h2>
          <p className="leadText">
            JobSetter is being built around a simple idea: if a business is already spending time and money creating enquiries,
            somebody should be responsible for working every worthwhile opportunity until there is a clear next step.
          </p>
          <p className="founderPromise">Before we go live, you know who is talking to your customers, what a good job looks like and exactly how bookings get handed back to you.</p>
          {videoUrl && (
            <video className="founderVideo" controls preload="metadata" poster={imageUrl || undefined} src={videoUrl}>
              Your browser does not support video playback.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
