import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import PilotForm from "../PilotForm";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "30-Day JobSetter Pilot | Test It On Your Leads",
  description: "Your first 30 days with JobSetter are $990 + GST. Then $2,490 + GST a month if you continue. No lock-in.",
};

export default function PilotPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero pilotPageHero"><div className="shell"><small>30-DAY REVENUE RECOVERY PILOT</small><h1>Let your own leads prove whether JobSetter is worth it.</h1><p>No made-up case study. Give us 30 days with your real pipeline.</p><div className="pilotPrice">$990 <span>+ GST</span></div><strong>Your first 30 days: $990 + GST. Then $2,490 + GST a month if you continue. No lock-in.</strong></div></section>
    <section className="section"><div className="shell pilotDayGrid"><article><small>DAYS 1–3</small><h3>Learn the business.</h3><p>Services, service area, ideal jobs, calendar, lead flow, quoting process and your starting response times and win rate where the data exists.</p></article><article><small>WEEK 1</small><h3>Build the workflow.</h3><p>Scripts, qualification questions, lead routing, follow-up schedule and reporting.</p></article><article><small>WEEKS 1–4</small><h3>Work the pipeline.</h3><p>Agreed new enquiries, open quotes, old leads and past customers.</p></article><article><small>DAY 30</small><h3>Review the numbers.</h3><p>What came in, what was contacted, what was booked, what happened to the quotes and what revenue was won.</p></article></div></section>
    <section className="section"><div className="shell storyIntro"><h2>We compare before and after.</h2><p>Depending on the data available, the pilot tracks your actual response time, qualified leads, appointments, quote outcomes, lost reasons and revenue won from worked opportunities.</p></div><div className="shell comingResults"><small>YOUR PILOT REPORT</small><span>Response time</span><span>Qualified leads</span><span>Appointments</span><span>Quote outcomes</span><span>Revenue won</span></div><div className="shell estimateDisclaimer">Actual pilot data only. Not an industry benchmark and not a promise of future results.</div></section>
    <section className="section"><div className="shell fitGrid"><div className="fitPanel goodFit"><small>A STRONG PILOT FIT</small><ul><li>Roughly 3–20 staff</li><li>20+ enquiries per month</li><li>Typical jobs around $3,000+</li><li>Existing quoting process</li><li>Owner, estimator or manager involved in quotes</li><li>Capacity for more work</li></ul></div><div className="fitPanel notFit"><small>WHAT WE NEED FROM YOU</small><h3>Give us a pipeline we can actually work.</h3><p>Send agreed leads to JobSetter. Give calendar access. Send quotes within the agreed timeframe after site visits. Tell us when jobs are won or lost. Keep your availability and job criteria current.</p></div></div></section>
    <section className="ctaSection"><div className="shell ctaCard"><div className="ctaCopy"><h2>Book the pilot call.</h2><p>We’ll look at your lead volume, average job value and current follow-up before recommending anything.</p><p>If JobSetter isn’t a good fit, we’ll tell you.</p></div><PilotForm/></div></section>
    <MarketingFooter/>
    </main>
  </>
}
