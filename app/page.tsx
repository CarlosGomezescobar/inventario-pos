import Image from 'next/image'
import SideNavbar from './components/SideNavbar'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1> Pantalla de Inicio</h1>

          <SideNavbar />
        </div>
    </main>
  )
}
