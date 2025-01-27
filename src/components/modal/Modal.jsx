// Imports 
import React, { useRef } from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { scaleAnimation } from '../../app/anim/anim'


const Modal = ({ modal, servicesItems }) => {
    const { active, index } = modal

  return (
    <motion.div
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className={styles.modalContainer}
    >
        <div style={{top: index * -100 + '%'}} className={styles.modalSlider}>
            {
                // servicesItems.map((item, index) => {

                // })
            }
        </div>
    </motion.div>
  )
}

export default Modal