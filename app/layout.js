import "./globals.css";

export const metadata = {
  title: "JobSetter | The Revenue Conversion Layer for the Trades",
  description: "JobSetter is a human-led, AI-assisted front office that answers, qualifies, books, follows up and reactivates opportunities for trades and service businesses.",
  keywords: ["tradie lead follow up", "appointment setting for trades", "quote follow up", "AI receptionist trades", "lead conversion for tradies", "outsourced front office"],
  openGraph: {
    title: "JobSetter | Turn demand into booked work",
    description: "Human-led, AI-assisted revenue conversion for trades and service businesses.",
    type: "website",
    locale: "en_AU",
    siteName: "JobSetter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
