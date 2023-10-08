// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import TopBar from './components/top/TopBar'
import LeftSidebar from './components/top/LeftSidebar'
import RigtSidebar from './components/top/RigtSidebar'
import Bottombar from './components/top/Bottombar'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Inventario sistema Pos v1',
  description: 'el mejor inventario para tu negocio',

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />

          <main className="flex flex-row">
          <LeftSidebar />

          <section className='main-container'>
           <div className='w-full max-w-4x1'>
            {children}
           </div>
          </section>
          
          <RigtSidebar />
          </main>

          <Bottombar />
          
          </body>
      </html>
    </ClerkProvider>
  )
  }