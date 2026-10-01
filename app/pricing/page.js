import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "Lead Follow-Up Pricing for Tradies",
  description: "JobSetter plans start at $1,000 + GST per month for Australian human lead and quote follow-up. Compare Starter, Core and Growth.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Lead Follow-Up Pricing for Tradies | JobSetter",
    description: "Compare JobSetter Starter, Core and Growth plans for Australian human lead and quote follow-up.",
    url: "/pricing",
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
    title: "Lead Follow-Up Pricing for Tradies | JobSetter",
    description: "Compare JobSetter Starter, Core and Growth plans for Australian human lead and quote follow-up.",
    images: ["/opengraph-image"],
  },
};

const plans=[
  ["Starter","$1,000",["10 new enquiries contacted and qualified","10 open quotes followed up","10 old leads and past customers reactivated","Australian human follow-up","AI-powered workflow and admin","CRM outcomes updated","Monthly performance summary"]],
  ["Core","$2,490",["35 new enquiries contacted and qualified","25 open quotes followed up","50 old leads and past customers reactivated","Weekly summary","Monthly revenue report","Quarterly results review","Defined multi-touch follow-up","CRM outcomes updated","Named account manager"]],
  ["Growth","$4,490",["60 new enquiries contacted and qualified","50 open quotes followed up","100 old leads and past customers reactivated","Weekly summary","Monthly revenue report","Quarterly results review","Priority calling capacity","Defined multi-touch follow-up","CRM outcomes updated","Named account manager"]],
];

export default function PricingPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>PRICING</small><h1>Pay for follow-up. Not a cut of your revenue.</h1><p>Straight monthly pricing. No performance fee. No percentage of jobs you win. No long lock-in contract.</p></div></section>
    <section className="section"><div className="shell priceCards">{plans.map(([name,price,items],i)=><article key={name} className={name==="Core"?"featuredPrice":""}><small>{name.toUpperCase()}</small><h3>{price} <span>+ GST / month</span></h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul><a className="button" href="/contact">Book a call <b>→</b></a></article>)}</div></section>
    <section className="section"><div className="shell storyIntro"><h2>Need more than your monthly allowance?</h2><p>We tell you before extra charges apply. No surprise overage bill at the end of the month.</p></div><div className="shell extraPriceGrid"><article><b>$35 + GST</b><span>per additional enquiry</span></article><article><b>$45 + GST</b><span>per additional open quote</span></article><article><b>$15 + GST</b><span>per additional reactivation contact</span></article></div></section>
    <section className="section"><div className="shell storyIntro"><h2>Human conversations. AI-powered operations.</h2><p>Real Australian people make the calls and handle customer conversations. AI supports the team with workflow, reminders, repetitive admin and reporting so more human time stays focused on customers.</p></div></section>
    <section className="section"><div className="shell storyIntro"><h2>Quiet month? Use the capacity somewhere else.</h2><p>If you don’t use your full new-enquiry allowance in a quieter month, unused capacity can be moved into additional reactivation work by agreement with your account manager.</p></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>SIMPLE TERMS</small><h2>Month-to-month.</h2></div><div><p>30 days’ notice. No percentage of revenue. No performance fee. No long lock-in contract.</p><p><b>Plans start at $1,000 + GST a month. We’ll recommend the smallest plan that properly covers your pipeline. Month-to-month with 30 days’ notice.</b></p></div></div></section>
    <section className="section guaranteeSection"><div className="shell guaranteeGrid"><div><small>SERVICE STANDARD</small><h2>Accountable for the follow-up.</h2></div><div><p>New enquiries are contacted within 30 minutes during business hours. Open quotes are followed up to an outcome.</p><p>If JobSetter misses that service standard, the monthly fee will be reduced. The exact reduction will be confirmed in the service agreement before the guarantee is activated.</p><small>This does not guarantee sales or revenue.</small></div></div></section>
    <MarketingFooter/>
    </main>
  </>
}
