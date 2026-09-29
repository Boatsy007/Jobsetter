const metrics = [
  ["Leads", "248", "+12%"],
  ["Contacted", "236", "+96%"],
  ["Qualified", "178", "+24%"],
  ["Booked", "122", "+28%"],
  ["Quotes sent", "96", "+18%"],
  ["Jobs won", "87", "+26%"],
];

const steps = [
  ["01", "Lead comes in", "Calls, forms, chats and ad leads are captured in one place."],
  ["02", "We contact fast", "A real setter responds quickly, qualifies the enquiry and keeps the conversation moving."],
  ["03", "We book the job", "Qualified work is booked into your calendar around your availability and service area."],
  ["04", "We follow up", "Quotes are chased, cold leads are reactivated and no good opportunity is left sitting."],
];

const features = [
  ["Missed-call answering", "Every genuine enquiry gets a response, even when you're on the tools."],
  ["Lead qualification", "We filter tyre-kickers and pass through the jobs that fit your business."],
  ["Appointment booking", "Jobs and quote appointments are booked directly into your calendar."],
  ["Quote follow-up", "We follow up open quotes so more quoted work turns into revenue."],
  ["Lead reactivation", "Old enquiries and past customers become a fresh source of work."],
  ["CRM updates", "Every conversation, status and next action is kept organised and visible."],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="shell nav">
          <a className="brand" href="#top"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></a>
          <nav className="desktopNav">
            <a href="#how">How it works</a>
            <a href="#features">What we do</a>
            <a href="#why">Why JobSetter</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button small" href="#demo">Book a demo</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div>
            <div className="eyebrow"><span /> OUTSOURCED FRONT OFFICE FOR TRADIES</div>
            <h1>Turn more leads into <span>booked jobs.</span></h1>
            <p className="heroText">JobSetter answers, qualifies, books and follows up every lead so you can focus on the work. Human-led where judgement matters. AI-assisted everywhere else.</p>
            <div className="heroActions">
              <a className="button" href="#demo">Book a demo →</a>
              <a className="button secondary" href="#how">See how it works</a>
            </div>
            <div className="proofRow">
              <span>✓ Human setters</span><span>✓ AI-assisted follow-up</span><span>✓ Built for service businesses</span>
            </div>
          </div>

          <div className="dashboardWrap">
            <div className="dashboardTop"><div className="miniBrand"><b>Job</b><span>Setter</span></div><div className="dashboardPill">Last 30 days</div></div>
            <div className="dashboardTitle"><small>Your pipeline</small><strong>More leads. More booked jobs.</strong></div>
            <div className="metricGrid">
              {metrics.map(([label,value,delta]) => <div className="metricCard" key={label}><span>{label}</span><b>{value}</b><em>{delta}</em></div>)}
            </div>
            <div className="pipeline">
              <div><span>Sarah Mitchell</span><small>Hot water system</small><b className="status booked">Booked</b></div>
              <div><span>Daniel Kerr</span><small>Bathroom renovation</small><b className="status qualified">Qualified</b></div>
              <div><span>Lisa Carter</span><small>Blocked drain</small><b className="status quote">Quote sent</b></div>
            </div>
            <div className="revenueCard"><span>Attributed revenue</span><b>$42,680</b><small>from won jobs this month</small></div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="shell">
          <div className="sectionIntro centered">
            <div className="eyebrow"><span /> HOW IT WORKS</div>
            <h2>A simple process. A busier business.</h2>
            <p>We sit between your marketing and your calendar, making sure opportunities actually move.</p>
          </div>
          <div className="stepsGrid">{steps.map(([num,title,text]) => <article className="stepCard" key={num}><div className="stepNum">{num}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section soft" id="features">
        <div className="shell sectionIntro">
          <div className="eyebrow"><span /> EVERYTHING YOU NEED</div>
          <h2>Your front office, without building one yourself.</h2>
          <p>The goal is not more software. The goal is fewer missed opportunities, better visibility and more jobs booked from the leads you already generate.</p>
        </div>
        <div className="shell featureGrid">{features.map(([title,text]) => <article className="featureCard" key={title}><div className="featureIcon">✓</div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section" id="why">
        <div className="shell whyGrid">
          <div>
            <div className="eyebrow"><span /> BUILT AROUND THE OUTCOME</div>
            <h2>Not another marketing agency. Not another CRM.</h2>
            <p className="leadText">JobSetter is the operating layer between an enquiry and a booked job. We combine people, process and automation around the result your business actually cares about.</p>
          </div>
          <div className="comparisonCard">
            <div><small>Old way</small><b>Leads arrive everywhere</b><p>Missed calls, slow replies, inconsistent qualification, quotes forgotten, no clear pipeline.</p></div>
            <div className="compareArrow">→</div>
            <div><small>JobSetter</small><b>One conversion system</b><p>Every lead captured, contacted, qualified, booked, followed up and visible.</p></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell darkGrid">
          <div><div className="eyebrow light"><span /> HUMAN-LED. AI-ASSISTED.</div><h2>Automation where it saves time. Humans where it wins trust.</h2></div>
          <div className="darkCards"><div><strong>Humans handle</strong><p>Real conversations, objections, qualification, judgement and the moments where your reputation matters.</p></div><div><strong>AI handles</strong><p>Summaries, reminders, CRM updates, lead scoring, reporting and repetitive follow-up work.</p></div></div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="shell faqGrid">
          <div className="sectionIntro"><div className="eyebrow"><span /> FAQ</div><h2>What business owners usually ask first.</h2></div>
          <div className="faqList">
            <details open><summary>Do you replace my receptionist?</summary><p>You can use JobSetter as your primary lead-conversion front office or alongside your existing team.</p></details>
            <details><summary>Is it an AI phone service?</summary><p>No. The core offer is human-led. AI supports the team behind the scenes.</p></details>
            <details><summary>Can you work with my CRM?</summary><p>Yes. The model is designed to plug into existing systems wherever practical.</p></details>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="demo">
        <div className="shell ctaCard">
          <div><div className="eyebrow light"><span /> READY WHEN YOU ARE</div><h2>You do the work. We make sure it gets booked.</h2><p>See how JobSetter could sit behind your business and turn more enquiries into real jobs.</p></div>
          <a className="button white" href="mailto:hello@jobsetter.com.au?subject=JobSetter%20demo">Book a demo →</a>
        </div>
      </section>

      <footer><div className="shell footerGrid"><div className="brand"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></div><div>© {new Date().getFullYear()} JobSetter. Australia.</div></div></footer>
    </main>
  );
}
