import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import PilotForm from "../PilotForm";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "Book a Call",
  description: "See if JobSetter suits your Australian trade business. Tell us about your lead volume, quotes and average job value and book a short fit call.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Call | JobSetter",
    description: "See whether JobSetter's Australian human lead and quote follow-up service fits your business and pipeline.",
    url: "/contact",
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
    title: "Book a Call | JobSetter",
    description: "See whether JobSetter's Australian human lead and quote follow-up service fits your business and pipeline.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>BOOK A CALL</small><h1>Let’s see if JobSetter actually fits your business.</h1><p>A short call. We’ll look at your lead volume, average job value and where follow-up is currently falling over. If we don’t think JobSetter makes sense, we’ll say so.</p></div></section>
    <section className="ctaSection"><div className="shell ctaCard"><div className="ctaCopy"><h2>Tell us about the business.</h2><p>The form takes about a minute. Submitting it does not lock you into any plan.</p><div className="contactFacts"><span><b>Starter</b>$1,000 + GST / month</span><span><b>Core</b>$2,490 + GST / month</span><span><b>Growth</b>$4,490 + GST / month</span></div></div><PilotForm mode="contact"/></div></section>
    <MarketingFooter/>
    </main>
  </>
}
