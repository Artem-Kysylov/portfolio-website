
// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

// Import components 
import HeroTitles from '@/components/hero-titles/HeroTitles'
import HeroHello from '@/components/hero-hello/HeroHello'

const Hero = () => {
  return (
    <section className={styles.hero__section}>
        <div className="container">
          <HeroHello/>
          <HeroTitles/>

            <Image
              className={styles.hero__img}
              src='/hero-img.png'
              width={835}
              height={834}
              alt='Artem Kysylov'
              loading="lazy"
            />
        </div>
    </section>
  )
}

export default Hero