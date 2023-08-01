import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brighter Team',
  description:
    'Discover top-tier staffing solutions with Brighter Team - Your trusted partner for exceptional talent in caregiving and cleaning services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
