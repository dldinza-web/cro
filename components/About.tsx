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
  { title: 'Telecom Native',       desc: 'We speak the language — OTDR, OLTS, NTE, closeout packages. No learning curve, no hand-holding.'                    },
  { title: 'Revenue Focused',      desc: "Every engagement is designed around one outcome: helping you capture and protect more of what you've earned."         },
  { title: 'Field-Tested Process', desc: 'Our workflows are built from real project environments, not textbook theory or generic consulting playbooks.'         },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-8" style={{ borderTop: '1px solid #E8E6E0', borderBottom: '1px solid #E8E6E0' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <div className="section-label">
            <span className="text-xs font-medium tracking-widest uppercase text-cro-green">About CRO</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-6" style={{ fontWeight: 400, lineHeight: 1.15 }}>
            Built by people<br/>
            who&apos;ve been{' '}
            <em style={{ color: '#1A3A5C' }}>in the field</em>
          </h2>
          <p className="text-cro-muted font-light text-base leading-relaxed mb-10">
            Contractor Revenue Operations was founded with a simple mission: help telecom contractors
            protect the revenue they&apos;ve already earned. With hands-on experience supporting
            large-scale fiber infrastructure environments, we understand the operational and financial
            challenges that fast-paced deployments create.
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

        {/* Terminal */}
        <div className="rounded-lg p-6" style={{ background: '#F7F6F2', border: '1px solid #E8E6E0' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', lineHeight: '1.9' }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid #E8E6E0' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }}/>
              <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }}/>
              <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }}/>
              <span className="text-cro-light ml-2" style={{ fontSize: '10px' }}>cro-ops-check.sh</span>
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
