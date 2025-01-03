// Imports 
import styles from "./page.module.css"

// Import components
import Hero from '@/components/sections/hero/Hero'
import Projects from '@/components/sections/projects/Projects'
import Services from '@/components/sections/services/Services'
import Behance from '@/components/sections/behance/Behance'
import About from '@/components/sections/about/About'
import Contact from '@/components/sections/contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Services/>
      <Behance/>
      <About/>
      <Contact/>
    </main>
  )
}
