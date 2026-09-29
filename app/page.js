import Header from "./Header";
import RevenueLeakCalculator from "./RevenueLeakCalculator";
import LeadJourney from "./LeadJourney";
import PilotForm from "./PilotForm";
import FounderSection from "./FounderSection";
import FoundingCaseStudy from "./FoundingCaseStudy";
import CallDemo from "./CallDemo";

const revenueLoop = [
  ["01", "Capture", "Calls, forms, ads, chats and referrals enter one operating queue instead of disappearing across inboxes and phones."],
  ["02", "Convert", "JobSetter responds, qualifies the opportunity, answers the common questions and books the next best action."],
  ["03", "Recover", "Missed calls, unresponsive leads and open quotes are worked until they convert, disqualify or clearly close."],
  ["04", "Reactivate", "Past customers and dormant opportunities are brought back into the pipeline when there is a reason to buy again."],
];

const pilotIncludes = [
  ["Revenue Leak Audit", "Map where leads, quotes and past customers are currently falling out of the process."],
  ["Custom Qualification Playbook", "Define the jobs you want, service areas, qualifying questions, FAQs and booking rules."],
  ["Inbound Lead Desk", "Work new enquiries quickly and move qualified opportunities toward the calendar."],
  ["Open Quote Recovery Blitz", "Take a defined group of open quotes and work them to a clear outcome."],
  ["Dormant Lead Reactivation", "Work a selected segment of older opportunities or customers that may still have value."],
  ["Conversion Report", "See contact rate, qualification, bookings, follow-up activity and attributable outcomes where verifiable."],
];

const pilotTimeline = [
  ["Day 1", "Map the business", "We learn your jobs, service area, qualification rules, calendar and handoff process."],
  ["Day 2", "Connect the workflow", "Lead sources, scripts, routing and follow-up rules are prepared."],
  ["Day 3", "Go live", "JobSetter starts working the agreed lead and quote flows."],
  ["Days 3–14", "Operate the pipeline", "New opportunities, open quotes and selected reactivation lists are worked consistently."],
  ["Day 14", "Review the numbers", "You see what happened in your own pipeline and decide whether continuing makes sense."],
];

const measurement = [
  ["Lead response", "How quickly eligible enquiries are contacted."],
  ["Contact rate", "How many opportunities actually reach a real conversation."],
  ["Qualified", "How many enquiries meet the agreed job-fit criteria."],
  ["Booked", "How many qualified opportunities move to the calendar or next sales step."],
  ["Quote recovery", "How many open estimates are actively worked to a decision."],
  ["Reactivation", "How many dormant opportunities re-enter the pipeline."],
];

const trades = [
  ["Plumbing", "Emergency calls, quote follow-up, maintenance reminders and repeat work."],
  ["Electrical", "Fast qualification, booking, switchboard/solar/project follow-up and reactivation."],
  ["HVAC", "Seasonal demand, service reminders, quote recovery and maintenance-plan opportunities."],
  ["Roofing & building", "Higher-ticket leads, longer sales cycles and relentless estimate follow-up."],
  ["Landscaping & outdoor", "Site visits, quote chasing, recurring maintenance and dormant lead reactivation."],
  ["Other service businesses", "Any business where leads arrive faster than the owner or office can consistently work them."],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="top">
        <div className="heroAura heroAuraOne" />
        <div className="heroAura heroAuraTwo" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow"><span /> DONE-FOR-YOU FRONT OFFICE FOR TRADES</div>
            <h1>Stop losing jobs<br />you already <span>paid to get.</span></h1>
            <p className="heroText">
              JobSetter answers every new lead, qualifies the customer, books the next step,
              chases open quotes and reactivates old opportunities — while you stay on the tools.
            </p>
            <div className="heroActions">
              <a className="button" href="#audit">Take the 60-second audit <b>→</b></a>
              <a className="button secondary" href="#journey">Watch JobSetter work a lead</a>
            </div>
            <div className="proofRow">
              <span>✓ Human conversations where trust matters</span>
              <span>✓ No new CRM required</span>
              <span>✓ Built around your qualification rules</span>
            </div>
            <p className="withoutLine">More booked work without adding another full-time front-office hire or buying more leads first.</p>
          </div>

          <div className="heroOfferCard">
            <div className="offerFlag">FOUNDING PILOT</div>
            <small>THE OFFER</small>
            <h2>14-Day Revenue Recovery Pilot</h2>
            <p>Give JobSetter a defined slice of your real pipeline. We work it. You review the numbers at Day 14 and decide whether continuing makes sense.</p>
            <div className="commercialTerms">
              <div><strong>$0</strong><span>Pilot fee</span></div>
              <div><strong>14 days</strong><span>Before you decide</span></div>
              <div><strong>No rollover</strong><span>You choose to continue</span></div>
            </div>
            <div className="offerMiniGrid">
              <div><b>New leads</b><span>Contact + qualify</span></div>
              <div><b>Open quotes</b><span>Systematic follow-up</span></div>
              <div><b>Old opportunities</b><span>Reactivation</span></div>
              <div><b>Your report</b><span>See the outcomes</span></div>
            </div>
            <a className="button fullButton" href="#pilot">Build my free pilot <b>→</b></a>
            <em>Pilot scope: up to 20 new enquiries, 15 open quotes and 25 reactivation contacts. Standard coverage is Mon–Fri, 8am–6pm in your local business time. Ongoing pricing is agreed before the pilot begins.</em>
          </div>
        </div>
      </section>

      <section className="urgencyStrip">
        <div className="shell urgencyGrid">
          <div><b>Every unanswered lead starts cooling immediately.</b><span>Waiting does not pause the pipeline.</span></div>
          <div><b>Every open quote is unresolved revenue.</b><span>Someone should own the next action.</span></div>
          <div><b>Every old customer is a future opportunity.</b><span>If there is a reason to buy again, somebody should ask.</span></div>
        </div>
      </section>

      <FoundingCaseStudy />

      <section className="section auditSection" id="audit">
        <div className="shell sectionIntro centered wideIntro">
          <div className="eyebrow"><span /> DIAGNOSE BEFORE YOU BUY</div>
          <h2>Where is opportunity leaking out of your follow-up?</h2>
          <p>Answer seven quick questions. You'll get a personalised diagnostic, your biggest conversion leak and an illustrative scenario using your own numbers.</p>
        </div>
        <div className="shell"><RevenueLeakCalculator /></div>
      </section>

      <section className="section journeySection" id="journey">
        <div className="shell splitHeading">
          <div>
            <div className="eyebrow"><span /> SEE THE MECHANISM</div>
            <h2>This is what JobSetter actually does.</h2>
          </div>
          <p>Not a vague “AI receptionist.” JobSetter keeps a real opportunity moving from first contact to a clear next step, then keeps following up when the job is not yet won.</p>
        </div>
        <div className="shell"><LeadJourney /></div>
      </section>

      <CallDemo />

      <section className="section navySection" id="pilot-offer">
        <div className="shell pilotHeading">
          <div>
            <div className="eyebrow light"><span /> THE 14-DAY REVENUE RECOVERY PILOT</div>
            <h2>One contained test. Your real leads. Your real quotes. Your real numbers.</h2>
          </div>
          <p>Instead of asking you to believe a sales page, the pilot is designed to let your own pipeline become the proof.</p>
        </div>

        <div className="shell termsBanner">
          <div><small>PILOT SERVICE FEE</small><strong>$0</strong></div>
          <div><small>DECISION POINT</small><strong>Day 14</strong></div>
          <div><small>AUTOMATIC ROLLOVER</small><strong>None</strong></div>
          <div><small>IF YOU CONTINUE</small><strong>Cancel anytime</strong></div>
        </div>

        <div className="shell pilotScopeCard">
          <div><small>NEW ENQUIRIES</small><strong>Up to 20</strong><span>Up to 5 contact attempts across 5 business days.</span></div>
          <div><small>OPEN QUOTES</small><strong>Up to 15</strong><span>Up to 4 follow-up attempts during the pilot.</span></div>
          <div><small>REACTIVATION</small><strong>Up to 25</strong><span>Up to 3 attempts during the pilot.</span></div>
          <div><small>COVERAGE</small><strong>Mon–Fri 8am–6pm</strong><span>Local business time; after-hours enquiries queue to the next coverage window.</span></div>
        </div>

        <div className="shell includedGrid">
          {pilotIncludes.map(([title,text], index) => (
            <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>

        <div className="shell riskCard">
          <div><small>THE RISK REVERSAL</small><h3>See the work before paying for ongoing service.</h3></div>
          <p>The 14-day pilot has a $0 JobSetter service fee. At Day 14, review what was contacted, qualified, booked, followed up and recovered. Ongoing billing starts only if you choose to continue.</p>
          <a className="button white" href="#pilot">Request my free pilot <b>→</b></a>
        </div>
      </section>

      <section className="section timelineSection">
        <div className="shell sectionIntro centered">
          <div className="eyebrow"><span /> FAST TIME TO VALUE</div>
          <h2>Know exactly what happens next.</h2>
          <p>No mysterious implementation project. The pilot is intentionally small, measurable and fast to launch.</p>
        </div>
        <div className="shell pilotTimeline">
          {pilotTimeline.map(([day,title,text]) => (
            <article key={day}><span>{day}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section soft" id="proof">
        <div className="shell proofGrid">
          <div className="sectionIntro">
            <div className="eyebrow"><span /> MEASURE THE THINGS THAT MATTER</div>
            <h2>Your own pipeline becomes the proof.</h2>
            <p>Start with a baseline. End the pilot with a report showing exactly how opportunities moved through the process — so the decision to continue is based on your own pipeline, not vague activity metrics.</p>
          </div>
          <div className="measurementGrid">
            {measurement.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="loop">
        <div className="shell sectionIntro centered wideIntro">
          <div className="eyebrow"><span /> THE JOBSETTER REVENUE LOOP</div>
          <h2>Marketing creates demand. JobSetter makes sure the demand gets worked.</h2>
        </div>
        <div className="shell loopGrid">
          {revenueLoop.map(([num,title,text]) => (
            <article className="loopCard" key={num}>
              <div className="loopTop"><span>{num}</span><i>→</i></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <FounderSection />

      <section className="section comparisonSection" id="why">
        <div className="shell sectionIntro centered wideIntro">
          <div className="eyebrow"><span /> WHY JOBSETTER</div>
          <h2>Own the space between “lead generated” and “job won.”</h2>
        </div>
        <div className="shell comparisonTable fiveCol">
          <div className="tableHead"><span></span><b>Answering service</b><b>CRM / field software</b><b>Internal hire</b><b className="jobsetterCol">JobSetter</b></div>
          <div><span>Answers inbound calls</span><i>Usually</i><i>Sometimes</i><i>Yes</i><strong>Yes</strong></div>
          <div><span>Qualifies sales opportunities</span><i>Basic</i><i>Workflow only</i><i>If trained</i><strong>Yes</strong></div>
          <div><span>Books the next action</span><i>Sometimes</i><i>Tools provided</i><i>Yes</i><strong>Yes</strong></div>
          <div><span>Chases open quotes</span><i>No</i><i>Automation only</i><i>If managed</i><strong>Human + AI</strong></div>
          <div><span>Reactivates old customers</span><i>No</i><i>Campaign tools</i><i>If prioritised</i><strong>Operated for you</strong></div>
          <div><span>Requires hiring & daily management</span><i>No</i><i>No</i><i>Yes</i><strong>No</strong></div>
          <div><span>Owns the conversion process</span><i>No</i><i>No</i><i>Depends on role</i><strong>That is the product</strong></div>
        </div>
        <p className="hireAlternative">JobSetter is designed as an alternative to adding another full-time front-office hire — without forcing you to replace the systems you already use.</p>
      </section>

      <section className="section" id="who">
        <div className="shell splitHeading">
          <div><div className="eyebrow"><span /> BUILT FIRST FOR THE TRADES</div><h2>Best fit where every lead can be worth real money.</h2></div>
          <p>JobSetter is strongest where leads are expensive, phone conversations matter and the owner or office cannot consistently work every opportunity.</p>
        </div>
        <div className="shell tradeGrid">
          {trades.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="shell fitCard">
          <div><small>GOOD FIT</small><b>You already generate consistent enquiries and want more of them properly worked.</b></div>
          <div><small>PROBABLY NOT YET</small><b>You have little or no demand coming in and primarily need lead generation first.</b></div>
        </div>
      </section>

      <section className="section pricingSection" id="pricing">
        <div className="shell pricingGrid">
          <div>
            <div className="eyebrow"><span /> AFTER THE PILOT</div>
            <h2>Simple ongoing pricing.</h2>
            <p className="leadText">If the 14-day pilot proves useful, the standard ongoing plan is <strong>$2,490 + GST per month</strong>. No performance fee, no percentage of your revenue and no long-term lock-in.</p>
            <div className="pricingIncludes">
              <span>Up to 80 new enquiries / month</span>
              <span>Up to 40 open-quote records / month</span>
              <span>Up to 100 reactivation contacts / month</span>
              <span>Mon–Fri, 8am–6pm local business time</span>
              <span>Monthly conversion reporting</span>
              <span>Cancel before your next billing cycle</span>
            </div>
            <p className="pricingNote">Higher volumes, multiple brands, extra regions or after-hours coverage are quoted separately.</p>
          </div>
          <div className="fitPanel">
            <small>STRONG PILOT FIT</small>
            <h3>JobSetter is built for businesses with enough opportunity to recover.</h3>
            <ul>
              <li><b>30+ new enquiries per month</b> or roughly <b>$25k+ of open quotes</b> suitable for follow-up.</li>
              <li>Typical job value of around <b>$750+</b>.</li>
              <li>Capacity to take on more work in the next 30 days.</li>
              <li>A working calendar, CRM or clear booking process.</li>
              <li>Lawfully usable customer/lead data for agreed follow-up.</li>
            </ul>
            <a className="button" href="#pilot">Check my fit <b>→</b></a>
          </div>
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="shell faqGrid">
          <div className="sectionIntro">
            <div className="eyebrow"><span /> FAQ</div>
            <h2>Simple to buy. Serious underneath.</h2>
            <p>The goal is for JobSetter to feel like adding a high-performing front office, not another software project.</p>
          </div>
          <div className="faqList">
            <details open><summary>What does the 14-day pilot cost?</summary><p>The JobSetter pilot service fee is $0 for the 14 days. Before the pilot starts, we'll tell you what ongoing service would cost if you decide to continue. There is no automatic rollover into paid service.</p></details>
            <details><summary>When would I actually get charged?</summary><p>Only after the 14-day pilot if you explicitly choose to continue. The current standard ongoing plan is $2,490 + GST per month. There is no automatic rollover into paid service and ongoing service is month-to-month.</p></details>
            <details><summary>How much work is included in the free pilot?</summary><p>Up to 20 new enquiries, 15 open quotes and 25 reactivation contacts. New leads receive up to 5 contact attempts, open quotes up to 4 and reactivation contacts up to 3 during the 14 days. Standard coverage is Monday to Friday, 8am–6pm in your local business time.</p></details>
            <details><summary>Is JobSetter just an AI receptionist?</summary><p>No. AI can support the workflow, but the core service is broader: human sales conversations, qualification, booking, quote recovery, reactivation and reporting.</p></details>
            <details><summary>Who actually speaks to my customers?</summary><p>A real assigned setter handles the conversations where judgement and trust matter. Before go-live, you know the qualification rules, scripts, service areas and handoff process they are working from.</p></details>
            <details><summary>Do I need to change my CRM or job software?</summary><p>No rip-and-replace is required for the pilot. JobSetter is designed to work around the systems and calendar you already use wherever practical.</p></details>
            <details><summary>What do I have to do?</summary><p>Give us your qualification rules, service areas, calendar process and agreed lead sources. We build the playbook and do the chasing.</p></details>
            <details><summary>Does JobSetter provide the leads?</summary><p>The pilot focuses on converting and recovering demand you already have. Marketing can be separate; JobSetter should remain valuable regardless of where the lead came from.</p></details>
            <details><summary>Do you guarantee revenue?</summary><p>No. We cannot control lead quality, pricing, customer decisions or the work itself. The pilot is designed around measurable execution and attributable outcomes in your own pipeline.</p></details>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="pilot">
        <div className="shell ctaCard">
          <div className="ctaCopy">
            <div className="eyebrow light"><span /> FREE 14-DAY PILOT INTAKE</div>
            <h2>Bring us your last 30 days of leads and open quotes.</h2>
            <p>We'll use the pilot call to identify where the opportunity is sitting, define the first 14-day test and decide whether your business is a good fit.</p>
            <div className="ctaChecklist">
              <span>✓ $0 pilot service fee</span>
              <span>✓ No automatic rollover</span>
              <span>✓ Ongoing pricing agreed upfront</span>
              <span>✓ Only pay ongoing service if you choose to continue</span>
            </div>
          </div>
          <PilotForm />
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <div><div className="brand"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></div><p>The done-for-you revenue front office for the trades.</p></div>
          <div className="footerNav"><a href="#audit">Revenue audit</a><a href="#pilot-offer">Free pilot</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@jobsetter.com.au">Contact</a></div>
        </div>
        <div className="shell footerBottom"><span>© {new Date().getFullYear()} JobSetter · Australia · hello@jobsetter.com.au</span><span>Human-led. AI-assisted. Outcome-focused.</span></div>
      </footer>
    </main>
  );
}
