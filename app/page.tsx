import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
// import { Diferencial } from "@/components/diferencial" // seção oculta até escalar — componente em @/components/diferencial
import { Plans } from "@/components/plans"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Diferencial /> */}
        <Plans />
        <Location />
      </main>
      <Footer />
    </>
  )
}
