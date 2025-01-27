'use client'
// Imports 
import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { useHandleMouse } from '@/hooks/useHandleMouse'


const NavLink = ({ anchorLink, title }) => {
  const ref = useRef(null)
  const { position, handleMouse, reset } = useHandleMouse(ref)

  const { x, y } = position

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
          href={anchorLink}
          className={styles.nav__link} 
      >
          {title}
      </Link>
    </motion.div>
  )
}

export default NavLink


