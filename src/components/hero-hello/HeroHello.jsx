'use client'
// Imports 
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { helloWords } from '../../app/data/data'
import { opacity } from '../../app/anim/anim'
import { useParallax } from '@/hooks/useParallax'

const HeroHello = () => {
    const [index, setIndex] = useState(0)
    const  yTransform  = useParallax()
    

    useEffect( () => {
        const timeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % helloWords.length)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [index])

  return (
        <motion.div 
            className={styles.hero__hello} 
            style={{ y: yTransform }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <motion.p 
                key={index}
                className='headline__stroke' 
                variants={opacity} 
                initial='initial' 
                animate='enter'
                exit='exit' 
            >
                {helloWords[index]}
            </motion.p>

            <h1 className={styles.hero__helloText}>I`m Artem, UI/UX designer and web developer based in Odessa, Ukraine</h1>
        </motion.div>
  )
}

export default HeroHello
