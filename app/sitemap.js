export default function sitemap() {
  const base = "https://jobsetter.com.au";
  const paths = [
    "",
    "/how-it-works",
    "/pricing",
    "/playbook",
    "/playbook/how-to-follow-up-a-quote",
    "/playbook/how-fast-to-contact-a-new-lead",
    "/playbook/reactivate-old-leads",
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
