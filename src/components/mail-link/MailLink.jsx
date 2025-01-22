// Imports 
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const MailLink = () => {
  return (
    <Link href={'mailto: kysylyov.artem@gmail.com'}>
      <div className={styles.mail__wrapper}>
        <p className={styles.mail__link}>kysylyov.artem@gmail.com</p>
      </div>

    </Link>
  )
}

export default MailLink