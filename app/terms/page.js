export const metadata = {
  title: "Terms | JobSetter",
  description: "Website, pilot and service terms for JobSetter."
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <div className="legalShell">
        <a className="brand legalBrand brandImageLink" href="/"><img className="legalLogo" src="/jobsetterlogo.png" alt="JobSetter" /></a>
        <p className="legalUpdated">Last updated: 30 September 2026</p>
        <h1>JobSetter Terms</h1>
        <p>These website terms summarise the current public offer. A client service agreement may contain additional commercial, privacy, confidentiality and operational terms and will control if there is any inconsistency.</p>

        <h2>30-Day Revenue Recovery Pilot</h2>
        <p>The current pilot is <strong>$990 + GST</strong> for 30 days. If the client continues into a monthly JobSetter plan, the full pilot fee is credited against the first monthly invoice.</p>
        <p>The pilot scope is agreed before work begins and may include new enquiries, open quotes, reactivation contacts and measurement of starting response times or win rates where reliable baseline data exists.</p>
        <p>There is no automatic rollover into paid monthly service. Ongoing service starts only if the client expressly chooses to continue.</p>

        <h2>Who JobSetter is designed for</h2>
        <p>JobSetter is primarily designed for established, higher-ticket trade businesses that already generate demand. A strong fit will generally have around 3–20 staff, at least 20 enquiries per month, typical jobs of around $3,000 or more, an existing quoting process and capacity to take on more work.</p>
        <p>JobSetter may not be suitable for businesses with very low lead volume, mainly low-ticket service calls, no capacity for more work or no practical way to track quote outcomes.</p>

        <h2>What JobSetter does</h2>
        <p>JobSetter provides human-led lead and quote follow-up supported by AI and automation. Depending on the agreed scope, this can include contacting new enquiries, qualification, booking, open-quote follow-up, reactivation and reporting.</p>

        <h2>What JobSetter does not do</h2>
        <p>Unless specifically agreed, JobSetter does not provide live call answering, emergency dispatch, marketing or advertising management, quote writing, invoicing, debt collection, technical trade advice, regulated advice or unlimited contact attempts.</p>

        <h2>Client responsibilities</h2>
        <p>The client must send agreed leads to JobSetter, provide required calendar or system access, provide accurate qualification and service-area rules, send quotes within the agreed timeframe after site visits, and tell JobSetter when jobs are won or lost.</p>
        <p>The client remains responsible for the quality, pricing, delivery and legal compliance of its own products and services.</p>
        <p>For customer or prospect data supplied to JobSetter, the client must ensure the information can lawfully be used for the agreed contact and must communicate any restrictions, withdrawals of consent or do-not-contact requests promptly.</p>

        <h2>Ongoing plans</h2>
        <p><strong>Core: $2,490 + GST per month</strong> — up to 35 new enquiries contacted and qualified, 25 open quotes followed up and 50 reactivation contacts, plus weekly summary, monthly revenue report and quarterly results review.</p>
        <p><strong>Growth: $4,490 + GST per month</strong> — up to 60 new enquiries contacted and qualified, 50 open quotes followed up and 100 reactivation contacts, plus weekly summary, monthly revenue report and quarterly results review.</p>
        <p>Ongoing service is month-to-month with 30 days’ notice unless otherwise agreed. There is no percentage-of-revenue fee and no performance fee.</p>

        <h2>Additional usage</h2>
        <p>Where the client requests work beyond the included allowance, the current additional rates are <strong>$35 + GST per new enquiry</strong>, <strong>$45 + GST per open quote</strong> and <strong>$9 + GST per reactivation contact</strong>. JobSetter will tell the client before additional charges apply.</p>
        <p>In quieter months, unused new-enquiry allowance may be moved into additional reactivation work by agreement with the account manager.</p>

        <h2>Service standard</h2>
        <p>The intended service standard is for agreed new enquiries to be contacted within 30 minutes during business hours and for agreed open quotes to be followed up to an outcome.</p>
        <p>If JobSetter misses the agreed service standard, the applicable fee reduction will be the amount stated in the client service agreement. The exact reduction is not yet published on this website.</p>

        <h2>No sales or revenue guarantee</h2>
        <p>JobSetter does not guarantee a particular number of bookings, jobs, sales or revenue. Customer decisions, lead quality, pricing, demand, availability, service quality and other factors remain outside JobSetter’s control.</p>

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
