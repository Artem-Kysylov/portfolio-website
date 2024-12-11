// Imports 
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import styles from './styles.module.css'
import { navItems } from '../../app/data/navData'
import { socialsItems } from '../../app/data/navData'

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

          <ul className={styles.nav__itemsList}>
            {
              navItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.anchorLink}
                    className={styles.nav__itemListLink} 
                  >
                      {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          
          <ul className={styles.nav__socialsList}>
            {
              socialsItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Icon className={styles.nav__socialsListIcon} aria-label={item.title}/>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar