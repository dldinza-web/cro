'use client'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process',  label: 'Process'  },
    { href: '#about',    label: 'About'    },
    { href: '#contact',  label: 'Contact'  },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ borderBottom: '1px solid #E8E6E0' }}>
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <Logo size={38} />
          <div>
            <div className="text-xs font-semibold tracking-widest text-cro-text uppercase"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>
              Contractor Revenue Operations
            </div>
            <div className="text-cro-light" style={{ fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Fiber &amp; Telecom Support
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="nav-link text-cro-muted hover:text-cro-navy text-xs font-medium tracking-widest uppercase no-underline">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="bg-cro-navy text-white px-5 py-2.5 text-xs font-medium tracking-wide rounded no-underline hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-cro-muted" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-8 py-5" style={{ borderColor: '#E8E6E0' }}>
          <div className="flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-cro-muted text-sm font-medium tracking-widest uppercase no-underline hover:text-cro-navy">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="inline-block bg-cro-navy text-white px-5 py-2.5 text-xs font-medium rounded no-underline w-fit">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
