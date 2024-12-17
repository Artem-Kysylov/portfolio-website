import Image from "next/image"
import styles from "./page.module.css"

// Import components
import Hero from '@/components/sections/hero/Hero'
import Projects from '@/components/sections/projects/Projects'

export default function Home() {
  return (
    <>
      <Hero/>
      <Projects/>
    </>
  )
}
