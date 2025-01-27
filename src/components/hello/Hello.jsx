'use client'
// Imports 
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { helloWords } from '../../app/data/data'
import { opacity } from '../../app/anim/anim'

const Hello = () => {
    const [index, setIndex] = useState(0)

    useEffect( () => {
        const timeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % helloWords.length)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [index])

  return (
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
  )
}

export default Hello