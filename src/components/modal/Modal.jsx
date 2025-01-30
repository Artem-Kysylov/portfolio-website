// Imports 
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'
import { scaleAnimation } from '../../app/anim/anim'


const Modal = ({ modal, servicesItems }) => {
    const { active, index } = modal

    const modalContainer = useRef(null)
    const cursor = useRef(null)
    const cursorLabel = useRef(null)

    useEffect( () => {
        //Move Container    
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})    
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    
        //Move cursor    
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})    
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    
        //Move cursor label    
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})    
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
       
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;   
          xMoveContainer(pageX)  
          yMoveContainer(pageY)   
          xMoveCursor(pageX)   
          yMoveCursor(pageY)    
          xMoveCursorLabel(pageX)    
          yMoveCursorLabel(pageY)
    
        })    
      }, [])

  return (
    <>
        <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial='initial'
            animate={active ? 'enter' : 'closed'}
            className={styles.modalContainer}
        >
            <div style={{top: index * -100 + '%'}} className={styles.modalSlider}>
                {
                    servicesItems.map((item, index) => {
                    const { src, title } = item

                    return (
                        <div className={styles.modal} key={`modal_${index}`}>
                            <Image
                                src={`/${src}`}
                                width={335}
                                height={0}
                                alt={title}
                            />
                        </div>
                    )
                    })
                }
            </div>
        </motion.div>
        <motion.div 
            ref={cursor} 
            className={styles.cursor} 
            variants={scaleAnimation} 
            initial='initial' 
            animate={active ? "enter" : "closed"}
        >            
        </motion.div>           
    </>    
  )
}

export default Modal