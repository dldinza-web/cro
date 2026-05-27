import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-cro-navy2 px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-sm font-medium text-white tracking-wide"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Contractor Revenue Operations
          </span>
        </div>

        <div className="flex gap-6 items-center" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>
          <a href="https://contractorrevenueoperations.com" className="text-cro-green no-underline hover:opacity-75">
            contractorrevenueoperations.com
          </a>
          <a href="tel:9545941847" className="no-underline hover:opacity-75" style={{ color: 'rgba(255,255,255,0.4)' }}>
            (954) 594-1847
          </a>
        </div>

        <nav className="flex gap-6">
          {['#services','#process','#about','#contact'].map(href => (
            <a key={href} href={href}
              className="text-xs no-underline capitalize hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              {href.replace('#','')}
            </a>
          ))}
        </nav>

        <p className="text-xs w-full md:w-auto text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
          © {year} Contractor Revenue Operations. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
