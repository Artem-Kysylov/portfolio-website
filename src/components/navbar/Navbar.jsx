// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className={styles.nav__inner}>
          <Image
            src="/logo.svg"
            width={199}
            height={21}
            alt="Logo"
          />

          <ul></ul>
          
          <ul></ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar