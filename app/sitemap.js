export default function sitemap() {
  const base = "https://jobsetter.com.au";
  const pages = [
    ["", "weekly", 1],
    ["/how-it-works", "monthly", 0.8],
    ["/pricing", "monthly", 0.9],
    ["/pilot", "monthly", 0.9],
    ["/who-its-for", "monthly", 0.8],
    ["/about", "monthly", 0.6],
    ["/faq", "monthly", 0.7],
    ["/contact", "monthly", 0.8],
    ["/privacy", "yearly", 0.2],
    ["/terms", "yearly", 0.2],
  ];
  return pages.map(([path, changeFrequency, priority]) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
