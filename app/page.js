import Header from "./Header";
import ProcessBanner from "./ProcessBanner";
import RevenueLeakCalculator from "./RevenueLeakCalculator";
import PilotForm from "./PilotForm";
import ScrollMotion from "./ScrollMotion";
import MarketingFooter from "./MarketingFooter";
import JobSetterFitCard from "./JobSetterFitCard";
import ProcessTimeline from "./ProcessTimeline";
import DoDontSection from "./DoDontSection";

export const metadata = {
  title: "JobSetter | Turn More Trade Leads Into Jobs",
  description: "Australian human follow-up for established trade businesses. Real people handle customer conversations while AI handles admin, reminders and reporting.",
};

const steps = [
  ["01", "Contact", "Every new enquiry gets an instant text, then a call from our Australian-based team within 30 minutes during business hours."],
  ["02", "Qualify", "We check the job against your rules: location, job type, budget and timing."],
  ["03", "Book", "Good-fit jobs go straight into your calendar for the agreed next step."],
  ["04", "Follow up", "Every open quote is followed up until it is won, lost or clearly dead, with the reason recorded."],
  ["05", "Report", "We reactivate old opportunities and report on response times, bookings, quote outcomes and revenue won against your starting point."],
];

const fit = [
  "Roughly 3–20 staff",
  "20+ enquiries a month",
  "Typical jobs worth $3,000+",
  "Owner, manager or estimator still involved in quoting",
  "Capacity to take on more profitable work",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="site-main">
      <ScrollMotion />
      <ProcessBanner />

      <section className="hero storySection heroBold" id="top">
        <div className="shell heroBoldInner">
          <div className="heroKicker">AUSTRALIAN TEAM · HUMAN CONVERSATIONS · AI-POWERED OPERATIONS</div>
          <h1>Turn leads into <span>jobs.</span></h1>

          <div className="heroBoldLower">
            <div className="heroBoldCopy">
              <p className="heroText">You get the leads. JobSetter turns them into jobs.</p>
              <p className="heroSubline">
                Real Australian people handle the conversations. AI handles the admin, reminders, workflow and reporting around them — so every opportunity keeps moving.
              </p>

              <div className="heroBoldAction">
                <a className="button heroPrimary" href="/pilot">Start the 30-day pilot <b>→</b></a>
                <a className="heroTextLink" href="#audit">Find where you’re losing leads ↓</a>
                <span>Your first 30 days: $990 + GST. Then $2,490 + GST a month if you continue. No lock-in.</span>
              </div>
            </div>

            <div className="heroVideoCard">
              {process.env.NEXT_PUBLIC_HERO_VIDEO_URL ? (
                <video className="heroVideo" src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} controls playsInline preload="metadata" />
              ) : (
                <div className="heroVideoPlaceholder">
                  <div className="heroVideoPlay">▶</div>
                  <div>
                    <small>JOBSETTER INTRO</small>
                    <strong>Your video goes here.</strong>
                    <span>Add NEXT_PUBLIC_HERO_VIDEO_URL when you're ready.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="heroProofBar">
            <span><b>AUSTRALIAN TEAM</b> Your customers speak to Australians</span>
            <span><b>HUMANS CALL</b> AI handles admin, workflow and reporting</span>
            <span><b>NO REVENUE CUT</b> Fixed monthly pricing</span>
          </div>
        </div>
      </section>

      <section className="section storySection problemSection">
        <div className="shell storyIntro">
          <h2 className="wordPulseHeadline" aria-label="You don’t need more leads.">
            <span>You</span>{" "}
            <span>don’t</span>{" "}
            <span>need</span>{" "}
            <span>more</span>{" "}
            <span>leads.</span>
          </h2>
          <p>You need to stop losing the ones you already have.</p>
        </div>
        <div className="shell problemGrid">
          <div className="problemList">
            <p>You’re on site. You’re quoting. You’re driving between jobs.</p>
            <strong>Meanwhile:</strong>
            <ul className="problemPainList">
              <li>
                <span className="painIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
                </span>
                <span>Enquiries sit for hours.</span>
              </li>
              <li>
                <span className="painIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 3h6l5 5v13H8z"/><path d="M14 3v5h5"/></svg>
                </span>
                <span>Quotes go out and never get chased.</span>
              </li>
              <li>
                <span className="painIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16v10H4z"/><path d="M4 9l8 5 8-5"/></svg>
                </span>
                <span>Old leads get buried in your inbox and job software.</span>
              </li>
              <li>
                <span className="painIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3"/><path d="M6 19c1.5-3 4-4.5 6-4.5s4.5 1.5 6 4.5"/></svg>
                </span>
                <span>Past customers never hear from you again.</span>
              </li>
            </ul>
          </div>
          <div className="problemStatement">
            <small>THE LEAK</small>
            <h3>You've already done the hard part.</h3>
            <p>Your ads, lead platforms, referrals and reputation brought the enquiry in. JobSetter makes following it through someone's actual job.</p>
          </div>
        </div>

        <JobSetterFitCard />
      </section>

      <section className="section auditSection storySection" id="audit">
        <div className="shell auditLead">
          <h2>Find the <span>leak.</span></h2>
          <p>Answer 7 quick questions and we’ll show you where your follow-up is leaking.</p>
        </div>
        <div className="shell"><RevenueLeakCalculator /></div>
      </section>

      <section className="section storySection processSection" id="how">
        <div className="shell storyIntro processIntro">
          <h2>We own the lead until there’s an answer.</h2>
          <p>From the first enquiry to the final outcome, we take responsibility for moving it forward.</p>
        </div>
        <ProcessTimeline />
        <div className="shell sectionAction"><a className="button secondary" href="/how-it-works">See the full process <b>→</b></a></div>
      </section>

      <section className="section darkSection storySection">
        <div className="shell splitIntro">
          <div>
            <small>THE DIFFERENCE</small>
            <h2>Your customers speak to Australians.</h2>
          </div>
          <div>
            <p>JobSetter is not an offshore VA service and it is not an AI receptionist.</p>
            <p>Your customer conversations are handled by real Australians. Behind them, AI and automation prepare context, handle repetitive admin, trigger reminders, update workflows and help produce reporting — keeping your JobSetter focused on the conversation.</p>
          </div>
        </div>
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>Know exactly what we do. And what we don’t.</h2>
        </div>
        <DoDontSection />
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>Built for businesses where one extra job matters.</h2>
          <p>JobSetter is for established, higher-ticket trade businesses with enough opportunity to justify proper follow-up.</p>
        </div>
        <div className="shell fitGrid">
          <div className="fitPanel goodFit">
            <small>A STRONG FIT</small>
            <ul>{fit.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Common fits include builders, renovators, roofers, solar, pools, landscaping, HVAC installs, kitchens and bathrooms.</p>
          </div>
          <div className="fitPanel notFit">
            <small>PROBABLY NOT A FIT</small>
            <h3>We’d rather tell you before you pay us.</h3>
            <p>If you’re a sole trader with only a handful of enquiries, or most of your work is low-ticket service calls, a simpler setup will probably make more sense.</p>
            <a href="/who-its-for">See who JobSetter is for →</a>
          </div>
        </div>
      </section>

      <section className="section pilotFeature storySection" id="pilot">
        <div className="shell pilotHeroGrid">
          <div>
            <small>30-DAY REVENUE RECOVERY PILOT</small>
            <h2>Give us 30 days and your real pipeline.</h2>
            <p>We measure your starting response times and win rate, then work agreed new enquiries and open quotes for 30 days.</p>
            <div className="pilotPrice">$990 <span>+ GST</span></div>
            <strong>Your first 30 days: $990 + GST. Then $2,490 + GST a month if you continue. No lock-in.</strong>
            <a className="button" href="/pilot">See the 30-day pilot <b>→</b></a>
          </div>
          <div className="pilotMeasure">
            <small>WE MEASURE</small>
            <div><b>Response time</b><span>How quickly new enquiries are contacted</span></div>
            <div><b>Bookings</b><span>Qualified opportunities booked</span></div>
            <div><b>Quote outcomes</b><span>Won, lost, dead and why</span></div>
            <div><b>Pipeline influenced</b><span>Opportunities JobSetter actively worked</span></div>
            <div><b>Recovered wins</b><span>Wins attributable to follow-up where the data supports it</span></div>
            <p>We separate pipeline influenced from attributable wins. Actual client data. No promised revenue increase.</p>
          </div>
        </div>
      </section>

      <section className="section storySection" id="pricing">
        <div className="shell storyIntro">
          <h2>Simple monthly pricing. No cut of your revenue.</h2>
          <p>Month-to-month with 30 days’ notice. No performance fee. No percentage of jobs you win.</p>
        </div>
        <div className="shell priceCards">
          <article>
            <small>CORE</small>
            <h3>$2,490 <span>+ GST / month</span></h3>
            <ul>
              <li>35 new enquiries</li>
              <li>25 open quotes</li>
              <li>50 reactivation contacts</li>
              <li>Defined multi-touch follow-up</li>
              <li>CRM outcomes updated</li>
              <li>Weekly performance summary</li>
              <li>Monthly revenue report</li>
              <li>Quarterly results review</li>
            </ul>
          </article>
          <article className="featuredPrice">
            <small>GROWTH</small>
            <h3>$4,490 <span>+ GST / month</span></h3>
            <ul>
              <li>60 new enquiries</li>
              <li>50 open quotes</li>
              <li>100 reactivation contacts</li>
              <li>Defined multi-touch follow-up</li>
              <li>CRM outcomes updated</li>
              <li>Priority calling capacity</li>
              <li>Weekly performance summary</li>
              <li>Monthly revenue report</li>
              <li>Quarterly results review</li>
            </ul>
          </article>
        </div>
        <div className="shell priceFinePrint">
          <p>Extra work, only after approval: <b>$35 + GST</b> per enquiry · <b>$45 + GST</b> per quote · <b>$15 + GST</b> per additional reactivation.</p>
          <p>Quiet month? Unused enquiry allowance can be moved into extra reactivation work.</p>
          <a className="button secondary" href="/pricing">See full pricing <b>→</b></a>
        </div>
      </section>

      <section className="section storySection employeeAltSection">
        <div className="shell employeeAltGrid">
          <div className="employeeAltIntro">
            <small>AN AUSTRALIAN TEAM. WITHOUT ANOTHER EMPLOYEE.</small>
            <h2>The follow-up capacity of an employee, without the employment overhead.</h2>
            <p>You get a real Australian team to own the follow-up, with systems and cover built into the service.</p>
          </div>

          <div className="employeeAltBenefits">
            <div><span>✓</span><b>No recruiting</b></div>
            <div><span>✓</span><b>No training from scratch</b></div>
            <div><span>✓</span><b>No payroll for another employee</b></div>
            <div><span>✓</span><b>No super or leave costs for another employee</b></div>
            <div><span>✓</span><b>No sick-leave liability</b></div>
            <div><span>✓</span><b>No day-to-day staff management</b></div>
          </div>
        </div>
        <div className="shell employeeAltFoot">
          <p>JobSetter is a service, not an employee. You keep the flexibility of a month-to-month arrangement while an Australian team handles the follow-up work.</p>
        </div>
      </section>

      <section className="section storySection teamSection">
        <div className="shell storyIntro">
          <h2>Your JobSetter team.</h2>
          <p>Real people following up your enquiries and quotes. These placeholders will be replaced with genuine team photos and names.</p>
        </div>
        <div className="shell teamGrid">
          {[
            ["First name", "Account manager"],
            ["First name", "Lead follow-up"],
            ["First name", "Quote follow-up"],
          ].map(([name, role], index) => (
            <article className="teamCard" key={role}>
              <div className="teamPhotoPlaceholder" aria-label={`Photo placeholder for team member ${index + 1}`}>
                <div className="teamPhotoFrame">
                  <span>REAL TEAM PHOTO</span>
                  <small>Candid desk photo · headset · natural</small>
                </div>
              </div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section guaranteeSection storySection">
        <div className="shell guaranteeGrid">
          <div>
            <small>SERVICE STANDARD</small>
            <h2>We’re accountable for the follow-up.</h2>
          </div>
          <div>
            <p><b>New enquiries:</b> contacted within 30 minutes during business hours.</p>
            <p><b>Open quotes:</b> followed up to a clear outcome.</p>
            <p>If we miss the service standard, the monthly fee will be reduced. The exact reduction will be confirmed in the service agreement before this guarantee is activated.</p>
            <small>This is a service-level guarantee, not a guarantee of sales or revenue.</small>
          </div>
        </div>
      </section>

      <section className="section storySection proofPlaceholder">
        <div className="shell storyIntro">
          <h2>We’re new. So we won’t pretend otherwise.</h2>
          <p>No made-up testimonials. No borrowed logos. No invented results.</p>
        </div>
        <div className="shell comingResults">
          <small>CLIENT RESULTS COMING AFTER FOUNDING PILOTS</small>
          <span>Response times</span><span>Bookings</span><span>Quote outcomes</span><span>Revenue recovered</span>
        </div>
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>A few things owners ask before they start.</h2>
        </div>
        <div className="shell faqCompact">
          <details open><summary>Do you answer my phone live?</summary><p>No. JobSetter is not a live answering service. We work new-work enquiries captured through your forms, lead platforms, emails and missed-call systems.</p></details>
          <details><summary>Is your team in Australia?</summary><p>Yes. JobSetter’s customer follow-up team is Australian-based.</p></details>
          <details><summary>Do you lock me into a contract?</summary><p>No long lock-in contract. Ongoing plans are month-to-month with 30 days’ notice.</p></details>
          <details><summary>What happens after the pilot?</summary><p>We review the 30-day numbers. Your first 30 days are $990 + GST. If you continue, the Core plan is $2,490 + GST a month. No lock-in.</p></details>
        </div>
        <div className="shell sectionAction"><a className="button secondary" href="/faq">Read all FAQs <b>→</b></a></div>
      </section>

      <section className="ctaSection storySection">
        <div className="shell ctaCard">
          <div className="ctaCopy">
            <h2>You’ve already paid for the lead. Make sure someone follows it through.</h2>
            <p>Start with the 30-Day Revenue Recovery Pilot. We’ll first check whether JobSetter actually suits your business.</p>
            <div className="pilotPrice">$990 <span>+ GST</span></div>
          </div>
          <PilotForm />
        </div>
      </section>

      <MarketingFooter />
      </main>
    </>
  );
}
