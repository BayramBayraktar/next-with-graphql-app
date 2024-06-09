"use client"
import '../globals.css'
import Providers from '../Provider'


export default function RootLayout({ children }: { children: React.ReactNode }) {





    return (
        <html suppressHydrationWarning lang="en">
            <body className='dark:bg-gray-900 bg-[#ffffff]'>
                <Providers>
                    <div className='max-w-screen-xl m-auto px-2'>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}

