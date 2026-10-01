import Header from "./Header";
import ProcessBanner from "./ProcessBanner";
import RevenueLeakCalculator from "./RevenueLeakCalculator";
import ScrollMotion from "./ScrollMotion";
import MarketingFooter from "./MarketingFooter";
import JobSetterFitCard from "./JobSetterFitCard";
import ProcessTimeline from "./ProcessTimeline";
import DoDontSection from "./DoDontSection";

export const metadata = {
  title: "Turn More Trade Leads Into Jobs",
  description: "Australian human lead and quote follow-up for trade businesses. Real people handle customer conversations while AI supports admin, reminders and reporting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Turn More Trade Leads Into Jobs | JobSetter",
    description: "Australian humans follow up trade leads and quotes while AI supports the admin, workflow and reporting.",
    url: "/",
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
    title: "Turn More Trade Leads Into Jobs | JobSetter",
    description: "Australian humans follow up trade leads and quotes while AI supports the admin, workflow and reporting.",
    images: ["/opengraph-image"],
  },
};

const steps = [
  ["01", "Contact", "Every new enquiry gets an instant text, then a call from our Australian-based team within 30 minutes during business hours."],
  ["02", "Qualify", "We check the job against your rules: location, job type, budget and timing."],
  ["03", "Book", "Good-fit jobs go straight into your calendar for the agreed next step."],
  ["04", "Follow up", "Every open quote is followed up until it is won, lost or clearly dead, with the reason recorded."],
  ["05", "Report", "We reactivate old opportunities and report on response times, bookings, quote outcomes and revenue won against your starting point."],
];

const fit = [
  "Busy sole trader or growing team",
  "10+ workable opportunities a month",
  "Typical jobs worth around $2,000+",
  "You or someone on your team is still involved in quoting",
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
                <a className="button heroPrimary" href="/contact">See if JobSetter fits your business <b>→</b></a>
                <a className="heroTextLink" href="#audit">Find where you’re losing leads ↓</a>
                <span>Plans start at $1,000 + GST a month. Month-to-month. No long lock-in.</span>
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
          <h2>We own the lead until there’s an <span>answer.</span></h2>
          <p>From the first enquiry to the final outcome, we take responsibility for moving it forward.</p>
        </div>
        <ProcessTimeline />
        <div className="shell sectionAction"><a className="button secondary" href="/how-it-works">See the full process <b>→</b></a></div>
      </section>

      <section className="section darkSection storySection">
        <div className="shell splitIntro">
          <div>
            <small>THE DIFFERENCE</small>
            <h2>Your customers speak to <span>Australians.</span></h2>
          </div>
          <div>
            <p>JobSetter is not an offshore VA service and it is not an AI receptionist.</p>
            <p>Your customer conversations are handled by real Australians. Behind them, AI and automation prepare context, handle repetitive admin, trigger reminders, update workflows and help produce reporting — keeping your JobSetter focused on the conversation.</p>
          </div>
        </div>
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>Know exactly what we do. And what we <span>don’t.</span></h2>
        </div>
        <DoDontSection />
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>Built for businesses where one extra <span>job matters.</span></h2>
          <p>JobSetter is for trade businesses where missed opportunities cost real money — from busy sole traders to established teams.</p>
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
            <p>If you have fewer than roughly 10 workable opportunities each month, or most of your work is low-ticket service calls, JobSetter may not make financial sense yet.</p>
            <a href="/who-its-for">See who JobSetter is for →</a>
          </div>
        </div>
      </section>

      <section className="section storySection" id="pricing">
        <div className="shell storyIntro">
          <h2>Simple monthly pricing. No cut of your <span>revenue.</span></h2>
          <p>Month-to-month with 30 days’ notice. No performance fee. No percentage of jobs you win.</p>
        </div>
        <div className="shell priceCards threePlans">
          <article>
            <small>STARTER</small>
            <h3>$1,000 <span>+ GST / month</span></h3>
            <p className="planFor">For smaller pipelines that still need proper follow-up.</p>
            <ul>
              <li>10 new enquiries</li>
              <li>10 open quotes</li>
              <li>10 reactivation contacts</li>
              <li>Australian human follow-up</li>
              <li>AI-powered workflow and admin</li>
              <li>CRM outcomes updated</li>
              <li>Monthly performance summary</li>
            </ul>
          </article>
          <article className="featuredPrice">
            <small>CORE · MOST POPULAR</small>
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
          <article>
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
            <h2>The follow-up capacity of an employee, without the <span>employment overhead.</span></h2>
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
          <h2>Your JobSetter <span>team.</span></h2>
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
            <h2>We’re accountable for the <span>follow-up.</span></h2>
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
          <h2>We’re new. So we won’t <span>pretend otherwise.</span></h2>
          <p>No made-up testimonials. No borrowed logos. No invented results.</p>
        </div>
        <div className="shell comingResults">
          <small>CLIENT RESULTS COMING AS FOUNDING CLIENTS GO LIVE</small>
          <span>Response times</span><span>Bookings</span><span>Quote outcomes</span><span>Revenue recovered</span>
        </div>
      </section>

      <section className="section storySection">
        <div className="shell storyIntro">
          <h2>A few things owners ask before they <span>start.</span></h2>
        </div>
        <div className="shell faqCompact">
          <details open><summary>Do you answer my phone live?</summary><p>No. JobSetter is not a live answering service. We work new-work enquiries captured through your forms, lead platforms, emails and missed-call systems.</p></details>
          <details><summary>Is your team in Australia?</summary><p>Yes. JobSetter’s customer follow-up team is Australian-based.</p></details>
          <details><summary>Do you lock me into a contract?</summary><p>No long lock-in contract. Ongoing plans are month-to-month with 30 days’ notice.</p></details>
          <details><summary>Which plan is right for me?</summary><p>We’ll look at your actual enquiry, quote and reactivation volume and recommend the smallest plan that properly covers your pipeline. Plans start at $1,000 + GST a month.</p></details>
        </div>
        <div className="shell sectionAction"><a className="button secondary" href="/faq">Read all FAQs <b>→</b></a></div>
      </section>

      <section className="ctaSection storySection">
        <div className="shell ctaCard">
          <div className="ctaCopy">
            <h2>You’ve already paid for the lead. Make sure someone <span>follows it through.</span></h2>
            <p>Book a call and we’ll first check whether JobSetter actually suits your business and which plan matches your pipeline.</p>
          </div>
          <div className="ctaAction"><a className="button" href="/contact">Book a call <b>→</b></a><p>Plans from $1,000 + GST a month. Month-to-month.</p></div>
        </div>
      </section>

      <MarketingFooter />
      </main>
    </>
  );
}
