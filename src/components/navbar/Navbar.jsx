// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'
import { navItems } from '../../app/data/navData'
import { socialsItems } from '../../app/data/navData'

// Import components 
import NavLink from '@/components/nav-link/NavLink'
import SocilasIcon from '@/components/socials-icon/SocilasIcon'

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
                  <NavLink
                    anchorLink={item.anchorLink}
                    title={item.title}
                  />
                </li>
              ))
            }
          </ul>
          
          <ul className={styles.nav__socialsList}>
            {
              socialsItems.map((item) => (
                  <li key={item.id}>
                    <SocilasIcon
                      icon={item.icon}
                      link={item.link}
                      title={item.title}
                    />
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar