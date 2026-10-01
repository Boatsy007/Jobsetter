import Header from "../../Header";
import MarketingFooter from "../../MarketingFooter";

export const metadata = {
  title: "How to Follow Up a Quote Without Sounding Pushy",
  description: "A practical quote follow-up process for Australian trade businesses: when to call, what to say, how often to follow up and when to stop.",
  alternates: { canonical: "/playbook/how-to-follow-up-a-quote" },
};

export default function QuoteFollowUpGuide(){
  return <>
    <Header/>
    <main className="site-main">
      <article className="guideArticle">
        <header className="guideHero shell">
          <a className="guideBack" href="/playbook">← The Follow-Up Playbook</a>
          <small>QUOTE FOLLOW-UP · 6 MIN READ</small>
          <h1>How to follow up a quote without sounding pushy</h1>
          <p>The goal is not to pressure someone into saying yes. It is to stop good opportunities disappearing because nobody asked what happened next.</p>
        </header>
        <div className="guideBody shell">
          <h2>Start by changing what “follow-up” means.</h2>
          <p>A follow-up call should not sound like: “Just checking whether you’ve made a decision.” That puts all the work back on the customer.</p>
          <p>A better conversation is about helping them move to a clear next step. Ask whether anything is unclear, whether timing has changed, whether another decision-maker is involved and whether there is anything stopping the job from moving ahead.</p>

          <h2>Use a simple rhythm.</h2>
          <p>For most project-based trade quotes, a sensible starting point is an early check-in after the quote has been received, another follow-up a few days later, then progressively more spaced-out attempts. The exact timing should reflect the size of the job and the customer’s buying cycle.</p>
          <div className="guideCallout">
            <b>A practical sequence</b>
            <span>Confirm receipt → ask about questions → agree the next action → schedule the callback → record the outcome.</span>
          </div>

          <h2>Every conversation needs an outcome.</h2>
          <p>The quote should eventually move into one of a few clear states: won, lost, delayed, waiting on a decision, or no longer active. “Still sitting there” is not an outcome.</p>

          <h2>What to say.</h2>
          <p>Keep it conversational: “Hey, it’s Sam calling about the quote we sent through for the job at your place. I wanted to make sure you received it and see if there was anything you wanted us to run through.”</p>
          <p>If they need time, do not just say “no worries.” Ask when it would actually make sense to speak again and put that callback in the calendar.</p>

          <h2>Know when to stop.</h2>
          <p>Consistent follow-up does not mean endless chasing. If someone has clearly said no, chosen another provider or asked not to be contacted again, close the opportunity and record the reason. That information is useful too.</p>

          <h2>The real problem is usually ownership.</h2>
          <p>Most businesses already know they should follow up quotes. The problem is that the owner, estimator or office team is busy doing everything else. The process works when one person or team is clearly responsible for making the next call.</p>
        </div>
      </article>
      <MarketingFooter/>
    </main>
  </>;
}
