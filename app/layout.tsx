import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Future Store | Home',
  description: 'Future Store Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <div className='flex-1 pb-10'>
            {children}
          </div>
          <div className=''>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
