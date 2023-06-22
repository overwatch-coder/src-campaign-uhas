import dynamic from 'next/dynamic'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Metadata } from 'next'

export const revalidate = 60;

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
const DynamicAosProvider = dynamic(() => import('./context/AosProvider'), {
  ssr: false
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="overflow-x-hidden scroll-smooth font-poppins"
      >   
      <DynamicAosProvider>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 mb-auto'>
            {children}
          </main>
          <Footer />
        </div>
        </DynamicAosProvider>
      </body>
    </html>
  )
}
