import Header from "../Header";
import ProcessBanner from "../ProcessBanner";
import MarketingFooter from "../MarketingFooter";

export const metadata = {
  title: "The Follow-Up Playbook",
  description: "Practical guides for Australian trade businesses on lead follow-up, quote chasing, speed-to-lead, reactivation and converting more of the opportunities they already generate.",
  alternates: { canonical: "/playbook" },
  openGraph: {
    title: "The Follow-Up Playbook | JobSetter",
    description: "Practical lead and quote follow-up guides for Australian trade businesses.",
    url: "/playbook",
    type: "website",
    locale: "en_AU",
    siteName: "JobSetter",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "JobSetter — Turn leads into jobs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Follow-Up Playbook | JobSetter",
    description: "Practical lead and quote follow-up guides for Australian trade businesses.",
    images: ["/opengraph-image"],
  },
};

const guides = [
  {
    category: "HUMAN VS AI",
    title: "AI receptionist for tradies vs human follow-up: what’s better?",
    summary: "Where AI receptionists help, where the follow-up gap begins and why answering a call is not the same as owning an opportunity.",
    href: "/playbook/ai-receptionist-vs-human-follow-up-tradies",
    time: "9 min read",
  },
  {
    category: "QUOTE FOLLOW-UP",
    title: "How to follow up a quote without sounding pushy",
    summary: "A practical follow-up rhythm for trade businesses, including what to say, when to call and when to stop chasing.",
    href: "/playbook/how-to-follow-up-a-quote",
    time: "6 min read",
  },
  {
    category: "NEW ENQUIRIES",
    title: "How fast should you contact a new trade lead?",
    summary: "Why speed matters, what a realistic response standard looks like and how to stop good enquiries going cold.",
    href: "/playbook/how-fast-to-contact-a-new-lead",
    time: "5 min read",
  },
  {
    category: "REACTIVATION",
    title: "How to reactivate old leads without annoying people",
    summary: "A simple way to reopen old opportunities and past-customer conversations without making the outreach feel desperate.",
    href: "/playbook/reactivate-old-leads",
    time: "6 min read",
  },
];

export default function PlaybookPage(){
  return <>
    <Header/>
    <main className="site-main">
      <ProcessBanner/>
      <section className="pageHero playbookHero">
        <div className="shell">
          <small>THE FOLLOW-UP PLAYBOOK</small>
          <h1>Practical ways to win more from the leads you already have.</h1>
          <p>No generic marketing advice. Just useful guides on new enquiries, quote follow-up, reactivation and the parts of the sales process trade businesses are most likely to let slip.</p>
        </div>
      </section>

      <section className="section playbookSection">
        <div className="shell playbookIntro">
          <div>
            <small>START HERE</small>
            <h2>Follow-up that actually gets done.</h2>
          </div>
          <p>Built for Australian trade businesses that already generate opportunities and want a better system for turning more of them into clear outcomes.</p>
        </div>

        <div className="shell playbookGrid">
          {guides.map((guide, index) => (
            <a className={index === 0 ? "playbookCard featuredGuide" : "playbookCard"} href={guide.href} key={guide.href}>
              <div className="playbookMeta"><span>{guide.category}</span><span>{guide.time}</span></div>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <b>Read the guide →</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell splitIntro">
          <div>
            <small>THE JOBSETTER VIEW</small>
            <h2>More leads are not always the answer.</h2>
          </div>
          <div>
            <p>If enquiries are already sitting too long, quotes are not being chased and old opportunities are buried in the CRM, spending more on lead generation can simply create a bigger leak.</p>
            <p>The Playbook is about fixing that gap first.</p>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="shell simpleCta">
          <h2>Want someone to own the follow-up?</h2>
          <p>JobSetter gives your business an Australian team to work new enquiries, open quotes and old opportunities.</p>
          <a className="button" href="/contact">See if JobSetter fits <b>→</b></a>
        </div>
      </section>
      <MarketingFooter/>
    </main>
  </>;
}
