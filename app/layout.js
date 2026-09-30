import { Analytics } from "@vercel/analytics/next";
import ScrollReset from "./ScrollReset";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jobsetter.com.au"),
  title: {
    default: "JobSetter | Turn More Trade Leads Into Jobs",
    template: "%s | JobSetter",
  },
  description: "Australian-based, human-led follow-up for high-ticket trade businesses: new enquiries, qualification, booking, quote follow-up and reactivation.",
  keywords: [
    "tradie lead follow up",
    "appointment setting for trades",
    "quote follow up",
    "outsourced front office",
    "lead conversion for tradies",
    "missed call recovery"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JobSetter | Turn leads into jobs",
    description: "Human-led lead follow-up, booking, quote recovery and reactivation for tradies.",
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
    title: "JobSetter | Turn leads into jobs",
    description: "Human-led lead follow-up, booking, quote recovery and reactivation for tradies.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
  description: "Human-led lead follow-up, qualification, booking, quote recovery and reactivation for Australian trade and service businesses.",
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
