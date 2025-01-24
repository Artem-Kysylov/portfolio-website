'use client'
// Imports 
import React, { useState } from 'react'

export const useHandleMouse = (ref) => {
    const [position, setPosition] = useState({ x: 0, y: 0})

    const handleMouse = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }
    
    const reset = () => {
        setPosition({x:0, y:0})
    }
    
    const { x, y } = position

  return { position, handleMouse, reset }
}
