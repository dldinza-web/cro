import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Revenue Operations | Fiber & Telecom Ops Support',
  description: 'Improving Operational Visibility, Billing Workflows and Revenue Recovery for Contractors. Specialized support for fiber optic and telecom contractors.',
  keywords: 'fiber optic contractor, telecom revenue recovery, billing coordination, project controls, OTDR validation, NTE tracking, closeout packages',
  openGraph: {
    title: 'Contractor Revenue Operations',
    description: 'Protect your revenue. Optimize your operations.',
    url: 'https://contractorrevenueoperations.com',
    siteName: 'Contractor Revenue Operations',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
