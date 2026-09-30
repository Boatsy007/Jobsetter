export const metadata = {
  title: "Terms | JobSetter",
  description: "Website, pilot and service terms for JobSetter."
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <div className="legalShell">
        <a className="brand legalBrand brandWordmark" href="/"><span className="logoJob">Job</span><span className="logoSetter">Setter</span></a>
        <p className="legalUpdated">Last updated: 30 September 2026</p>
        <h1>JobSetter Terms</h1>
        <p>These website terms explain the current public offer. A client service agreement may contain additional commercial, privacy, confidentiality and operational terms and will control if there is any inconsistency.</p>

        <h2>14-Day Revenue Recovery Pilot</h2>
        <p>The founding pilot has a $0 JobSetter service fee for 14 calendar days. There is no automatic rollover into paid service. Ongoing pricing is disclosed before the pilot begins. Paid service starts only if the client expressly chooses to continue after the pilot.</p>

        <h3>Pilot operating limits</h3>
        <ul>
          <li>One business or brand, one primary service region and one primary CRM/calendar workflow.</li>
          <li>Up to 20 eligible new enquiries during the 14-day pilot.</li>
          <li>Up to 15 existing open quotes selected for recovery follow-up.</li>
          <li>Up to 25 dormant leads or past-customer contacts selected for reactivation.</li>
          <li>Standard pilot coverage: Monday to Friday, 8:00am–6:00pm in the client's local business time. Leads received outside coverage are queued for the next coverage window unless otherwise agreed.</li>
          <li>New leads: up to 5 contact attempts across up to 5 business days using the agreed channels.</li>
          <li>Open quotes: up to 4 follow-up attempts during the pilot.</li>
          <li>Reactivation contacts: up to 3 attempts during the pilot.</li>
        </ul>
        <p>Anything outside those limits requires written agreement before work begins. JobSetter may decline or narrow a pilot if volume, complexity, risk or available capacity makes the proposed scope unsuitable.</p>

        <h2>What the pilot does not include</h2>
        <p>Unless specifically agreed, the pilot does not include 24/7 emergency dispatch, cold prospecting to purchased lists, debt collection, technical trade advice, binding quotes or pricing decisions, complaint resolution, regulated advice, payment collection or unlimited contact attempts.</p>

        <h2>Client responsibilities</h2>
        <p>The client must provide accurate service areas, job criteria, availability, scripts or FAQs, escalation rules and access needed to perform the agreed work. The client remains responsible for the quality, pricing, delivery and legal compliance of its own products and services.</p>
        <p>For any customer or prospect data supplied to JobSetter, the client must ensure it is lawful for that information to be used for the agreed contact and must communicate any restrictions, withdrawals of consent or do-not-contact requests promptly.</p>

        <h2>No revenue guarantee</h2>
        <p>JobSetter does not guarantee a particular number of bookings, sales, jobs or revenue. Results depend on lead quality, pricing, demand, availability, customer decisions, service quality and other factors outside JobSetter's control.</p>

        <h2>Ongoing service after the pilot</h2>
        <p>The current standard ongoing plan is <strong>$2,490 + GST per month</strong> and includes up to 80 eligible new enquiries, up to 40 open-quote follow-up records and up to 100 reactivation contacts per month, with standard Monday–Friday 8:00am–6:00pm local-business-time coverage. Higher volumes, extra brands, extra regions, after-hours coverage or more complex workflows are quoted separately.</p>
        <p>Ongoing service is month-to-month unless otherwise agreed. A client may cancel before the next billing cycle; service continues until the end of the paid billing period unless otherwise agreed.</p>

        <h2>Pilot fit</h2>
        <p>JobSetter is primarily designed for established service businesses that already generate demand. A strong pilot candidate will generally meet most of the following:</p>
        <ul>
          <li>At least 30 new enquiries per month, or at least $25,000 of active/open quote opportunity suitable for follow-up.</li>
          <li>Typical job value of about $750 or more.</li>
          <li>Capacity to accept additional work during the next 30 days.</li>
          <li>A working calendar, CRM or other clear booking/handoff process.</li>
          <li>Lawfully usable lead and customer data for any follow-up or reactivation activity.</li>
        </ul>

        <h2>Website information</h2>
        <p>Calculators, diagnostic scores, examples and workflow illustrations on this website are educational tools. They are not financial forecasts, guarantees or industry benchmarks unless expressly stated otherwise.</p>

        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:hello@jobsetter.com.au">hello@jobsetter.com.au</a>.</p>

        <div className="legalNotice">
          <strong>Business identity</strong>
          <p>JobSetter is the trading name used for this service in Australia. The legal contracting entity and ABN are stated in any client service agreement issued to you.</p>
        </div>

        <div className="legalFooterLinks"><a href="/">Home</a><a href="/privacy">Privacy</a><a href="mailto:hello@jobsetter.com.au">Contact</a></div>
      </div>
    </main>
  );
}
