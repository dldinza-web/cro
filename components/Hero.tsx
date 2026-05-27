export default function Hero() {
  return (
    <section className="bg-white pt-16 relative overflow-hidden" style={{ borderBottom: '1px solid #E8E6E0' }}>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-5" aria-hidden="true">
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="240" cy="240" r="220" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="160" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="100" stroke="#1A3A5C" strokeWidth="1"/>
          <circle cx="240" cy="240" r="40"  stroke="#1A3A5C" strokeWidth="1"/>
          <line x1="20" y1="240" x2="460" y2="240" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="240" y1="20" x2="240" y2="460" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="84" y1="84" x2="396" y2="396" stroke="#1A3A5C" strokeWidth="0.8"/>
          <line x1="396" y1="84" x2="84" y2="396" stroke="#1A3A5C" strokeWidth="0.8"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-28 md:py-36">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-medium tracking-wide uppercase"
          style={{ background: '#EAF6F1', color: '#0F6E56' }}>
          <span className="pulse w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#2ECC9A' }}/>
          Fiber & Telecom Revenue Assurance
        </div>

        <h1 className="fade-up-1 font-serif text-5xl md:text-7xl text-cro-text mb-6"
          style={{ lineHeight: '1.06', fontWeight: 400 }}>
          You did the work.<br/>
          <em className="not-italic" style={{ color: '#1A3A5C' }}>Get paid for it.</em>
        </h1>

        <p className="fade-up-2 text-cro-muted font-light text-lg max-w-xl mb-4 leading-relaxed">
          Contractors working with Tier 1 carriers lose tens of thousands in revenue every month —
          stuck in change order backlogs, 3-way match failures, and billing documentation gaps.
          We fix that.
        </p>
        <p className="fade-up-2 text-cro-light text-sm mb-10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          // Built by someone who's been inside Tier 1 carrier operations
        </p>

        <div className="fade-up-3 flex flex-wrap gap-3">
          <a href="#contact"
            className="bg-cro-navy text-white px-8 py-4 rounded text-sm font-medium tracking-wide no-underline hover:opacity-90 transition-opacity">
            Recover Your Revenue
          </a>
          <a href="#services"
            className="border text-cro-text px-8 py-4 rounded text-sm font-medium tracking-wide no-underline hover:border-cro-navy hover:text-cro-navy transition-colors"
            style={{ borderColor: '#D0D8E4' }}>
            See How It Works
          </a>
        </div>

        <div className="fade-up-3 mt-10 flex flex-wrap gap-8">
          {[
            { val: '60–90', label: 'days contractors wait to get paid on stalled change orders' },
            { val: '3-way', label: 'match failures are the #1 cause of delayed invoices' },
            { val: '$0',    label: 'in earned revenue should go uncaptured' },
          ].map(s => (
            <div key={s.label} className="flex items-start gap-3">
              <span className="font-serif text-2xl font-normal" style={{ color: '#1A3A5C', lineHeight: 1 }}>{s.val}</span>
              <span className="text-cro-muted text-xs max-w-36 leading-relaxed" style={{ fontWeight: 300 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
