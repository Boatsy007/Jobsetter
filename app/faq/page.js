import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "JobSetter FAQ | Leads, Quotes, Pricing & Pilot",
  description: "Answers about JobSetter’s Australian team, lead follow-up, quote chasing, pricing, pilot, software and service terms.",
};

const faqs=[
["Do you answer my phone?","No. JobSetter is not a live answering service. Your business can use an AI receptionist or missed-call text-back system to capture missed calls. We then contact genuine new-work enquiries it captures."],
["What about emergencies?","We don’t manage emergency call-outs. JobSetter is designed for project and quote-based work where the enquiry can be qualified and booked into an agreed next step."],
["Is your team in Australia?","Yes. JobSetter’s customer follow-up team is Australian-based. AI and automation support repetitive tasks, but customer conversations are human-led."],
["How quickly do you contact new enquiries?","Our service standard is within 30 minutes during business hours. An instant text can be sent immediately, followed by a call from the team."],
["What if I go over my monthly allowance?","We tell you before additional charges apply. Extra work is $35 + GST per enquiry, $45 + GST per open quote and $9 + GST per reactivation contact."],
["Is there a lock-in contract?","No long lock-in contract. Monthly plans are month-to-month with 30 days’ notice."],
["Do you charge a percentage of the work I win?","No. There is no percentage of revenue and no performance fee."],
["How do you measure results?","We track what happens to the opportunities we work: response time, qualified leads, bookings, quote outcomes, lost reasons and revenue won where the data is available."],
["What software do you work with?","We aim to work around your existing calendar, CRM and job-management setup wherever practical. The exact workflow is confirmed during onboarding."],
["What do you need from me?","Send agreed leads to JobSetter, provide the calendar access we need, send quotes within the agreed timeframe after site visits, tell us when jobs are won or lost, and keep availability and job criteria current."],
["What happens after the pilot?","We review the 30-day results. Your first 30 days are $990 + GST. If you continue, the Core plan is $2,490 + GST a month. No lock-in. If you don’t continue, there is no automatic monthly service."],
["Do you write my quotes?","No. Your business remains responsible for preparing and sending quotes. JobSetter follows them up after they have been sent."],
["Do you generate leads?","No. JobSetter is not a marketing agency. We work the enquiries, quotes and past contacts your business already has."],
["Do you guarantee I’ll win more jobs?","No. Customers still make their own decisions. JobSetter is accountable for the agreed follow-up work and service standard, not a particular sales or revenue result."],
["What is the service guarantee?","Every agreed new enquiry is contacted within 30 minutes during business hours and every agreed open quote is followed up to an outcome. If we miss that service standard, the monthly fee will be reduced. The exact reduction is confirmed in the service agreement before the guarantee is activated."],
["How do you handle my customers’ data and privacy?","Customer data is used to perform the agreed JobSetter service. We use appropriate systems and service providers for communications, CRM, automation and reporting. Your business remains responsible for ensuring customer information can lawfully be used for the agreed contact. See our Privacy Policy for more detail."],
["Can I move unused allowance between services?","In quieter months, unused new-enquiry allowance can be moved into extra reactivation work by agreement with your account manager."],
];

export default function FaqPage(){
  return <main>
    <Header/><ProcessBanner/>
    <section className="pageHero"><div className="shell"><small>FAQ</small><h1>Straight answers before you start.</h1><p>No sales fog. Here’s what JobSetter does, doesn’t do and what it costs.</p></div></section>
    <section className="section"><div className="shell faqCompact">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="ctaSection"><div className="shell simpleCta"><h2>Still not sure if it fits?</h2><p>Book a short call. We’ll look at your numbers first.</p><a className="button" href="/contact">Book a call <b>→</b></a></div></section>
    <MarketingFooter/>
  </main>
}