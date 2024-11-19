import type { Metadata } from 'next'

import './globals.css'
import Layout from './components/layout'

export const metadata: Metadata = {
  title: 'Macstudy',
  description:
    'Simplifying navigation and resources for schools, students, and tutors.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='pt-0'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
