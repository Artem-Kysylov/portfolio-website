// Imports 
import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './styles.module.css'

const Button = ({ text, style, buttonType, type }) => {
    const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
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