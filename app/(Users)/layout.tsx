import '@/app/globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Providers from '../Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className='dark:bg-gray-900 bg-[#ffffff]'>
        <Providers>
          <div className='max-w-screen-xl m-auto px-2'>
            <Header />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}