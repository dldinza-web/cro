import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Case Study — Contractor Revenue Operations',
  description: 'How a small fiber contractor recovered $74K in 90 days by fixing billing gaps, change order tracking, and closeout documentation.',
}

export default function CaseStudy() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-cro-navy2 text-white pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
               style={{ background: 'radial-gradient(circle, #2ECC9A, transparent)' }} />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full opacity-5"
               style={{ background: 'radial-gradient(circle, #2ECC9A, transparent)' }} />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="section-label mb-6">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">Case Study</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6 fade-up">
              From billing chaos to{' '}
              <em className="text-cro-green not-italic">recovered revenue</em>{' '}
              in 90 days
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed fade-up-1">
              How a small fiber contractor stopped losing money they had already earned —
              and built a system that actually scales.
            </p>
            <div className="flex flex-wrap gap-2 mt-8 fade-up-2">
              {['Fiber Optic Deployment', '2–5 Employees', '$500K Annual Revenue', 'Southeast US'].map(tag => (
                <span key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── METRICS BAR ── */}
        <section className="bg-white border-b border-cro-border">
          <div className="max-w-3xl mx-auto grid grid-cols-3 divide-x divide-cro-border">
            {[
              { num: '$74K',  label: 'Revenue recovered in first 90 days' },
              { num: '11',    label: 'Unbilled change orders identified' },
              { num: '3 wks', label: 'Faster closeout package delivery' },
            ].map(m => (
              <div key={m.num} className="py-8 px-6 text-center">
                <div className="font-serif text-4xl text-cro-green2 mb-1">{m.num}</div>
                <div className="text-xs text-cro-muted leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

          {/* Situation */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">The Situation</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-4">
              A contractor doing everything right — except getting paid for it
            </h2>
            <p className="text-cro-muted leading-relaxed mb-3">
              When we first connected with this fiber installation contractor, they were executing
              solid work across multiple active telecom projects in the Southeast. Their crews were
              reliable, their quality was consistent, and their client relationships were strong.
            </p>
            <p className="text-cro-muted leading-relaxed">
              But their back office told a different story. With a team of just 3 people managing
              field operations and billing simultaneously, critical revenue was slipping through
              the cracks every month — not from bad work, but from an operational gap between what
              was done in the field and what made it onto an invoice.
            </p>
          </div>

          {/* Problems */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">The Problems</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-6">
              Three compounding issues draining cash flow
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: '📋',
                  title: 'Revenue leakage',
                  text: 'Completed work units — drops, splices, footage — were going untracked and unsubmitted. Estimated $4,000–$8,000 lost per project cycle.',
                },
                {
                  icon: '🔄',
                  title: 'Change order gaps',
                  text: '11 approved change orders had never been formally submitted for billing. The work was done. The money was sitting unclaimed.',
                },
                {
                  icon: '📁',
                  title: 'Closeout delays',
                  text: 'As-built packages, OTDR results, and splice documentation were scattered across emails — causing 4–6 week delays and payment holds.',
                },
              ].map(card => (
                <div key={card.title}
                  className="service-card bg-white border border-cro-border rounded-xl p-5">
                  <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center text-lg mb-3">
                    {card.icon}
                  </div>
                  <div className="font-medium text-cro-navy text-sm mb-2">{card.title}</div>
                  <p className="text-xs text-cro-muted leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote 1 */}
          <blockquote className="border-l-2 border-cro-green bg-white rounded-r-xl px-7 py-6">
            <p className="font-serif text-xl text-cro-navy italic leading-relaxed mb-3">
              "We knew we were losing money somewhere — we just didn't know how to find it or
              stop it. We were too busy doing the work to track the work."
            </p>
            <cite className="text-xs text-cro-green font-medium not-italic">
              — Owner, fiber installation contractor (composite)
            </cite>
          </blockquote>

          {/* Approach */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">Our Approach</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-8">
              A structured 90-day engagement
            </h2>
            <div className="relative">
              <div className="absolute left-[17px] top-0 bottom-0 w-px bg-cro-border" />
              <div className="space-y-8">
                {[
                  {
                    n: '1',
                    title: 'Weeks 1–2: Billing audit & revenue recovery',
                    text: 'Full reconciliation of all active and recently closed projects. Identified unbilled units, missing change orders, and NTE overruns. Submitted $47K in previously unclaimed invoices within the first 10 days.',
                  },
                  {
                    n: '2',
                    title: 'Weeks 3–5: System setup & workflow design',
                    text: 'Implemented a structured tracking system for daily production, change order approvals, and NTE limits. Created standardized invoice templates aligned to client billing portals.',
                  },
                  {
                    n: '3',
                    title: 'Weeks 6–10: Closeout package standardization',
                    text: 'Built a repeatable closeout process — OTDR documentation, as-built packages, and splice records organized into a structured digital workflow. Reduced delivery time from 5 weeks to under 2.',
                  },
                  {
                    n: '4',
                    title: 'Weeks 11–12: KPI reporting & handoff',
                    text: 'Delivered monthly operations report with billing status, outstanding receivables, change order log, and project KPIs. Team trained on maintaining the system going forward.',
                  },
                ].map(step => (
                  <div key={step.n} className="flex gap-6 relative">
                    <div className="w-9 h-9 rounded-full bg-cro-navy flex items-center justify-center text-white text-xs font-medium flex-shrink-0 relative z-10">
                      {step.n}
                    </div>
                    <div className="pt-1.5">
                      <div className="text-sm font-medium text-cro-navy mb-1">{step.title}</div>
                      <p className="text-sm text-cro-muted leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">The Results</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-6">
              Measurable impact in 90 days
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { num: '$74K',  label: 'Total revenue recovered' },
                { num: '100%',  label: 'Change orders submitted & tracked' },
                { num: '68%',   label: 'Faster closeout delivery' },
                { num: '$0',    label: 'Unbilled completed work at end of engagement' },
              ].map(r => (
                <div key={r.num} className="bg-cro-navy2 rounded-xl p-5 text-center">
                  <div className="font-serif text-3xl text-cro-green mb-2">{r.num}</div>
                  <div className="text-xs text-white/50 leading-snug">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Quote 2 */}
            <blockquote className="border-l-2 border-cro-green bg-white rounded-r-xl px-7 py-6 mt-8">
              <p className="font-serif text-xl text-cro-navy italic leading-relaxed mb-3">
                "The first invoice they helped us submit was $47,000 that had been sitting there
                for months. That alone paid for a year of the service."
              </p>
              <cite className="text-xs text-cro-green font-medium not-italic">
                — Owner, fiber installation contractor (composite)
              </cite>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="bg-cro-navy2 rounded-2xl px-8 py-12 text-center">
            <div className="section-label justify-center mb-4">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">Get Started</span>
            </div>
            <h3 className="font-serif text-3xl text-white mb-3">
              Is your operation leaving money on the table?
            </h3>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
              Most fiber contractors are. Let's find out how much — and get it back.
            </p>
            <a href="/#contact"
               className="inline-block bg-cro-green text-cro-navy2 font-medium px-8 py-3.5 rounded-lg text-sm hover:bg-cro-green/90 transition-colors">
              Schedule a free revenue assessment
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-cro-light text-center italic pb-4">
            * This case study is a composite representation based on common patterns observed
            across fiber optic contractor operations. Specific names and identifying details
            are not disclosed to protect client confidentiality.
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
