import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import PilotForm from "../PilotForm";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "Book a Call | JobSetter Australia",
  description: "See if JobSetter suits your trade business. Tell us about your leads, team and average job value and book a pilot call.",
};

export default function ContactPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>BOOK A CALL</small><h1>Let’s see if JobSetter actually fits your business.</h1><p>A short call. We’ll look at your lead volume, average job value and where follow-up is currently falling over. If we don’t think JobSetter makes sense, we’ll say so.</p></div></section>
    <section className="ctaSection"><div className="shell ctaCard"><div className="ctaCopy"><h2>Tell us about the business.</h2><p>The form takes about a minute. Submitting it does not lock you into the pilot or an ongoing plan.</p><div className="contactFacts"><span><b>30-day pilot</b>$990 + GST</span><span><b>Core</b>$2,490 + GST / month</span><span><b>Growth</b>$4,490 + GST / month</span></div></div><PilotForm/></div></section>
    <MarketingFooter/>
    </main>
  </>
}
