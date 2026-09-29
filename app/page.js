import Header from "./Header";

const pipelineMetrics = [
  ["New leads", "248"],
  ["Contacted", "236"],
  ["Qualified", "178"],
  ["Booked", "122"],
  ["Open quotes", "34"],
  ["Won jobs", "87"],
];

const revenueLoop = [
  ["01", "Capture", "Phone calls, forms, ads, chats and referrals enter one operating queue instead of disappearing across inboxes and phones."],
  ["02", "Convert", "JobSetter responds, qualifies the opportunity, answers the common questions and books the next best action."],
  ["03", "Recover", "Missed calls, unresponsive leads and open quotes are worked until they convert, disqualify or clearly close."],
  ["04", "Reactivate", "Past customers and dormant opportunities are brought back into the pipeline when there is a reason to buy again."],
];

const platform = [
  ["Inbound lead desk", "Fast human response for new enquiries, missed calls and web leads."],
  ["Qualification engine", "Consistent questions, job-fit rules, service-area checks and lead notes."],
  ["Booking & dispatch handoff", "Qualified opportunities move into the client's calendar or workflow with the context attached."],
  ["Quote recovery", "Open estimates are followed up systematically instead of being forgotten."],
  ["Customer reactivation", "Old leads and past customers become an always-on source of future work."],
  ["Revenue intelligence", "See where every opportunity sits and which parts of the front office are leaking revenue."],
];

const layers = [
  ["Human setters", "Trust, judgement, objection handling and sales conversations."],
  ["AI agents", "Summaries, reminders, triage, routing, scoring and repetitive follow-up."],
  ["Client systems", "JobSetter is designed to sit on top of the CRM, calendar and field-service tools a business already uses."],
];

const who = [
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
            <div className="eyebrow"><span /> THE REVENUE CONVERSION LAYER FOR THE TRADES</div>
            <h1>Turn every good lead into the <span>next best action.</span></h1>
            <p className="heroText">
              JobSetter is the human-led, AI-assisted front office that answers, qualifies, books,
              follows up and reactivates — so opportunities keep moving until there is an outcome.
            </p>
            <div className="heroActions">
              <a className="button" href="#pilot">Start a pilot <b>→</b></a>
              <a className="button secondary" href="#loop">See the revenue loop</a>
            </div>
            <div className="proofRow">
              <span>✓ Human conversations where trust matters</span>
              <span>✓ AI agents behind the scenes</span>
              <span>✓ No rip-and-replace required</span>
            </div>
          </div>

          <div className="dashboardWrap">
            <div className="dashboardChrome">
              <div className="windowDots"><i/><i/><i/></div>
              <span>Illustrative JobSetter workspace</span>
            </div>
            <div className="dashboardTop">
              <div className="miniBrand"><b>Job</b><span>Setter</span></div>
              <div className="dashboardPill">Revenue workspace</div>
            </div>
            <div className="dashboardHeadline">
              <small>Pipeline today</small>
              <strong>Every opportunity has a next action.</strong>
            </div>
            <div className="metricGrid">
              {pipelineMetrics.map(([label,value]) => (
                <div className="metricCard" key={label}><span>{label}</span><b>{value}</b></div>
              ))}
            </div>
            <div className="activityList">
              <div><span className="activityDot blue"/><p><b>New plumbing lead qualified</b><small>Booked for tomorrow, 9:30am</small></p><em>Booked</em></div>
              <div><span className="activityDot amber"/><p><b>Bathroom quote follow-up</b><small>Customer asked for finance options</small></p><em>Active</em></div>
              <div><span className="activityDot green"/><p><b>Past customer reactivated</b><small>Annual service appointment requested</small></p><em>Won</em></div>
            </div>
            <div className="dashboardFooter">
              <span>Lead → Contact → Qualify → Book → Quote → Win → Reactivate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="categoryStrip">
        <div className="shell categoryGrid">
          <div><small>THE OLD MODEL</small><strong>Buy leads. Hope someone follows up.</strong></div>
          <div className="categoryArrow">→</div>
          <div><small>THE JOBSETTER MODEL</small><strong>Operate every opportunity to an outcome.</strong></div>
        </div>
      </section>

      <section className="section" id="loop">
        <div className="shell">
          <div className="sectionIntro centered wideIntro">
            <div className="eyebrow"><span /> THE JOBSETTER REVENUE LOOP</div>
            <h2>Marketing creates demand. JobSetter makes sure the demand gets worked.</h2>
            <p>
              Most service businesses do not have a lead problem every day. They have a consistency problem:
              missed calls, slow replies, forgotten quotes and old customers nobody calls.
            </p>
          </div>
          <div className="loopGrid">
            {revenueLoop.map(([num,title,text]) => (
              <article className="loopCard" key={num}>
                <div className="loopTop"><span>{num}</span><i>→</i></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section navySection" id="platform">
        <div className="shell splitHeading">
          <div>
            <div className="eyebrow light"><span /> ONE MANAGED REVENUE LAYER</div>
            <h2>Not another CRM. Not another answering service.</h2>
          </div>
          <p>
            Software records work. Answering services take messages. JobSetter is designed to actively move
            opportunities through the revenue journey using people, automation and client-specific workflows.
          </p>
        </div>
        <div className="shell platformGrid">
          {platform.map(([title,text],index) => (
            <article className="platformCard" key={title}>
              <span className="platformIndex">0{index+1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="architecture">
        <div className="shell architectureGrid">
          <div className="architectureCopy">
            <div className="eyebrow"><span /> HUMAN-LED. AI-NATIVE.</div>
            <h2>The labour gets smarter as the system learns.</h2>
            <p className="leadText">
              The first version of JobSetter wins with exceptional human execution. The scalable version uses
              AI agents to remove admin, enforce process and let each setter supervise more revenue without making
              the customer experience feel robotic.
            </p>
            <div className="architectureNote">
              <b>The product is not the AI.</b>
              <span>The product is a reliably operated front office with better economics over time.</span>
            </div>
          </div>
          <div className="layerStack">
            {layers.map(([title,text],index) => (
              <div className="layerCard" key={title}>
                <span>Layer {index+1}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="outcomes">
        <div className="shell">
          <div className="sectionIntro centered">
            <div className="eyebrow"><span /> WHAT YOU BUY</div>
            <h2>Not activity. Revenue discipline.</h2>
            <p>JobSetter should be judged on whether opportunities move, not how many calls an operator made.</p>
          </div>
          <div className="outcomeGrid">
            <article><span>01</span><h3>Faster response</h3><p>New opportunities are acted on while intent is still high.</p></article>
            <article><span>02</span><h3>More booked work</h3><p>Qualified leads get a clear next step instead of sitting in an inbox.</p></article>
            <article><span>03</span><h3>More recovered revenue</h3><p>Quotes, missed calls and dormant customers get systematically worked.</p></article>
            <article><span>04</span><h3>Better visibility</h3><p>Owners can see where demand is converting and where revenue is leaking.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="who">
        <div className="shell splitHeading lightSplit">
          <div>
            <div className="eyebrow"><span /> START VERTICAL. EXPAND LATER.</div>
            <h2>Built first for businesses where the phone still matters.</h2>
          </div>
          <p>
            The wedge is trades and service businesses: fragmented markets, expensive leads, high-value jobs and
            owners who often cannot answer every enquiry while delivering the work.
          </p>
        </div>
        <div className="shell tradeGrid">
          {who.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section comparisonSection" id="why">
        <div className="shell">
          <div className="sectionIntro centered wideIntro">
            <div className="eyebrow"><span /> WHY JOBSETTER</div>
            <h2>Own the space between “lead generated” and “job won.”</h2>
          </div>
          <div className="comparisonTable">
            <div className="tableHead"><span></span><b>Answering service</b><b>CRM / field software</b><b className="jobsetterCol">JobSetter</b></div>
            <div><span>Answers inbound calls</span><i>Usually</i><i>Sometimes</i><strong>Yes</strong></div>
            <div><span>Qualifies sales opportunities</span><i>Basic</i><i>Workflow only</i><strong>Yes</strong></div>
            <div><span>Books the next action</span><i>Sometimes</i><i>Tools provided</i><strong>Yes</strong></div>
            <div><span>Chases open quotes</span><i>No</i><i>Automation only</i><strong>Human + AI</strong></div>
            <div><span>Reactivates old customers</span><i>No</i><i>Campaign tools</i><strong>Operated for you</strong></div>
            <div><span>Owns conversion outcome</span><i>No</i><i>No</i><strong>That is the product</strong></div>
          </div>
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="shell faqGrid">
          <div className="sectionIntro">
            <div className="eyebrow"><span /> FAQ</div>
            <h2>Simple on the outside. Serious underneath.</h2>
            <p>JobSetter is designed to feel like adding a high-performing front office, not implementing another piece of software.</p>
          </div>
          <div className="faqList">
            <details open><summary>Is JobSetter just an AI receptionist?</summary><p>No. AI reception can be one tool in the system. JobSetter is broader: human sales conversations, qualification, booking, quote recovery, reactivation and revenue reporting.</p></details>
            <details><summary>Do I need to change my CRM or job software?</summary><p>The model is designed to work around the systems a client already uses wherever practical. The long-term advantage is becoming the conversion layer across those systems, not forcing every customer onto a new back office.</p></details>
            <details><summary>Are the people real humans?</summary><p>Yes. Human setters handle the conversations where judgement and trust matter. AI assists with repetitive work, summaries, routing, follow-up and reporting.</p></details>
            <details><summary>Does JobSetter provide the leads?</summary><p>The core product converts and recovers demand. Marketing can be added as a separate capability, but the front-office conversion engine should remain useful regardless of where the lead came from.</p></details>
            <details><summary>How would we start?</summary><p>Begin with a contained pilot, define the lead sources and qualification rules, connect the calendar/workflow, and measure the journey from enquiry to booked and won work.</p></details>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="pilot">
        <div className="shell ctaCard">
          <div>
            <div className="eyebrow light"><span /> BUILD THE REVENUE ENGINE</div>
            <h2>You do the work. JobSetter operates the opportunity.</h2>
            <p>Start with a focused pilot and see what happens when every worthwhile lead, quote and past customer gets a next action.</p>
          </div>
          <div className="ctaActions">
            <a className="button white" href="mailto:hello@jobsetter.com.au?subject=JobSetter%20pilot">Start a pilot <b>→</b></a>
            <a className="textLink" href="#loop">See how the model works</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <div><div className="brand"><span className="brandJob">Job</span><span className="brandSetter">Setter</span></div><p>The revenue conversion layer for the trades.</p></div>
          <div className="footerNav"><a href="#platform">Platform</a><a href="#loop">Revenue loop</a><a href="#who">Who it's for</a><a href="#faq">FAQ</a></div>
        </div>
        <div className="shell footerBottom"><span>© {new Date().getFullYear()} JobSetter. Australia.</span><span>Human-led. AI-assisted. Outcome-focused.</span></div>
      </footer>
    </main>
  );
}
