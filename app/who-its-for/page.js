import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "Who JobSetter Is For | Australian Trade Businesses",
  description: "JobSetter is built for Australian trade businesses where enquiries, quotes and old opportunities are valuable enough to justify proper follow-up.",
};

export default function WhoItsForPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>WHO IT’S FOR</small><h1>JobSetter works best when every missed job costs real money.</h1><p>From busy sole traders to established teams, JobSetter is built for trade businesses with enough valuable opportunities to justify proper follow-up.</p></div></section>
    <section className="section"><div className="shell fitGrid"><div className="fitPanel goodFit"><small>YOU’LL PROBABLY GET THE MOST VALUE IF</small><ul><li>You’re a busy sole trader or you have a growing team.</li><li>You have roughly 10+ workable opportunities each month across new enquiries, open quotes or reactivation.</li><li>You have enough job value and opportunity volume that a few extra wins each month can comfortably cover JobSetter.</li><li>You or someone on your team is still involved in quoting.</li><li>You already spend money or effort generating leads.</li><li>You have open quotes sitting there waiting for an answer.</li><li>You have old leads or customers nobody is consistently contacting.</li></ul></div><div className="fitPanel notFit"><small>PROBABLY NOT RIGHT YET</small><ul><li>You have fewer than roughly 10 workable opportunities each month.</li><li>Your job value and opportunity volume are too low for a few extra wins to cover the service.</li><li>You mainly need someone to answer phones live.</li><li>You want us to generate leads through advertising.</li><li>You don’t have capacity for more work.</li><li>You don’t send quotes promptly.</li><li>You don’t track which jobs are won or lost.</li></ul></div></div></section>
    <section className="section"><div className="shell storyIntro"><h2>Businesses we’re designed around.</h2><p>Builders. Renovators. Roofers. Solar installers. Pool builders. Landscapers. HVAC businesses. Plumbers. Electricians. Other trade businesses where job value, opportunity volume, or both make consistent follow-up commercially worthwhile.</p></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>STRAIGHT ANSWER</small><h2>We’d rather tell you before you pay us.</h2></div><div><p>If a dedicated revenue desk isn’t the right spend for your business yet, we’ll say so. The call starts with fit, not a hard sell.</p><a className="button white" href="/contact">Check if JobSetter fits <b>→</b></a></div></div></section>
    <MarketingFooter/>
    </main>
  </>
}
