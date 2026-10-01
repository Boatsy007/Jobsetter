import Header from "../../Header";
import MarketingFooter from "../../MarketingFooter";

export const metadata = {
  title: "How Fast Should You Contact a New Trade Lead?",
  description: "A practical speed-to-lead guide for Australian trade businesses, including what to automate and where human follow-up matters.",
  alternates: { canonical: "/playbook/how-fast-to-contact-a-new-lead" },
};

export default function SpeedToLeadGuide(){
  return <>
    <Header/>
    <main className="site-main">
      <article className="guideArticle">
        <header className="guideHero shell">
          <a className="guideBack" href="/playbook">← The Follow-Up Playbook</a>
          <small>NEW ENQUIRIES · 5 MIN READ</small>
          <h1>How fast should you contact a new trade lead?</h1>
          <p>If somebody has just asked for help, the easiest time to speak with them is while the problem is still front of mind.</p>
        </header>
        <div className="guideBody shell">
          <h2>Fast matters, but fast does not mean careless.</h2>
          <p>An instant automated acknowledgement is useful because it confirms the enquiry arrived. But it should not be confused with an actual sales conversation.</p>
          <p>For genuine new-work enquiries during business hours, a strong operational standard is to have a real person attempt contact quickly rather than letting the enquiry wait until the end of the day.</p>

          <h2>Use automation for the waiting, not the relationship.</h2>
          <p>Automation is excellent for instant texts, reminders, task creation and routing. The customer conversation is where a human can clarify the job, understand urgency, answer simple questions and move the lead to the correct next step.</p>

          <h2>Qualification should be simple.</h2>
          <p>The objective is not to interrogate the customer. Confirm the service area, job type, timing and any minimum-job criteria that genuinely matter. Then book the appropriate next step.</p>

          <div className="guideCallout">
            <b>A clean new-lead workflow</b>
            <span>Enquiry arrives → instant acknowledgement → human call → qualify → book next step → set follow-up if not reached.</span>
          </div>

          <h2>Missed first call? The lead is not dead.</h2>
          <p>One unanswered call should not end the process. A sensible multi-touch follow-up sequence gives the customer more than one opportunity to respond without bombarding them.</p>

          <h2>The bottleneck is usually consistency.</h2>
          <p>The hardest part is not knowing what to do. It is making sure the process happens when the owner is on site, driving, quoting or dealing with current jobs.</p>
        </div>
      </article>
      <MarketingFooter/>
    </main>
  </>;
}
