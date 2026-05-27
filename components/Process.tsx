const steps = [
  { num: '01', title: 'Discovery Call',            desc: 'We assess your current workflows, identify revenue leakage points, and scope the engagement.'         },
  { num: '02', title: 'Operational Audit',         desc: 'Deep dive into billing records, project documentation, change orders, and closeout status.'           },
  { num: '03', title: 'Recovery & Optimization',   desc: 'Execute billing corrections, reconciliation, and workflow improvements across your team.'              },
  { num: '04', title: 'Ongoing Support',           desc: 'Continued KPI reporting, project controls, and billing coordination through project closeout.'        },
]

export default function Process() {
  return (
    <section id="process" className="bg-cro-cream py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">
          <span className="text-xs font-medium tracking-widest uppercase text-cro-green">How It Works</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-4" style={{ fontWeight: 400, lineHeight: 1.15 }}>
          From engagement<br/>to recovery
        </h2>
        <p className="text-cro-muted font-light text-base max-w-md mb-16 leading-relaxed">
          A streamlined process designed to get you operational — and capturing revenue — fast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-6 left-16 right-16 h-px"
            style={{ background: 'linear-gradient(90deg, #2ECC9A, #E8E6E0)' }} aria-hidden="true"/>

          {steps.map(s => (
            <div key={s.num} className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded mb-5 relative z-10 bg-white"
                style={{ border: '1px solid #2ECC9A', fontFamily: 'JetBrains Mono, monospace', fontSize: '15px', fontWeight: 500, color: '#2ECC9A' }}>
                {s.num}
              </div>
              <h4 className="text-sm font-semibold text-cro-text mb-2 uppercase tracking-wide"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {s.title}
              </h4>
              <p className="text-cro-muted text-xs leading-relaxed" style={{ fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
