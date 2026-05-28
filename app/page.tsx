import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import StatBar     from '@/components/StatBar'
import WhoWeServe  from '@/components/WhoWeServe'
import Services    from '@/components/Services'
import About       from '@/components/About'
import Process     from '@/components/Process'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatBar />
      <WhoWeServe />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
