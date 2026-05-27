export default function Hero() {
  return (
    <section className="bg-white pt-16 relative overflow-hidden" style={{ borderBottom: '1px solid #E8E6E0' }}>
      {/* Decorative circle graphic */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-5" aria-hidden="true">
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="240" cy="240" r="220" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="160" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="100" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="40"  stroke="#1A3A5C" strokeWidth="1"/>
          <line x1="20" y1="240" x2="460" y2="240" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="240" y1="20" x2="240" y2="460" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="84"  y1="84"  x2="396" y2="396" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="396" y1="84"  x2="84"  y2="396" stroke="#1A3A5C" strokeWidth="0.8"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-28 md:py-36">
        {/* Pill badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-medium tracking-wide uppercase"
          style={{ background: '#EAF6F1', color: '#0F6E56' }}>
          <span className="pulse w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#2ECC9A' }}/>
          Fiber &amp; Telecom Operations Support
        </div>

        {/* Headline */}
        <h1 className="fade-up-1 font-serif text-5xl md:text-7xl text-cro-text mb-6"
          style={{ lineHeight: '1.06', fontWeight: 400 }}>
          Protect your<br/>
          <em className="not-italic" style={{ color: '#1A3A5C' }}>revenue.</em><br/>
          Strengthen your<br/>operations.
        </h1>

        {/* Subline */}
        <p className="fade-up-2 text-cro-muted font-light text-lg max-w-lg mb-4 leading-relaxed">
          Specialized support for fiber optic and telecom contractors — billing coordination,
          revenue recovery, and project controls for large-scale deployments.
        </p>
        <p className="fade-up-2 text-cro-light text-sm mb-10 font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          // Improving Operational Visibility, Billing Workflows &amp; Revenue Recovery
        </p>

        {/* CTAs */}
        <div className="fade-up-3 flex flex-wrap gap-3">
          <a href="#contact"
            className="bg-cro-navy text-white px-8 py-4 rounded text-sm font-medium tracking-wide no-underline hover:opacity-90 transition-opacity">
            Recover Lost Revenue
          </a>
          <a href="#services"
            className="border text-cro-text px-8 py-4 rounded text-sm font-medium tracking-wide no-underline hover:border-cro-navy hover:text-cro-navy transition-colors"
            style={{ borderColor: '#D0D8E4' }}>
            View Services
          </a>
        </div>

        {/* LinkedIn link */}
        <div className="fade-up-3 mt-8">
          <a href="https://linkedin.com/company/contractor-revenue-operations" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cro-light text-xs no-underline hover:text-cro-navy transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Contractor Revenue Operations on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
