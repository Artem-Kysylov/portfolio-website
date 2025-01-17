'use client'
// Imports 
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { useScroll } from 'framer-motion'

// Import components 
import RunningTickerRow from './RunningTickerRow'

const runningTickerItems = {
  title: 'say hello to me',
  image: '/emoji-hand-img.png'
}

const RunningTicker = () => {
  const container = useRef()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <div className={styles.runningTicker__container} ref={container}>
        <RunningTickerRow title={runningTickerItems .title} image={runningTickerItems.image} directionRow={'left'}  left={'-40%'} progress={scrollYProgress}/>
        <RunningTickerRow title={runningTickerItems.title} image={runningTickerItems.image} directionRow={'right'}  left={'-25%'} progress={scrollYProgress}/>
    </div>
  )
}

export default RunningTicker