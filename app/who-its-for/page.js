import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "Who JobSetter Is For | High-Ticket Trade Businesses",
  description: "JobSetter is built for established Australian trade businesses with valuable jobs, steady enquiries and quotes that need follow-up.",
};

export default function WhoItsForPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>WHO IT’S FOR</small><h1>JobSetter works best when every missed job costs real money.</h1><p>We’re built for higher-ticket trade businesses with enough lead flow to justify a dedicated follow-up team.</p></div></section>
    <section className="section"><div className="shell fitGrid"><div className="fitPanel goodFit"><small>YOU’LL PROBABLY GET THE MOST VALUE IF</small><ul><li>You have around 3–20 staff.</li><li>You receive 20+ new enquiries each month.</li><li>Your typical jobs are worth $3,000 or more.</li><li>Your owner, manager or estimator is still involved in quoting.</li><li>You already spend money or effort generating leads.</li><li>You have open quotes sitting there waiting for an answer.</li><li>You have old leads or customers nobody is consistently contacting.</li></ul></div><div className="fitPanel notFit"><small>PROBABLY NOT RIGHT YET</small><ul><li>You’re a sole trader with very few leads.</li><li>Most jobs are small, same-day service calls.</li><li>You mainly need someone to answer phones live.</li><li>You want us to generate leads through advertising.</li><li>You don’t have capacity for more work.</li><li>You don’t send quotes promptly.</li><li>You don’t track which jobs are won or lost.</li></ul></div></div></section>
    <section className="section"><div className="shell storyIntro"><h2>Businesses we’re designed around.</h2><p>Builders. Renovators. Roofers. Solar installers. Pool builders. Landscapers. HVAC installation businesses. Kitchen companies. Bathroom renovators. Other project-based trades with meaningful average job values.</p></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>STRAIGHT ANSWER</small><h2>We’d rather tell you before you pay us.</h2></div><div><p>If a dedicated revenue desk isn’t the right spend for your business yet, we’ll say so. The pilot call starts with fit, not a hard sell.</p><a className="button white" href="/contact">Check if JobSetter fits <b>→</b></a></div></div></section>
    <MarketingFooter/>
    </main>
  </>
}
