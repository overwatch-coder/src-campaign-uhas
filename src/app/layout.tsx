import Head from 'next/head'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome | JFSRC',
  description: 'This is a campaign website for SRC candidate Johnson Eziel of UHAS - Ghana',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden scroll-smooth font-poppins"
      >   
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 mb-auto'>
          {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  )
}
