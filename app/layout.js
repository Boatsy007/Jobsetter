import { Analytics } from "@vercel/analytics/next";
import ScrollReset from "./ScrollReset";
import "./globals.css";

export const metadata = {
  title: "JobSetter | Stop Losing Jobs You Already Paid to Get",
  description: "JobSetter is the done-for-you front office for trades: human-led lead response, qualification, booking, quote follow-up and reactivation, with AI working behind the scenes.",
  keywords: ["tradie lead follow up", "appointment setting for trades", "quote follow up", "outsourced front office", "lead conversion for tradies", "missed call recovery"],
  openGraph: {
    title: "JobSetter | Stop losing jobs you already paid to get",
    description: "Human-led, AI-assisted lead conversion and quote recovery for trades and service businesses.",
    type: "website",
    locale: "en_AU",
    siteName: "JobSetter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <ScrollReset />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
