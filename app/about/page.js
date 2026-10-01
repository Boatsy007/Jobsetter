import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";
import FounderSection from "../FounderSection";

export const metadata = {
  title: "About Us",
  description: "Meet JobSetter and learn why the Australian human-led service was built to help trade businesses follow up leads, quotes and past opportunities properly.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JobSetter | Australian Human Lead Follow-Up",
    description: "Why JobSetter exists, how the Australian team works and why real people handle customer conversations.",
    url: "/about",
    type: "website",
    locale: "en_AU",
    siteName: "JobSetter",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "JobSetter — Turn leads into jobs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About JobSetter | Australian Human Lead Follow-Up",
    description: "Why JobSetter exists, how the Australian team works and why real people handle customer conversations.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>ABOUT JOBSETTER</small><h1>Built to fix the part between getting the lead and winning the job.</h1><p>Good trade businesses lose opportunities for a simple reason: nobody owns the follow-up.</p></div></section>
    <FounderSection />
    <section className="section darkSection"><div className="shell splitIntro"><div><small>HOW WE WORK</small><h2>Australian-based. Human-led.</h2></div><div><p>Customer follow-up is handled by an Australian-based team. AI and automation support the repetitive work around the conversation: instant texts, reminders and admin.</p><p>They don’t replace the people speaking to your customers.</p></div></div></section>
    <section className="section proofPlaceholder"><div className="shell storyIntro"><h2>We’re at the start.</h2><p>JobSetter is a new business. We’re not going to fill this page with fake testimonials, made-up results or logos from businesses we’ve never worked with.</p></div><div className="shell comingResults"><small>FOUNDING CLIENT RESULTS WILL GO HERE</small><span>Response times</span><span>Bookings</span><span>Quote outcomes</span><span>Revenue won</span></div></section>
    <MarketingFooter/>
    </main>
  </>
}
