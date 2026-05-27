'use client'
import { useState } from 'react'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' })

  const services = [
    'Invoice & Billing Coordination',
    'Revenue Recovery & Reconciliation',
    'Project Controls & KPI Reporting',
    'Change Order & NTE Tracking',
    'Closeout Package Management',
    'Vendor Coordination',
    'As-Built & Splice Package Review',
    'OTDR/OLTS Documentation Validation',
    'General Inquiry',
  ]

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    // Replace with your Formspree endpoint:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form)
    // })
    // setState(res.ok ? 'success' : 'error')
    await new Promise(r => setTimeout(r, 1000))
    setState('success')
  }

  const inputStyle = {
    width: '100%', background: '#F7F6F2', border: '1px solid #E8E6E0',
    borderRadius: '4px', padding: '11px 14px', fontSize: '14px',
    color: '#1A1A2E', fontFamily: 'DM Sans, sans-serif', outline: 'none',
  }
  const labelStyle = { fontSize: '11px', fontWeight: 500, letterSpacing: '0.07em',
    textTransform: 'uppercase' as const, color: '#6B7A8D', display: 'block', marginBottom: '6px' }

  return (
    <section id="contact" className="bg-white py-24 px-8" style={{ borderTop: '1px solid #E8E6E0' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <div className="section-label">
            <span className="text-xs font-medium tracking-widest uppercase text-cro-green">Let&apos;s Work Together</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cro-text mb-6" style={{ fontWeight: 400, lineHeight: 1.15 }}>
            Revenue on<br/>the table?<br/>
            <em style={{ color: '#1A3A5C' }}>Let&apos;s go get it.</em>
          </h2>
          <p className="text-cro-muted font-light text-base leading-relaxed mb-10">
            Whether you&apos;re losing money on billing gaps, drowning in closeout paperwork,
            or need better project visibility — we&apos;ve done this before.
          </p>

          <div className="flex flex-col gap-4">
            <a href="https://contractorrevenueoperations.com"
              className="flex items-center gap-3 text-cro-navy text-sm no-underline hover:opacity-75 transition-opacity"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
              </svg>
              contractorrevenueoperations.com
            </a>
            <a href="tel:9545941847"
              className="flex items-center gap-3 text-cro-muted text-sm no-underline hover:text-cro-navy transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (954) 594-1847
            </a>
            <a href="https://linkedin.com/company/contractor-revenue-operations" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-cro-muted text-sm no-underline hover:text-cro-navy transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn — Contractor Revenue Operations
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-lg p-8" style={{ background: '#F7F6F2', border: '1px solid #E8E6E0' }}>
          {state === 'success' ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4" style={{ color: '#2ECC9A' }}>✓</div>
              <h3 className="font-serif text-2xl text-cro-text mb-2" style={{ fontWeight: 400 }}>Message Sent</h3>
              <p className="text-cro-muted text-sm">We&apos;ll be in touch shortly to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div><label style={labelStyle}>Name *</label>
                  <input name="name" required value={form.name} onChange={onChange} style={inputStyle} placeholder="Full name"/></div>
                <div><label style={labelStyle}>Company</label>
                  <input name="company" value={form.company} onChange={onChange} style={inputStyle} placeholder="Company name"/></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div><label style={labelStyle}>Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={onChange} style={inputStyle} placeholder="you@company.com"/></div>
                <div><label style={labelStyle}>Phone</label>
                  <input name="phone" value={form.phone} onChange={onChange} style={inputStyle} placeholder="(555) 000-0000"/></div>
              </div>
              <div><label style={labelStyle}>Service Needed</label>
                <select name="service" value={form.service} onChange={onChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div><label style={labelStyle}>Message *</label>
                <textarea name="message" required rows={4} value={form.message} onChange={onChange}
                  style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your project..."/>
              </div>
              {state === 'error' && <p style={{ color: '#E24B4A', fontSize: '12px' }}>Something went wrong. Please try again.</p>}
              <button type="submit" disabled={state === 'loading'}
                className="w-full bg-cro-navy text-white py-3.5 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {state === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              <p className="text-center text-xs text-cro-light">No spam. Just a direct conversation about your project.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
