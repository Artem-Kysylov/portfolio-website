'use client'
// Imports 
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import styles from "./page.module.css"

// Import components
import Hero from '@/components/sections/hero/Hero'
import Projects from '@/components/sections/projects/Projects'
import Services from '@/components/sections/services/Services'
import Behance from '@/components/sections/behance/Behance'
import About from '@/components/sections/about/About'
import Contact from '@/components/sections/contact/Contact'


export default function Home() {

  // Smooth scroll initialization 
  useEffect( () => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      smoothTouch: true,
    })
    
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


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
