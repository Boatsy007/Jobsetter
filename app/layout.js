import { Analytics } from "@vercel/analytics/next";
import ScrollReset from "./ScrollReset";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jobsetter.com.au"),
  title: {
    default: "Turn More Trade Leads Into Jobs | JobSetter",
    template: "%s | JobSetter",
  },
  description: "Australian human lead and quote follow-up for trade businesses: new enquiries, qualification, booking, quote follow-up and reactivation.",
  keywords: [
    "tradie lead follow up",
    "appointment setting for trades",
    "quote follow up",
    "lead conversion for tradies",
    "lead reactivation",
    "sales follow up for trades"
  ],
  openGraph: {
    title: "Turn More Trade Leads Into Jobs | JobSetter",
    description: "Australian human lead and quote follow-up for tradies, with AI supporting admin, workflow and reporting.",
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
    description: "Australian human lead and quote follow-up for tradies, with AI supporting admin, workflow and reporting.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JobSetter",
  url: "https://jobsetter.com.au",
  email: "hello@jobsetter.com.au",
  logo: "https://jobsetter.com.au/jobsetterlogo.png",
  description: "Human-led lead follow-up, qualification, booking, quote recovery and reactivation for Australian trade and service businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@jobsetter.com.au",
    areaServed: "AU",
    availableLanguage: "English",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "JobSetter lead follow-up and quote recovery",
  provider: {
    "@type": "Organization",
    name: "JobSetter",
    url: "https://jobsetter.com.au",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: "Lead follow-up, appointment setting, quote follow-up and customer reactivation for trade and service businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <ScrollReset />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
