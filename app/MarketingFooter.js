export default function MarketingFooter() {
  return (
    <footer>
      <div className="shell footerTop">
        <div className="footerBrandBlock">
          <div className="footerLogoPlate"><img className="footerLogo" src="/jobsetterlogo.png" alt="JobSetter" /></div>
          <p>Australian-based revenue follow-up for high-ticket trades.</p>
        </div>
        <div className="footerNav">
          <a href="/how-it-works">How it works</a>
          <a href="/who-its-for">Who it's for</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Book a call</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} JobSetter · Australia · hello@jobsetter.com.au</span>
        <span>Human-led. AI-assisted.</span>
      </div>
    </footer>
  );
}
