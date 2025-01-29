// Imports 
import React from 'react'
import { useScroll, useTransform } from 'framer-motion'

export const useParallax = () => {

    const { scrollYProgress } = useScroll()
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0px", "-3000px"])

  return yTransform
}
