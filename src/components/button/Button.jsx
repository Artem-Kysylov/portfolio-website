// Imports 
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

const Button = ({ text, style, buttonType, type }) => {
    const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
    })

  return (
    <button 
        className={buttonClass}
        type={type}
        style={style}
    >
        {text}
    </button>
  )
}

export default Button