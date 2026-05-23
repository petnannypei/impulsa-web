import { Analytics } from '@vercel/analytics/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import SplitTextSection from './components/SplitTextSection'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Packages from './components/Packages'
import FormIntake from './components/FormIntake'
import WhyImpulsa from './components/WhyImpulsa'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfterSlider />
        <SplitTextSection />
        <HowItWorks />
        <Portfolio />
        <Packages />
        <FormIntake />
        <WhyImpulsa />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
