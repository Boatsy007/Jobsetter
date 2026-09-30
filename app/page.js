import Header from "./Header";
import RevenueLeakCalculator from "./RevenueLeakCalculator";
import LeadJourney from "./LeadJourney";
import PilotForm from "./PilotForm";
import FounderSection from "./FounderSection";
import FoundingCaseStudy from "./FoundingCaseStudy";
import CallDemo from "./CallDemo";
import PipelineMotif from "./PipelineMotif";
import PilotReportDemo from "./PilotReportDemo";
import ScrollMotion from "./ScrollMotion";
import ProcessBanner from "./ProcessBanner";

const pilotTimeline = [
  ["Day 1", "Learn your business", "Jobs, service area, calendar and what a good lead looks like."],
  ["Day 2", "Build the playbook", "Questions, scripts, routing and follow-up rules."],
  ["Day 3", "Go live", "We start working the agreed leads and quotes."],
  ["Days 3–14", "Work the pipeline", "New leads, selected quotes and reactivation contacts get a next action."],
  ["Day 14", "Review the numbers", "See what happened and decide whether we keep going."],
];

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <Header />
      <ProcessBanner />

      <section className="hero storySection heroBold" id="top">
        <div className="shell heroBoldInner">
          <h1>
            Turn leads into <span>jobs.</span>
          </h1>

          <div className="heroBoldLower">
            <div className="heroBoldCopy">
              <p className="heroText">
                We call your leads, qualify the job, book the next step and chase the quote — while you stay on the tools.
              </p>
              <p className="heroSubline">
                We can also bring old leads and past customers back into play.
              </p>
            </div>

            <div className="heroBoldAction">
              <a className="button heroPrimary" href="#audit">Find where you're leaking jobs <b>→</b></a>
              <span>60-second audit · free · no signup to start</span>
            </div>
          </div>

          <div className="heroProofBar">
            <span><b>HUMAN-LED</b> Real customer conversations</span>
            <span><b>NO CRM CHANGE</b> Works around your setup</span>
            <span><b>$0 PILOT</b> Test it on your own pipeline</span>
          </div>
        </div>
      </section>

      <section className="section auditSection storySection" id="audit">
        <div className="shell auditLead">
          <h2>Find the <span>leak.</span></h2>
          <p>Seven quick questions. See where follow-up is costing you jobs.</p>
        </div>
        <div className="shell"><RevenueLeakCalculator /></div>
      </section>

      <section className="section journeySection storySection" id="journey">
        <div className="shell storyIntro">
          <span className="storyNumber">02</span>
          <div>
            <div className="eyebrow"><span /> SEE THE WORK</div>
            <h2>Now watch one lead move.</h2>
            <p>Pick a new lead, missed call or open quote. This is the job: contact it, qualify it, book it and keep the next action moving.</p>
          </div>
        </div>
        <div className="shell">
          <PipelineMotif />
          <LeadJourney />
        </div>
      </section>

      <CallDemo />
      <FoundingCaseStudy />

      <section className="section navySection storySection" id="pilot-offer">
        <div className="shell storyIntro lightStory">
          <span className="storyNumber">03</span>
          <div>
            <div className="eyebrow light"><span /> TEST IT ON YOUR BUSINESS</div>
            <h2>Your real leads. Your real quotes. Fourteen days.</h2>
            <p>We set up one contained pilot, work the agreed pipeline and show you exactly what happened.</p>
          </div>
        </div>

        <div className="shell pilotExperience">
          <div className="pilotOfferSummary">
            <div className="pilotBigTerms">
              <article><small>PILOT FEE</small><strong>$0</strong></article>
              <article><small>GO LIVE</small><strong>Day 3</strong></article>
              <article><small>DECIDE</small><strong>Day 14</strong></article>
            </div>

            <div className="pilotTimeline">
              {pilotTimeline.map(([day,title,text]) => (
                <article key={day}><span>{day}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>

            <div className="riskCard">
              <div><small>NO AUTO-ROLLOVER</small><h3>See the work before paying for ongoing service.</h3></div>
              <p>If the numbers make sense, continue. If they don’t, stop there.</p>
              <a className="button white" href="#pilot">Request my free pilot <b>→</b></a>
            </div>
          </div>

          <PilotReportDemo />
        </div>
      </section>

      <section className="section decisionSection storySection" id="why">
        <div className="shell storyIntro">
          <span className="storyNumber">04</span>
          <div>
            <div className="eyebrow"><span /> THE DECISION</div>
            <h2>Hire someone, use AI, buy more software — or let JobSetter run the follow-up.</h2>
            <p>AI receptionists can answer and route. JobSetter is built to keep owning the follow-up after that — with humans handling the conversations that need judgement.</p>
          </div>
        </div>

        <div className="shell decisionGrid">
          <div className="comparisonTable sixCol">
            <div className="tableHead"><span></span><b>Answering service</b><b>CRM</b><b>AI receptionist</b><b>Internal hire</b><b className="jobsetterCol">JobSetter</b></div>
            <div><span>Talks to customers</span><i>Usually</i><i>No</i><i>Yes</i><i>Yes</i><strong>Yes</strong></div>
            <div><span>Qualifies the job</span><i>Basic</i><i>No</i><i>Rules-based</i><i>If trained</i><strong>Yes</strong></div>
            <div><span>Books the next step</span><i>Sometimes</i><i>Tool only</i><i>Usually</i><i>Yes</i><strong>Yes</strong></div>
            <div><span>Chases open quotes</span><i>No</i><i>Automation</i><i>Limited</i><i>If managed</i><strong>Yes</strong></div>
            <div><span>Handles objections & judgement</span><i>Limited</i><i>No</i><i>Limited</i><i>Yes</i><strong>Human-led</strong></div>
            <div><span>Reactivates old leads</span><i>No</i><i>Campaigns</i><i>Sometimes</i><i>If managed</i><strong>Yes</strong></div>
            <div><span>Needs daily management</span><i>No</i><i>No</i><i>Some setup</i><i>Yes</i><strong>No</strong></div>
          </div>

          <div className="pricingCard" id="pricing">
            <small>IF YOU CONTINUE</small>
            <h3>$2,490 <span>+ GST / month</span></h3>
            <p>Month-to-month. No performance fee. No percentage of your revenue.</p>
            <ul>
              <li>Up to 80 new enquiries</li>
              <li>Up to 40 open quotes</li>
              <li>Up to 100 reactivation contacts</li>
              <li>Mon–Fri, 8am–6pm</li>
              <li>Monthly conversion report</li>
            </ul>
            <div className="fitMini">
              <b>Best fit:</b>
              <span>30+ enquiries/month or $25k+ open quotes, $750+ typical job value, and room for more work.</span>
            </div>
            <a className="button" href="#pilot">Check my fit <b>→</b></a>
          </div>
        </div>
      </section>

      <FounderSection />

      <section className="section faqSection storySection" id="faq">
        <div className="shell storyIntro">
          <span className="storyNumber">05</span>
          <div>
            <div className="eyebrow"><span /> BEFORE YOU BOOK</div>
            <h2>The questions most owners ask.</h2>
          </div>
        </div>

        <div className="shell faqCompact">
          <details open><summary>What does the 14-day pilot cost?</summary><p>$0 JobSetter service fee. There is no automatic rollover.</p></details>
          <details><summary>Who talks to my customers?</summary><p>A real assigned setter, working from your job criteria, service area, FAQs and booking rules.</p></details>
          <details><summary>Do I need to change my CRM?</summary><p>No. We work around your existing calendar and systems wherever practical.</p></details>
          <details><summary>What happens during the 14 days?</summary><p>We learn your business, build the playbook, go live by Day 3, then work the agreed leads, quotes and reactivation contacts until Day 14.</p></details>
          <details><summary>Am I locked into a contract?</summary><p>No automatic rollover. If you continue, the standard service is month-to-month and you can cancel before the next billing cycle.</p></details>
          <details className="faqMore"><summary>More questions</summary>
            <div>
              <p><b>Do you provide leads?</b> No. The pilot works the demand you already have.</p>
              <p><b>Do you guarantee revenue?</b> No. We guarantee the agreed work, not customer decisions or sales.</p>
              <p><b>Is this just an AI receptionist?</b> No. Humans handle the conversations; AI helps with the repetitive work around them.</p>
            </div>
          </details>
        </div>
      </section>

      <section className="ctaSection storySection" id="pilot">
        <div className="shell ctaCard">
          <div className="ctaCopy">
            <span className="storyNumber finalNumber">06</span>
            <div className="eyebrow light"><span /> START THE TEST</div>
            <h2>Bring us your last 30 days of leads and open quotes.</h2>
            <p>We’ll map the first 14-day pilot and tell you whether JobSetter is a strong fit.</p>
            <PipelineMotif compact tone="dark" />
          </div>
          <PilotForm />
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <div><div className="brand"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></div><p>The done-for-you front office for trades.</p></div>
          <div className="footerNav"><a href="#audit">Audit</a><a href="#journey">How it works</a><a href="#pilot-offer">Free pilot</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
        </div>
        <div className="shell footerBottom"><span>© {new Date().getFullYear()} JobSetter · Australia · hello@jobsetter.com.au</span><span>Human-led. AI-assisted.</span></div>
      </footer>
    </main>
  );
}
