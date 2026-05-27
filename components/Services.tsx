const services = [
  {
    title: 'Invoice & Billing Coordination',
    desc:  'Accurate, timely invoicing across all project phases and contract structures to protect your cash flow.',
    tag:   'Revenue Protection',
  },
  {
    title: 'Revenue Recovery & Reconciliation',
    desc:  'Identify and recover missed billings, unbilled work, and revenue leakage from completed or ongoing projects.',
    tag:   'Financial Recovery',
  },
  {
    title: 'Project Controls & KPI Reporting',
    desc:  'Real-time dashboards and reporting frameworks to give your team full visibility into schedule, scope, and finances.',
    tag:   'Operations',
  },
  {
    title: 'Change Order & NTE Tracking',
    desc:  'Track, document, and coordinate approvals so no change order slips through and scope is always protected.',
    tag:   'Scope Management',
  },
  {
    title: 'Closeout Package Management',
    desc:  'Complete, organized, deliverable-ready packages that satisfy contract requirements and unlock final billing.',
    tag:   'Project Closeout',
  },
  {
    title: 'Vendor Coordination',
    desc:  'Manage subcontractor relationships, track deliverables, and ensure vendor documentation is accurate and complete.',
    tag:   'Subcontractor Mgmt',
  },
  {
    title: 'As-Built & Splice Package Review',
    desc:  'Expert review of as-built documentation and splice records for accuracy, completeness, and client compliance.',
    tag:   'Documentation',
  },
  {
    title: 'OTDR / OLTS Documentation Validation',
    desc:  'Validate fiber test results including traces and power levels to meet handover standards and prevent disputes.',
    tag:   'Fiber Testing',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cro-cream py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">
          <span className="text-xs font-medium tracking-widest uppercase text-cro-green">Services</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-4" style={{ fontWeight: 400, lineHeight: 1.15 }}>
          What we do<br/>for contractors
        </h2>
        <p className="text-cro-muted font-light text-base max-w-lg mb-14 leading-relaxed">
          End-to-end operational and financial support built for the realities of large-scale fiber infrastructure deployments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid #E8E6E0', gap: '1px', backgroundColor: '#E8E6E0' }}>
          {services.map(s => (
            <div key={s.title} className="service-card bg-white p-7">
              <h3 className="text-sm font-semibold text-cro-text mb-3 leading-snug"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {s.title}
              </h3>
              <p className="text-cro-muted text-xs leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                {s.desc}
              </p>
              <span className="text-xs font-medium tracking-wide"
                style={{ color: '#0F6E56', fontFamily: 'JetBrains Mono, monospace' }}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
