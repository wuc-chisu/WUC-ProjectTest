import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Savory Haven - Fine Dining Restaurant',
  description: 'Experience exceptional cuisine at Savory Haven, your destination for authentic, innovative dining.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
