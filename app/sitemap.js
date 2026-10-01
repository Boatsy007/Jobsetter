export default function sitemap() {
  const base = "https://jobsetter.com.au";
  const paths = [
    "",
    "/how-it-works",
    "/pricing",
    "/who-its-for",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: base + path,
  }));
}
