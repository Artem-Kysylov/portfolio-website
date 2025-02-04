// Imports 
import React from 'react'
import styles from './styles.module.css'
import { opacity } from '../../app/anim/anim'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

// Import components 
import Button from '@/components/button/Button'

const HeroTitles = () => {
  const yTransform  = useParallax()

  return (
    <motion.div 
      className={styles.hero__titles}
      style={{ y: yTransform }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      variants={opacity} 
      initial='initial' 
      animate='enter'
    >
        <p className={`headline ${styles.hero__titlFirst}`}>ui/ux design</p>
        <p className={`headline ${styles.hero__titleSecond}`}>web development</p>
        <div className={styles.hero__titlesBtnWrapper}>
            <p className={`headline ${styles.hero__titleThird}`}>digital products</p>
            <Button
                text='let`s create a project'
                buttonType='filled'
                href='#contact'                  
            />
        </div>
  </motion.div>
  )
}

export default HeroTitles