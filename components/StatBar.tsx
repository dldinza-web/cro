const stats = [
  { num: '100%', label: 'Telecom Focused'         },
  { num: '8+',   label: 'Core Service Areas'       },
  { num: '$0',   label: 'Revenue Left Behind'      },
  { num: '24/7', label: 'Operational Visibility'   },
]

export default function StatBar() {
  return (
    <div className="bg-cro-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label}
            className="px-8 py-7 text-center"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div className="font-serif text-3xl font-normal text-cro-green mb-1">{s.num}</div>
            <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
