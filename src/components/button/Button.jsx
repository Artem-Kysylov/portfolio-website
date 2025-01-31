// Imports 
import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './styles.module.css'

const Button = ({ text, style, buttonType, type, href, target, rel }) => {
  const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
        [styles.outlinedDark]: buttonType === 'outlinedDark',
  })

  const content = (
    <button className={buttonClass} type={type} style={style}>
      {text}
    </button>
  )

  return href ? (
    <Link href={href ?? "#"} style={{ width: '100%' }} target={target} rel={rel}>
      {content}
    </Link>
  ) : (
    content
  )
}

export default Button