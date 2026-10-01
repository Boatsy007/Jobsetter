export const metadata = {
  title: "Privacy Policy",
  description: "How JobSetter collects, uses, stores and shares personal information for its Australian lead and quote follow-up service.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | JobSetter",
    description: "How JobSetter handles personal information for website enquiries and client lead follow-up services.",
    url: "/privacy",
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
    title: "Privacy Policy | JobSetter",
    description: "How JobSetter handles personal information for website enquiries and client lead follow-up services.",
    images: ["/opengraph-image"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <div className="legalShell">
        <a className="brand legalBrand brandImageLink" href="/"><img className="legalLogo" src="/jobsetterlogo.png" alt="JobSetter" /></a>
        <p className="legalUpdated">Last updated: 30 September 2026</p>
        <h1>Privacy Policy</h1>
        <p>JobSetter is an Australian service business. This policy explains how JobSetter collects, uses, stores and shares personal information when you use our website, contact us, communicate with us or become a client.</p>

        <h2>What we collect</h2>
        <p>Depending on how you interact with us, we may collect your name, business name, phone number, email address, trade, approximate business revenue, enquiry volume, CRM or job-management system, booking preferences, diagnostic answers, website analytics, referral information and information you choose to provide during calls or onboarding.</p>

        <h2>Why we collect it</h2>
        <p>We use this information to respond to enquiries, assess service suitability, provide and improve JobSetter services, configure qualification and follow-up workflows, arrange meetings, measure website and funnel performance, maintain records, prevent misuse and meet legal obligations.</p>

        <h2>Communications</h2>
        <p>If you contact us or contact us, we may use the contact details you provide to respond to that request by phone, email or SMS. Marketing messages are only sent where we have an appropriate basis to do so. Where required, marketing messages identify the sender and include a way to opt out.</p>

        <h2>Service providers</h2>
        <p>We may use service providers for hosting, analytics, CRM, scheduling, communications, workflow automation and email delivery. Those providers may process information on our behalf. We only use information for the purposes described in this policy or otherwise disclosed to you.</p>

        <h2>Client-supplied lead data</h2>
        <p>Clients may provide customer or prospect information so JobSetter can perform agreed follow-up work. Clients are responsible for ensuring they have the right to provide that information and that the intended contact is lawful. JobSetter uses client-supplied data only for the agreed service and related operational purposes.</p>

        <h2>Storage and security</h2>
        <p>We take reasonable steps to protect personal information from misuse, loss, unauthorised access, modification and disclosure. No internet-based system can be guaranteed completely secure.</p>

        <h2>Overseas processing</h2>
        <p>Some technology providers may process or store data outside Australia. Where this occurs, the location depends on the providers used by JobSetter at the relevant time.</p>

        <h2>Access, correction and complaints</h2>
        <p>You can ask us to access or correct personal information we hold about you, or raise a privacy concern, by emailing <a href="mailto:hello@jobsetter.com.au">hello@jobsetter.com.au</a>. We may need to verify your identity before responding.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy as JobSetter's services and systems change. The current version will be published on this page.</p>

        <div className="legalNotice">
          <strong>Business identity</strong>
          <p>JobSetter is the trading name used for this service in Australia. The legal contracting entity and ABN are stated in any client service agreement issued to you.</p>
        </div>

        <div className="legalFooterLinks"><a href="/">Home</a><a href="/terms">Terms</a><a href="mailto:hello@jobsetter.com.au">Contact</a></div>
      </div>
    </main>
  );
}
