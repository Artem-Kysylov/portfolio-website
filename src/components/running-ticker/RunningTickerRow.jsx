'use client'
// Imports 
import React from 'react'
import styles from './styles.module.css'
import { useTransform, motion } from 'framer-motion';
import Image from 'next/image'

const RunningTickerRow = ({ title, image, left, directionRow, progress }) => {
  const direction = directionRow == 'left' ? -1 : 1
  const translateX = useTransform(progress, [0, 1], [150 * direction, -150 * direction])

  return (
    <motion.div style={{x: translateX, left: left}} className={styles.runningTicker__row}>
      <span className='headline'>{title}</span>
      <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
       <span className='headline__stroke'>{title}</span>
       <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
      <span className='headline'>{title}</span>
      <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
      <span className='headline__stroke'>{title}</span>
    </motion.div>
  )
}

export default RunningTickerRow