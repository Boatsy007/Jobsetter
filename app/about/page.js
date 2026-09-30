import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "About JobSetter | Australian Trade Revenue Team",
  description: "Learn why JobSetter was created to help Australian trade businesses follow up leads, quotes and past customers properly.",
};

export default function AboutPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>ABOUT JOBSETTER</small><h1>Built to fix the part between getting the lead and winning the job.</h1><p>Good trade businesses lose opportunities for a simple reason: nobody owns the follow-up.</p></div></section>
    <section className="section"><div className="shell founderPlaceholder"><small>FOUNDER STORY</small><h2>Rohan’s story goes here.</h2><p>[Rohan to supply founder story, why he started JobSetter, and the exact team location/structure before this section is published as final.]</p></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>HOW WE WORK</small><h2>Australian-based. Human-led.</h2></div><div><p>Customer follow-up is handled by an Australian-based team. AI and automation support the repetitive work around the conversation: instant texts, reminders and admin.</p><p>They don’t replace the people speaking to your customers.</p></div></div></section>
    <section className="section proofPlaceholder"><div className="shell storyIntro"><h2>We’re at the start.</h2><p>JobSetter is a new business. We’re not going to fill this page with fake testimonials, made-up results or logos from businesses we’ve never worked with.</p></div><div className="shell comingResults"><small>FOUNDING PILOT RESULTS WILL GO HERE</small><span>Response times</span><span>Bookings</span><span>Quote outcomes</span><span>Revenue won</span></div></section>
    <MarketingFooter/>
    </main>
  </>
}
