import "./globals.css";

export const metadata = {
  title: "JobSetter | Turn More Leads Into Booked Jobs",
  description: "JobSetter helps tradies turn more enquiries into booked jobs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
