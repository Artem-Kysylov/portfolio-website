// Imports 
import React from 'react'
import styles from './styles.module.css'
import { opacity } from '../../../app/anim/anim'
import { motion } from 'framer-motion'

// Import components 
import HeroTitles from '@/components/hero-titles/HeroTitles'
import HeroHello from '@/components/hero-hello/HeroHello'

const Hero = () => {
  return (
    <section className={styles.hero__section}>
      <motion.div
        className={styles.hero__background}
        transition={{ ease: "easeOut", duration: 0.5 }}
        variants={opacity} 
        initial='initial' 
        animate='enter'
      />
        <div className="container">
          <HeroHello/>
          <HeroTitles/>
        </div>
    </section>
  )
}

export default Hero