const primary = [
  {
    icon: '🔌',
    title: 'Fiber Optic Contractors',
    desc: 'Splicing crews, outside plant teams, and fiber deployment contractors working with Tier 1 carriers like Zayo, Lumen, AT&T, and Crown Castle.',
    tags: ['OTDR/OLTS Validation', 'Splice Package Review', 'As-Built Docs'],
    current: true,
  },
  {
    icon: '📡',
    title: 'Telecom Construction Contractors',
    desc: 'Tower, conduit, and outside plant contractors managing complex multi-phase projects with milestone-based billing and NTE tracking.',
    tags: ['Change Order Mgmt', 'NTE Tracking', 'KPI Reporting'],
    current: true,
  },
]

const expanding = [
  {
    icon: '⚡',
    title: 'Utility & Infrastructure Contractors',
    desc: 'Any contractor billing against purchase orders through 3-way match processes with utilities or large infrastructure owners.',
    tags: ['3-Way Match', 'PO Reconciliation', 'Invoice Audit'],
  },
  {
    icon: '🏗️',
    title: 'General & Specialty Contractors',
    desc: 'Construction contractors dealing with change order disputes, slow approvals, and closeout documentation that delays final payment.',
    tags: ['Closeout Packages', 'CO Recovery', 'Billing Audit'],
  },
]

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-white py-24 px-8" style={{ borderTop: '1px solid #E8E6E0', borderBottom: '1px solid #E8E6E0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label">
          <span className="text-xs font-medium tracking-widest uppercase text-cro-green">Who We Serve</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-4" style={{ fontWeight: 400, lineHeight: 1.15 }}>
          Built for contractors<br/>who bill against<em style={{ color: '#1A3A5C' }}> large carriers</em>
        </h2>
        <p className="text-cro-muted font-light text-base max-w-xl mb-16 leading-relaxed">
          We started in fiber because that&apos;s where we know the pain firsthand.
          We&apos;re expanding to every contractor where complex billing processes create revenue risk.
        </p>

        {/* Current focus */}
        <p className="text-xs font-medium tracking-widest uppercase mb-6"
          style={{ color: '#1A3A5C', fontFamily: 'JetBrains Mono, monospace' }}>
          — Current Focus
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {primary.map(s => (
            <div key={s.title} className="p-8 rounded-lg relative"
              style={{ background: '#F0F7FF', border: '1px solid #C5D9F0' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#1A3A5C', color: '#fff', fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px', fontFamily: 'JetBrains Mono, monospace' }}>
                ACTIVE
              </div>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-xl text-cro-text mb-3" style={{ fontWeight: 400 }}>{s.title}</h3>
              <p className="text-cro-muted text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full"
                    style={{ background: '#EAF6F1', color: '#0F6E56', fontFamily: 'JetBrains Mono, monospace' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expanding */}
        <p className="text-xs font-medium tracking-widest uppercase mb-6"
          style={{ color: '#8A9AB0', fontFamily: 'JetBrains Mono, monospace' }}>
          — Expanding Into
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {expanding.map(s => (
            <div key={s.title} className="p-8 rounded-lg"
              style={{ background: '#F7F6F2', border: '1px solid #E8E6E0' }}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-xl text-cro-text mb-3" style={{ fontWeight: 400 }}>{s.title}</h3>
              <p className="text-cro-muted text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full"
                    style={{ background: '#F0F0EE', color: '#6B7A8D', fontFamily: 'JetBrains Mono, monospace' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carrier logos strip */}
        <div className="mt-14 pt-10" style={{ borderTop: '1px solid #E8E6E0' }}>
          <p className="text-xs text-cro-light text-center mb-6 tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            We understand how these carriers process billing
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Zayo', 'Lumen', 'AT&T', 'Crown Castle', 'Frontier', 'Windstream'].map(c => (
              <span key={c} className="text-sm font-medium tracking-wide"
                style={{ color: '#B0BEC5', fontFamily: 'DM Sans, sans-serif' }}>
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
