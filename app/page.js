import Header from "./Header";
import RevenueLeakCalculator from "./RevenueLeakCalculator";
import LeadJourney from "./LeadJourney";
import PilotForm from "./PilotForm";

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
            <h1>Stop losing jobs you already <span>paid to get.</span></h1>
            <p className="heroText">
              JobSetter answers every new lead, qualifies the customer, books the next step,
              chases open quotes and reactivates old opportunities — while you stay on the tools.
            </p>
            <div className="heroActions">
              <a className="button" href="#audit">See my revenue leak <b>→</b></a>
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
            <div className="offerFlag">FOUNDING PILOT PROGRAM</div>
            <small>THE OFFER</small>
            <h2>14-Day Revenue Recovery Pilot</h2>
            <p>Give JobSetter a defined slice of your real pipeline. We work it. You review the numbers at Day 14 and decide whether continuing makes sense.</p>
            <div className="offerMiniGrid">
              <div><b>New leads</b><span>Contact + qualify</span></div>
              <div><b>Open quotes</b><span>Systematic follow-up</span></div>
              <div><b>Old opportunities</b><span>Reactivation</span></div>
              <div><b>Your dashboard</b><span>See the outcomes</span></div>
            </div>
            <a className="button fullButton" href="#pilot">Build my pilot <b>→</b></a>
            <em>Capacity-limited onboarding because each pilot is configured around the client's actual workflow.</em>
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

      <section className="section auditSection" id="audit">
        <div className="shell sectionIntro centered wideIntro">
          <div className="eyebrow"><span /> DIAGNOSE BEFORE YOU BUY</div>
          <h2>How much opportunity is leaking out of your follow-up?</h2>
          <p>Put in your numbers. The calculator scores the consistency of your current front office and models a simple 5-point conversion scenario.</p>
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

      <section className="section navySection" id="pilot-offer">
        <div className="shell pilotHeading">
          <div>
            <div className="eyebrow light"><span /> THE 14-DAY REVENUE RECOVERY PILOT</div>
            <h2>One contained test. Your real leads. Your real quotes. Your real numbers.</h2>
          </div>
          <p>Instead of asking you to believe a sales page, the pilot is designed to let your own pipeline become the proof.</p>
        </div>

        <div className="shell includedGrid">
          {pilotIncludes.map(([title,text], index) => (
            <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>

        <div className="shell riskCard">
          <div><small>THE RISK REVERSAL</small><h3>See the work before making a longer-term decision.</h3></div>
          <p>At Day 14, review what was contacted, qualified, booked, followed up and recovered. Then decide whether you want JobSetter to keep operating the pipeline.</p>
          <a className="button white" href="#pilot">Request a pilot call <b>→</b></a>
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
            <div className="eyebrow"><span /> PROOF, NOT VANITY METRICS</div>
            <h2>Your pilot report measures movement through the pipeline.</h2>
            <p>Until JobSetter has enough verified client case studies, the right proof is your own business data. We do not need fake logos, invented testimonials or made-up ROI claims.</p>
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

      <section className="section humanSection">
        <div className="shell humanGrid">
          <div>
            <div className="eyebrow"><span /> REAL PEOPLE, AI LEVERAGE</div>
            <h2>You meet the human responsible for your conversations.</h2>
            <p className="leadText">The customer-facing moments stay human where judgement, objection handling and reputation matter. AI works behind the scenes to remove repetitive admin and keep the process consistent.</p>
          </div>
          <div className="humanCards">
            <article><span>01</span><h3>Assigned setter</h3><p>Meet the person handling the conversations before go-live.</p></article>
            <article><span>02</span><h3>Your playbook</h3><p>They work from your job criteria, service areas, FAQs and booking rules.</p></article>
            <article><span>03</span><h3>AI support layer</h3><p>Summaries, reminders, scoring, routing and repetitive follow-up become easier to supervise.</p></article>
          </div>
        </div>
      </section>

      <section className="section comparisonSection" id="why">
        <div className="shell sectionIntro centered wideIntro">
          <div className="eyebrow"><span /> WHY JOBSETTER</div>
          <h2>Own the space between “lead generated” and “job won.”</h2>
        </div>
        <div className="shell comparisonTable">
          <div className="tableHead"><span></span><b>Answering service</b><b>CRM / field software</b><b className="jobsetterCol">JobSetter</b></div>
          <div><span>Answers inbound calls</span><i>Usually</i><i>Sometimes</i><strong>Yes</strong></div>
          <div><span>Qualifies sales opportunities</span><i>Basic</i><i>Workflow only</i><strong>Yes</strong></div>
          <div><span>Books the next action</span><i>Sometimes</i><i>Tools provided</i><strong>Yes</strong></div>
          <div><span>Chases open quotes</span><i>No</i><i>Automation only</i><strong>Human + AI</strong></div>
          <div><span>Reactivates old customers</span><i>No</i><i>Campaign tools</i><strong>Operated for you</strong></div>
          <div><span>Owns the conversion process</span><i>No</i><i>No</i><strong>That is the product</strong></div>
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
      </section>

      <section className="section faqSection" id="faq">
        <div className="shell faqGrid">
          <div className="sectionIntro">
            <div className="eyebrow"><span /> FAQ</div>
            <h2>Simple to buy. Serious underneath.</h2>
            <p>The goal is for JobSetter to feel like adding a high-performing front office, not another software project.</p>
          </div>
          <div className="faqList">
            <details open><summary>Is JobSetter just an AI receptionist?</summary><p>No. AI can support the workflow, but the core service is broader: human sales conversations, qualification, booking, quote recovery, reactivation and reporting.</p></details>
            <details><summary>Do I need to change my CRM or job software?</summary><p>No rip-and-replace is required for the pilot. JobSetter is designed to work around the systems and calendar you already use wherever practical.</p></details>
            <details><summary>What do I have to do?</summary><p>Give us your qualification rules, service areas, calendar process and agreed lead sources. We build the playbook and do the chasing.</p></details>
            <details><summary>Does JobSetter provide the leads?</summary><p>The pilot focuses on converting and recovering demand you already have. Marketing can be separate; JobSetter should remain valuable regardless of where the lead came from.</p></details>
            <details><summary>Do you guarantee revenue?</summary><p>No. We cannot control lead quality, pricing, customer decisions or the work itself. The pilot is designed around measurable execution and attributable outcomes in your own pipeline.</p></details>
            <details><summary>Why is pilot onboarding limited?</summary><p>Each founding pilot needs manual setup around the client's actual scripts, qualification rules and workflow. We would rather onboard fewer businesses properly than pretend the service is plug-and-play.</p></details>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="pilot">
        <div className="shell ctaCard">
          <div className="ctaCopy">
            <div className="eyebrow light"><span /> FOUNDING PILOT INTAKE</div>
            <h2>Bring us your last 30 days of leads and open quotes.</h2>
            <p>We'll use the pilot call to identify where the opportunity is sitting, define the first 14-day test and decide whether your business is a good fit.</p>
            <div className="ctaChecklist"><span>✓ No fake ROI promise</span><span>✓ Clear 14-day scope</span><span>✓ Review your own numbers at the end</span></div>
          </div>
          <PilotForm />
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <div><div className="brand"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></div><p>The done-for-you revenue front office for the trades.</p></div>
          <div className="footerNav"><a href="#audit">Revenue audit</a><a href="#pilot-offer">Pilot</a><a href="#why">Why JobSetter</a><a href="#faq">FAQ</a></div>
        </div>
        <div className="shell footerBottom"><span>© {new Date().getFullYear()} JobSetter. Australia.</span><span>Human-led. AI-assisted. Outcome-focused.</span></div>
      </footer>
    </main>
  );
}
