'use client'
// Imports 
import React, { useState, useEffect } from 'react'

export const useWindowDimensions = () => {
      const [dimension, setDimension] = useState({ width: 0, height: 0 })

      useEffect(() => {
        const updateDimensions = () => {
            setDimension({
                width: window.innerWidth, 
                height: window.innerHeight
            })
          }
          updateDimensions()

          window.addEventListener("resize", updateDimensions)

          return () => {
            window.removeEventListener("resize", updateDimensions);
          }
      }, [])
      
  return dimension  
}
