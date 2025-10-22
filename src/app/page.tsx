import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Experience from "@/components/sections/Experience"
import Portfolio from "@/components/sections/Portfolio"
import Services from "@/components/sections/Services"
import Mission from "@/components/sections/Mission"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
