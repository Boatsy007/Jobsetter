import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "JobSetter Pricing | Trade Lead Follow-Up",
  description: "JobSetter plans from $2,490 + GST per month. See allowances, extras, terms and the 30-Day Revenue Recovery Pilot.",
};

const plans=[
  ["Core","$2,490",["35 new enquiries contacted and qualified","25 open quotes followed up","50 old leads and past customers reactivated","Weekly summary","Monthly revenue report","Quarterly results review","Named account manager"]],
  ["Growth","$4,490",["60 new enquiries contacted and qualified","50 open quotes followed up","100 old leads and past customers reactivated","Weekly summary","Monthly revenue report","Quarterly results review","Named account manager"]],
];

export default function PricingPage(){
  return <>
    <Header/>
    <main className="site-main">
    <ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>PRICING</small><h1>Pay for follow-up. Not a cut of your revenue.</h1><p>Straight monthly pricing. No performance fee. No percentage of jobs you win. No long lock-in contract.</p></div></section>
    <section className="section"><div className="shell priceCards">{plans.map(([name,price,items],i)=><article key={name} className={i===1?"featuredPrice":""}><small>{name.toUpperCase()}</small><h3>{price} <span>+ GST / month</span></h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul><a className="button" href="/pilot">Start with the pilot <b>→</b></a></article>)}</div></section>
    <section className="section"><div className="shell storyIntro"><h2>Need more than your monthly allowance?</h2><p>We tell you before extra charges apply. No surprise overage bill at the end of the month.</p></div><div className="shell extraPriceGrid"><article><b>$35 + GST</b><span>per additional enquiry</span></article><article><b>$45 + GST</b><span>per additional open quote</span></article><article><b>$9 + GST</b><span>per additional reactivation contact</span></article></div></section>
    <section className="section"><div className="shell storyIntro"><h2>Quiet month? Use the capacity somewhere else.</h2><p>If you don’t use your full new-enquiry allowance in a quieter month, unused capacity can be moved into additional reactivation work by agreement with your account manager.</p></div></section>
    <section className="section darkSection"><div className="shell splitIntro"><div><small>SIMPLE TERMS</small><h2>Month-to-month.</h2></div><div><p>30 days’ notice. No percentage of revenue. No performance fee. No long lock-in contract.</p><p><b>Your first 30 days: $990 + GST. Then $2,490 + GST a month if you continue. No lock-in.</b></p></div></div></section>
    <section className="section guaranteeSection"><div className="shell guaranteeGrid"><div><small>SERVICE STANDARD</small><h2>Accountable for the follow-up.</h2></div><div><p>New enquiries are contacted within 30 minutes during business hours. Open quotes are followed up to an outcome.</p><p>If JobSetter misses that service standard, the monthly fee will be reduced. The exact reduction will be confirmed in the service agreement before the guarantee is activated.</p><small>This does not guarantee sales or revenue.</small></div></div></section>
    <MarketingFooter/>
    </main>
  </>
}
