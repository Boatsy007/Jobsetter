import Header from "../../Header";
import MarketingFooter from "../../MarketingFooter";

export const metadata = {
  title: "How to Reactivate Old Leads Without Annoying People",
  description: "A practical reactivation guide for Australian trade businesses with old enquiries, past quotes and previous customers sitting unused.",
  alternates: { canonical: "/playbook/reactivate-old-leads" },
};

export default function ReactivationGuide(){
  return <>
    <Header/>
    <main className="site-main">
      <article className="guideArticle">
        <header className="guideHero shell">
          <a className="guideBack" href="/playbook">← The Follow-Up Playbook</a>
          <small>REACTIVATION · 6 MIN READ</small>
          <h1>How to reactivate old leads without annoying people</h1>
          <p>Your database can contain real opportunities, but reactivation only works when the contact feels relevant rather than like a mass sales blast.</p>
        </header>
        <div className="guideBody shell">
          <h2>Start with the right people.</h2>
          <p>Prioritise old enquiries, previous quotes and past customers where there is a sensible reason to reconnect. Do not treat every record in a CRM as equally valuable.</p>

          <h2>Give the call context.</h2>
          <p>The person should immediately understand why you are contacting them. Refer to the previous enquiry, quote or completed job rather than opening with a generic pitch.</p>

          <h2>Ask whether the need still exists.</h2>
          <p>The best reactivation question is often simple: did the project go ahead, is it still planned, or has the situation changed? That gives the customer an easy way to answer without pressure.</p>

          <div className="guideCallout">
            <b>Keep the objective simple</b>
            <span>Reconnect → establish relevance → understand current timing → agree the next step or close the opportunity.</span>
          </div>

          <h2>Past customers are different from old leads.</h2>
          <p>A past customer already knows the business. The conversation can be about whether there is anything else coming up, whether a related service is relevant or whether they know someone who needs help.</p>

          <h2>Respect the answer.</h2>
          <p>If the opportunity is gone, record it and move on. Good reactivation improves the quality of the database as well as creating new conversations.</p>

          <h2>Do not wait until sales are quiet.</h2>
          <p>Reactivation works best as a steady process rather than a panic campaign when the calendar suddenly has gaps.</p>
        </div>
      </article>
      <MarketingFooter/>
    </main>
  </>;
}
