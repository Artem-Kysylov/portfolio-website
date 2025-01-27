// Imports 
import React, { useRef } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { useHandleMouse } from '@/hooks/useHandleMouse'

const Button = ({ text, style, buttonType, type }) => {
  const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
        [styles.outlinedDark]: buttonType === 'outlinedDark',
  })

  return (
      <Link 
        href='/'
        style={{width: '100%'}}
      >
        <button 
            className={buttonClass}
            type={type}
            style={style}
        >
            {text}
        </button>
      </Link>
  )
}

export default Button