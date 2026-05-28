import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Client Onboarding Guide — Contractor Revenue Operations',
  description: 'Learn how CRO gets started with your operation. Full onboarding process, documentation requirements, service packages, and what to expect week one.',
}

export default function OnboardingGuide() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-cro-navy2 text-white pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
               style={{ background: 'radial-gradient(circle, #2ECC9A, transparent)' }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="section-label mb-6">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">Client Onboarding Guide</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6 fade-up">
              Revenue assurance for{' '}
              <em className="text-cro-green not-italic">fiber & telecom</em>{' '}
              contractors
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed fade-up-1">
              This document outlines how we work together to protect and recover your revenue.
              Our team handles the billing complexity so you can focus on the field.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12 fade-up-2">
              {[
                { stat: '60–90 days', desc: 'Average delay on stalled change orders' },
                { stat: '$0',         desc: 'In earned revenue should go uncaptured' },
                { stat: '3-Way Match', desc: '#1 cause of invoice rejections with Tier 1 carriers' },
              ].map(s => (
                <div key={s.stat} className="border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl text-cro-green mb-1">{s.stat}</div>
                  <div className="text-xs text-white/50 leading-snug">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">

          {/* 01 — About Us */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">01 — About Us</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-4">Who We Are</h2>
            <p className="text-cro-muted leading-relaxed mb-4">
              Contractor Revenue Operations (CRO) is a specialized revenue assurance and billing
              operations firm built exclusively for fiber optic and telecommunications contractors.
              Founded by a Network Construction Manager with direct experience inside Tier 1 carrier
              operations — including Zayo and Crown Castle — we understand billing processes from
              both sides of the table.
            </p>
            <p className="text-cro-muted leading-relaxed mb-8">
              Most billing problems contractors face are not caused by bad work — they are caused
              by documentation gaps, missed deadlines, and a lack of visibility into where revenue
              is stuck. That is exactly what we fix.
            </p>

            {/* Mission */}
            <div className="bg-cro-navy2 rounded-2xl p-6 mb-8">
              <div className="text-cro-green font-mono text-xs tracking-widest uppercase mb-4">Our Mission</div>
              <ul className="space-y-3">
                {[
                  'Help contractors protect and recover the revenue they have already earned.',
                  'Reduce billing delays caused by incomplete documentation and missed change order windows.',
                  'Give contractors real-time visibility into their financial pipeline.',
                  'Be the billing department that small and mid-size contractors never had.',
                ].map(m => (
                  <li key={m} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                    <span className="text-cro-green mt-0.5 flex-shrink-0">→</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise table */}
            <h3 className="font-serif text-xl text-cro-navy mb-4">Our Expertise</h3>
            <div className="space-y-2">
              {[
                { area: 'Fiber Optic Billing',    desc: 'OTDR traces, splice logs, KMZ, as-built documentation for Tier 1 carriers' },
                { area: 'Change Order Management', desc: 'Track, submit, and follow up on COs before the 90-day window closes' },
                { area: '3-Way Match Process',     desc: 'Understand how carriers like Zayo, Lumen, and AT&T process invoices internally' },
                { area: 'AR Aging & Recovery',     desc: 'Identify and recover invoices stuck at 30, 60, and 90+ days' },
                { area: 'Avetta Compliance',        desc: 'Help maintain Avetta certification required by most Tier 1 carriers' },
                { area: 'Splicer Payroll',          desc: 'Calculate splicer hours tied directly to field documentation' },
              ].map(r => (
                <div key={r.area} className="flex gap-4 bg-white border border-cro-border rounded-xl px-5 py-4 service-card">
                  <div className="text-cro-green font-mono text-xs pt-0.5 flex-shrink-0">▸</div>
                  <div>
                    <div className="text-sm font-medium text-cro-navy mb-0.5">{r.area}</div>
                    <div className="text-xs text-cro-muted leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 02 — Onboarding Process */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">02 — Onboarding Process</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-2">How We Get Started</h2>
            <p className="text-cro-muted leading-relaxed mb-8">
              Our onboarding is designed to give us a complete picture of your business in 2–4 weeks.
              We move quickly because every day without visibility is a day revenue can slip away.
            </p>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1 — Discovery',
                  time: 'Week 1',
                  items: [
                    { title: 'Discovery Call',     desc: 'Initial call to understand your current billing process and pain points' },
                    { title: 'Agreements Review',  desc: 'Review all active agreements with carriers — CO windows, payment terms, documentation requirements' },
                    { title: 'Avetta Audit',        desc: 'Assess your current Avetta status and identify any compliance gaps' },
                    { title: 'Field Process Review',desc: 'Understand how your field technicians currently document their work' },
                    { title: 'Payroll Process',     desc: 'Review how splicers are paid and whether hours are properly justified' },
                  ],
                },
                {
                  phase: 'Phase 2 — Revenue Audit',
                  time: 'Week 2',
                  items: [
                    { title: 'Open PO Review',       desc: 'List all open POs/projects with their status and expiration dates' },
                    { title: 'Unbilled Work',         desc: 'Identify all work completed that has not yet been invoiced' },
                    { title: 'Invoice Status',        desc: 'Review all submitted invoices and their payment status' },
                    { title: 'Change Order Audit',    desc: 'Identify change orders that are pending, in review, or at risk of expiring' },
                    { title: 'Revenue at Risk Report',desc: 'Calculate total revenue at risk and quick wins we can address immediately' },
                  ],
                },
              ].map(phase => (
                <div key={phase.phase} className="bg-white border border-cro-border rounded-2xl overflow-hidden">
                  <div className="bg-cro-navy px-6 py-4 flex items-center justify-between">
                    <div className="text-white font-medium text-sm">{phase.phase}</div>
                    <div className="text-cro-green font-mono text-xs">{phase.time}</div>
                  </div>
                  <div className="p-4 space-y-2">
                    {phase.items.map(item => (
                      <div key={item.title} className="flex gap-3 px-2 py-2">
                        <span className="text-cro-green text-xs mt-0.5 flex-shrink-0">✓</span>
                        <div>
                          <span className="text-sm font-medium text-cro-navy">{item.title}: </span>
                          <span className="text-sm text-cro-muted">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* What we need */}
            <div className="mt-6 bg-cro-cream border border-cro-border rounded-2xl p-6">
              <div className="text-cro-green font-mono text-xs tracking-widest uppercase mb-4">What We Need From You at Onboarding</div>
              <ul className="space-y-2">
                {[
                  'Copies of all active carrier agreements (Zayo, Crown Castle, Lumen, etc.)',
                  'Avetta login or current compliance status',
                  'List of all open POs / S-Numbers with scope of work',
                  'All submitted invoices and their current payment status',
                  'Any pending or submitted change orders',
                  'How your field crew currently documents work (WhatsApp, photos, Smartsheet, etc.)',
                  'Splicer roster and current pay structure',
                ].map(item => (
                  <li key={item} className="flex gap-3 text-sm text-cro-muted leading-relaxed">
                    <span className="text-cro-green flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 03 — Ongoing Service */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">03 — Ongoing Service</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-2">What We Do Every Week</h2>
            <p className="text-cro-muted leading-relaxed mb-8">
              After onboarding, your account runs on a consistent weekly cycle. Your real-time
              dashboard is always updated so you know exactly where every dollar stands.
            </p>

            <div className="space-y-2 mb-8">
              {[
                { day: 'Monday',    task: 'Update field logs with work completed the prior week. Verify OTDR, KMZ, and splice log documentation.' },
                { day: 'Tuesday',   task: 'Update change order tracker. Flag any COs approaching the 90-day window. Contact carrier if needed.' },
                { day: 'Wednesday', task: 'Review submitted invoices. Follow up with carrier AP on any invoices past 30 days.' },
                { day: 'Thursday',  task: 'Update AR aging dashboard. Identify new items ready to invoice.' },
                { day: 'Friday',    task: 'Weekly report sent to client. Flag any urgent items for the following week.' },
              ].map(d => (
                <div key={d.day} className="flex items-start gap-4 bg-white border border-cro-border rounded-xl px-5 py-4 service-card">
                  <div className="text-cro-green font-mono text-xs font-medium w-24 flex-shrink-0 pt-0.5">{d.day}</div>
                  <div className="text-sm text-cro-muted leading-relaxed">{d.task}</div>
                </div>
              ))}
            </div>

            {/* Dashboard */}
            <div className="bg-cro-navy2 rounded-2xl p-6 mb-6">
              <div className="text-cro-green font-mono text-xs tracking-widest uppercase mb-4">Your Real-Time Dashboard Includes</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Open projects and PO expiration dates',
                  'Work completed and ready to invoice',
                  'Change orders by status: Draft, Submitted, In Review, Approved',
                  'Change orders approaching the 90-day deadline — flagged in red',
                  'Invoices submitted and pending payment',
                  'AR aging buckets: 0–30, 31–60, 61–90, and +90 days',
                  'Revenue at risk summary',
                  'Splicer hours and payroll summary',
                ].map(item => (
                  <div key={item} className="flex gap-2 text-white/70 text-xs leading-relaxed">
                    <span className="text-cro-green flex-shrink-0">▸</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 04 — Packages */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">04 — Service Packages</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-2">Pricing & Packages</h2>
            <p className="text-cro-muted leading-relaxed mb-8">
              All packages include the onboarding audit and real-time dashboard. Choose the level
              of support that matches the size and complexity of your operation.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: 'Essential',
                  best: '1–2 active projects',
                  features: [
                    { label: 'Onboarding Audit',      included: true },
                    { label: 'Real-Time Dashboard',    included: true },
                    { label: 'Weekly Status Report',   included: true },
                    { label: 'AR Aging Tracking',      included: true },
                    { label: 'Change Order Tracking',  included: true },
                    { label: 'Carrier Follow-Up',      included: false },
                    { label: 'Field Doc Support',      included: false },
                    { label: 'Splicer Payroll Calc',   included: false },
                    { label: 'Biweekly Client Call',   included: false },
                    { label: 'Full Billing Management',included: false },
                  ],
                  highlight: false,
                },
                {
                  name: 'Professional',
                  best: '3–5 active projects',
                  features: [
                    { label: 'Onboarding Audit',      included: true },
                    { label: 'Real-Time Dashboard',    included: true },
                    { label: 'Weekly Status Report',   included: true },
                    { label: 'AR Aging Tracking',      included: true },
                    { label: 'Change Order Tracking',  included: true },
                    { label: 'Carrier Follow-Up',      included: true },
                    { label: 'Field Doc Support',      included: true },
                    { label: 'Splicer Payroll Calc',   included: true },
                    { label: 'Biweekly Client Call',   included: true },
                    { label: 'Full Billing Management',included: false },
                  ],
                  highlight: true,
                },
                {
                  name: 'Full Service',
                  best: '6+ projects / multiple carriers',
                  features: [
                    { label: 'Onboarding Audit',      included: true },
                    { label: 'Real-Time Dashboard',    included: true },
                    { label: 'Weekly Status Report',   included: true },
                    { label: 'AR Aging Tracking',      included: true },
                    { label: 'Change Order Tracking',  included: true },
                    { label: 'Carrier Follow-Up',      included: true },
                    { label: 'Field Doc Support',      included: true },
                    { label: 'Splicer Payroll Calc',   included: true },
                    { label: 'Weekly Client Call',     included: true },
                    { label: 'Full Billing Management',included: true },
                  ],
                  highlight: false,
                },
              ].map(pkg => (
                <div key={pkg.name}
                  className={`rounded-2xl overflow-hidden border ${pkg.highlight ? 'border-cro-green shadow-lg' : 'border-cro-border'}`}>
                  <div className={`px-5 py-5 ${pkg.highlight ? 'bg-cro-navy2' : 'bg-cro-navy'}`}>
                    {pkg.highlight && (
                      <div className="text-cro-green font-mono text-xs tracking-widest uppercase mb-2">Most Popular</div>
                    )}
                    <div className="text-white font-serif text-xl mb-1">{pkg.name}</div>
                    <div className="text-white/50 text-xs">{pkg.best}</div>
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    {pkg.features.map(f => (
                      <div key={f.label} className="flex items-center gap-3 text-xs">
                        <span className={f.included ? 'text-cro-green' : 'text-cro-light'}>
                          {f.included ? '✓' : '—'}
                        </span>
                        <span className={f.included ? 'text-cro-text' : 'text-cro-light'}>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-cro-muted mt-4 leading-relaxed">
              All packages require a minimum 3-month commitment. Onboarding fee of $1,500 applies
              to all new clients (waived for Full Service package). Taxes not included.
            </p>
          </div>

          {/* 05 — Documentation */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">05 — Documentation Requirements</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-2">Field Documentation Standards</h2>
            <p className="text-cro-muted leading-relaxed mb-6">
              One of the most common reasons contractors lose revenue is incomplete field
              documentation. To invoice successfully, the following must be in order for every
              completed job:
            </p>

            <div className="space-y-2 mb-8">
              {[
                { doc: 'OTDR Traces',   req: 'Required for every fiber splice. Must show pass/fail results within spec. File format: .sor or PDF export.' },
                { doc: 'KMZ File',      req: 'Updated after every splice location. Must reflect actual fiber route and splice points.' },
                { doc: 'Splice Log',    req: "Completed in the carrier's Smartsheet with fiber counts, locations, and technician name." },
                { doc: 'Site Photos',   req: 'Before and after photos of each splice location. Include street address or GPS coordinates.' },
                { doc: 'Hours Log',     req: 'Technician name, date, location, and hours worked for each day on site.' },
                { doc: 'Circuit IDs',   req: 'All circuit or ticket IDs associated with the work must be documented.' },
              ].map(r => (
                <div key={r.doc} className="bg-white border border-cro-border rounded-xl px-5 py-4 service-card">
                  <div className="text-sm font-medium text-cro-navy mb-1">{r.doc}</div>
                  <div className="text-xs text-cro-muted leading-relaxed">{r.req}</div>
                </div>
              ))}
            </div>

            {/* 90-day warning */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-500 text-lg">⚠</span>
                <div className="text-red-700 font-mono text-xs tracking-widest uppercase font-medium">90-Day CO Rule — This is Critical</div>
              </div>
              <ul className="space-y-2">
                {[
                  'In most carrier agreements, change orders must be submitted within 90 days of the work completion date.',
                  'CRO tracks this deadline for every project and alerts you when a CO is approaching the window.',
                  'If the 90-day window is missed, the revenue is typically unrecoverable.',
                  'This is one of the most common ways contractors lose earned revenue.',
                ].map(item => (
                  <li key={item} className="flex gap-3 text-sm text-red-700 leading-relaxed">
                    <span className="flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 06 — Next Steps */}
          <div>
            <div className="section-label">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">06 — Next Steps</span>
            </div>
            <h2 className="font-serif text-3xl text-cro-navy mb-8">Let's Get Started</h2>

            <div className="relative">
              <div className="absolute left-[17px] top-0 bottom-0 w-px bg-cro-border" />
              <div className="space-y-6">
                {[
                  { n: '1', title: 'Agreement',         desc: 'Sign service agreement and select your package' },
                  { n: '2', title: 'Document Collection',desc: 'Send us copies of all carrier agreements and Avetta credentials' },
                  { n: '3', title: 'Onboarding Call',    desc: 'Schedule your onboarding call (60 minutes) — we walk through your current status together' },
                  { n: '4', title: 'Revenue Audit',      desc: 'We complete the Revenue Audit and present findings within 5 business days' },
                  { n: '5', title: 'Dashboard Launch',   desc: 'Your real-time dashboard goes live — your team can access it from day one' },
                  { n: '6', title: 'Ongoing Service',    desc: 'Weekly rhythm begins — your revenue pipeline is now visible and managed' },
                ].map(step => (
                  <div key={step.n} className="flex gap-6 relative">
                    <div className="w-9 h-9 rounded-full bg-cro-navy flex items-center justify-center text-white text-xs font-medium flex-shrink-0 relative z-10">
                      {step.n}
                    </div>
                    <div className="pt-1.5 pb-2">
                      <div className="text-sm font-medium text-cro-navy mb-1">{step.title}</div>
                      <p className="text-sm text-cro-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-cro-navy2 rounded-2xl px-8 py-12 text-center">
            <div className="section-label justify-center mb-4">
              <span className="text-cro-green font-mono text-xs tracking-widest uppercase">Ready to recover your revenue?</span>
            </div>
            <h3 className="font-serif text-3xl text-white mb-3">
              Schedule your free discovery call
            </h3>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
              We'll walk through your current billing process and identify where revenue is at risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="/#contact"
                 className="inline-block bg-cro-green text-cro-navy2 font-medium px-8 py-3.5 rounded-lg text-sm hover:bg-cro-green/90 transition-colors">
                Get Started
              </a>
              <a href="tel:9545941847"
                 className="inline-block border border-white/20 text-white/70 font-medium px-8 py-3.5 rounded-lg text-sm hover:border-white/40 transition-colors">
                (954) 594-1847
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
