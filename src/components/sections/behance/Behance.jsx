'use client'
// Imports 
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { useTransform, useScroll } from 'framer-motion'
import { behanceImages } from '@/app/data/data'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'

// Import components 
import Button from '@/components/button/Button'
import BehanceGalletyColumn from './BehanceGalletyColumn'


const Behance = () => {
  const gallery = useRef(null)
  const { height } = useWindowDimensions()

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  return (
    <section className={styles.behance__section}>
      <h2 className={styles.behance__title}>behance works</h2>
      <div className={styles.behance__gallery} ref={gallery}>
          <BehanceGalletyColumn behanceImages={[behanceImages[0], behanceImages[1], behanceImages[2]]} y={y}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[3], behanceImages[4], behanceImages[5]]} y={y2}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[6], behanceImages[7], behanceImages[8]]} y={y3}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[9], behanceImages[10], behanceImages[11]]} y={y4}/>
      </div>
      <div className={styles.behance__btnWrapper}>
        <div className={styles.behnace__btnContainer}>
          <Button
            text='go to behance'
            buttonType='outlined'
          />
        </div>
      </div>
    </section>
  )
}

export default Behance