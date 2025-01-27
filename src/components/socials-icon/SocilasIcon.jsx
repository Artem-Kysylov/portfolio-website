'use client'
// Imports 
import React, { useRef }  from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { useHandleMouse } from '@/hooks/useHandleMouse'

// Import icons 
import { FaBehance } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa6"

const icons = {
  FaBehance,
  IoLogoGithub,
  FaLinkedinIn,
}

const SocilasIcon = ({ icon, link, title }) => {
  const ref = useRef(null)
  const { position, handleMouse, reset } = useHandleMouse(ref)

  const { x, y } = position

  const Icon = icons[icon]

  return (
    <motion.div
      style={{ position: 'relative'}}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1}}
    >
      <Link 
          href={link}
          target='_blank'
          rel='noopener noreferrer'
      >
          <Icon className={styles.socilas__icon} aria-label={title}/>
      </Link>
    </motion.div>
  )
}

export default SocilasIcon