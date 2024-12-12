// Imports 
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import styles from './styles.module.css'

const SocilasIcon = ({ icon: Icon, link, title}) => {
  return (
    <Link 
        href={link}
        target='_blank'
        rel='noopener noreferrer'
    >
        <Icon className={styles.socilas__icon} aria-label={title}/>
    </Link>
  )
}

export default SocilasIcon