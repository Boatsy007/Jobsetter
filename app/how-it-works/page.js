import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "How JobSetter Works | Trade Lead Follow-Up",
  description: "See how JobSetter contacts trade leads, qualifies jobs, books appointments, follows up quotes and reports on results.",
};

const steps = [
  ["01","Contact","New-work enquiries from web forms, lead platforms, emails and missed-call systems get an instant text, then a call from our Australian-based team within 30 minutes during business hours."],
  ["02","Qualify","We check each job against your rules: service area, job type, minimum job size, budget, timing and anything else that matters."],
  ["03","Book","Good-fit jobs are booked into your calendar for the agreed next step: site visit, quote appointment, estimator call, consultation or measure-up."],
  ["04","Follow up","Every agreed open quote is followed up on a set schedule until it is won, lost or clearly dead. The outcome and reason are recorded."],
  ["05","Report + reactivate","We bring old leads and past customers back into play, then report on response times, bookings, quote outcomes and revenue won where the data allows."],
];

export default function HowItWorksPage(){
  return <main>
    <Header/><ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>HOW IT WORKS</small><h1>Someone owns the lead until there’s an answer.</h1><p>Getting the enquiry is only the start. JobSetter gives your business a team responsible for moving opportunities forward.</p></div></section>
    <section className="section"><div className="shell operatingSteps longSteps">{steps.map(([n,t,p])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
    <section className="section"><div className="shell storyIntro"><h2>One person knows your account.</h2><p>Each client has a named account manager who learns your service area, job criteria, calendar setup, lead sources, follow-up rules and common questions.</p></div></section>
    <section className="section"><div className="shell doDontGrid"><article><small>OUR JOB</small><h3>Own the follow-up.</h3><ul><li>Contact new enquiries</li><li>Qualify them</li><li>Book the right ones</li><li>Follow up open quotes</li><li>Reactivate old opportunities</li><li>Track outcomes</li><li>Report what happened</li></ul></article><article><small>NOT OUR JOB</small><h3>Run your whole office.</h3><ul><li>Live-answer every call</li><li>Manage emergency work</li><li>Run advertising</li><li>Write quotes</li><li>Invoice customers</li><li>Replace your estimator</li></ul></article></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>WHAT WE NEED FROM YOU</small><h2>It only works if both sides do their part.</h2></div><div><p>Send agreed leads to JobSetter. Give us the calendar access we need. Send quotes within the agreed timeframe after site visits. Tell us when jobs are won or lost. Keep availability and qualification rules up to date.</p><p>If we’re chasing quotes you haven’t sent, there’s not much we can recover.</p></div></div></section>
    <section className="ctaSection"><div className="shell simpleCta"><h2>Want to see it on your own pipeline?</h2><p>Start with the 30-Day Revenue Recovery Pilot.</p><a className="button" href="/pilot">See the pilot <b>→</b></a></div></section>
    <MarketingFooter/>
  </main>
}