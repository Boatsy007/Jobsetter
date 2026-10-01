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
            <p>Building JobSetter around one thing: worthwhile opportunities deserve proper follow-up.</p>
          </div>
        </div>

        <div className="founderMessage">
          <div className="eyebrow"><span /> WHY JOBSETTER EXISTS</div>
          <h2>Getting the lead is only half the job.</h2>
          <p className="leadText">
            Rohan comes from a hands-on trade and fabrication background and later moved into marketing and business. JobSetter was created around a simple operational gap: trade businesses can spend heavily generating enquiries and preparing quotes, then lose momentum because nobody has the time to consistently follow every opportunity through.
          </p>
          <p>
            The service is designed to give owners a real Australian team responsible for those conversations, while AI and automation handle much of the repetitive admin, reminders and workflow around them.
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
