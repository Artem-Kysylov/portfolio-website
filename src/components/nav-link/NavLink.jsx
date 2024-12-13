// Imports 
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const NavLink = ({ anchorLink, title }) => {
  return (
    <Link
        href={anchorLink}
        className={styles.nav__link} 
    >
        {title}
    </Link>
  )
}

export default NavLink