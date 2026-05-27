const terminalLines = [
  { color: '#2ECC9A', symbol: '✓', text: 'Invoice audit complete — 3 gaps found'      },
  { color: '#F59E0B', symbol: '⚡', text: 'Change order #47 — not yet billed'          },
  { color: '#60A5FA', symbol: '→', text: 'NTE threshold: 94.2% utilized'              },
  { color: '#2ECC9A', symbol: '✓', text: 'Splice package [Zone 3-B]: validated'       },
  { color: '#F97316', symbol: '!', text: 'OTDR trace #12: re-test required'           },
  { color: '#2ECC9A', symbol: '✓', text: 'KPI report generated — Week 22'             },
  { color: '#F59E0B', symbol: '⚡', text: 'Closeout pkg: 2 items outstanding'         },
  { color: '#2ECC9A', symbol: '$', text: 'Recovering $18,400 in unbilled work...'     },
  { color: '#2ECC9A', symbol: '✓', text: 'Revenue recovery complete'                 },
]

const pillars = [
  {
    title: 'Tier 1 Insider',
    desc: 'Direct experience inside Tier 1 carrier operations. We know exactly how Zayo, Lumen, and AT&T process POs, approve change orders, and conduct 3-way match.',
  },
  {
    title: 'Revenue First',
    desc: "Every engagement starts with one question: how much money are you leaving on the table? Then we go get it.",
  },
  {
    title: 'Field-Tested',
    desc: 'Our processes come from real fiber deployments — not consulting theory. We know what surveyors, splicers, and PMs actually deal with day to day.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-cro-cream py-24 px-8" style={{ borderTop: '1px solid #E8E6E0', borderBottom: '1px solid #E8E6E0' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <div className="section-label">
            <span className="text-xs font-medium tracking-widest uppercase text-cro-green">About CRO</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-6" style={{ fontWeight: 400, lineHeight: 1.15 }}>
            We&apos;ve worked inside<br/>
            <em style={{ color: '#1A3A5C' }}>the carrier systems</em><br/>
            you bill into
          </h2>
          <p className="text-cro-muted font-light text-base leading-relaxed mb-4">
            Contractor Revenue Operations was founded by a Network Construction Manager with direct experience
            at Zayo — one of the largest fiber carriers in the US. We&apos;ve seen firsthand how billing
            processes, change order approvals, and 3-way match requirements create revenue gaps for contractors.
          </p>
          <p className="text-cro-muted font-light text-base leading-relaxed mb-10">
            Our mission is simple: help contractors protect and recover the revenue they&apos;ve already earned,
            using the same operational knowledge that carriers use internally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div key={p.title} style={{ borderLeft: '2px solid #2ECC9A', paddingLeft: '16px' }}>
                <h4 className="text-sm font-semibold text-cro-text mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {p.title}
                </h4>
                <p className="text-cro-muted text-xs leading-relaxed" style={{ fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-6" style={{ background: '#fff', border: '1px solid #E8E6E0' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', lineHeight: '1.9' }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid #E8E6E0' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }}/>
              <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }}/>
              <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }}/>
              <span className="text-cro-light ml-2" style={{ fontSize: '10px' }}>cro-revenue-audit.sh</span>
            </div>
            {terminalLines.map((l, i) => (
              <div key={i} className="flex gap-3 text-cro-muted py-0.5">
                <span style={{ color: l.color }}>{l.symbol}</span>
                <span>{l.text}</span>
              </div>
            ))}
            <div className="flex gap-3 mt-1" style={{ color: '#2ECC9A' }}>
              <span>{'>'}</span>
              <span>_<span className="blink">|</span></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
