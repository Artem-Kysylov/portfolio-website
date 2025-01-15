'use client'
// Imports 
import React, { useState } from 'react'
import Image from "next/image"
import styles from './styles.module.css'
import { navItems } from '../../app/data/data'
import { socialsItems } from '../../app/data/data'

// Import components 
import NavLink from '@/components/nav-link/NavLink'
import SocilasIcon from '@/components/socials-icon/SocilasIcon'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => setMenu(!menu)
    
  
  return (
    <header>
      <div className="container">
        <div className={styles.nav__inner}>
          <div className={styles.nav__logo}>
            <Image             
              src="/logo.svg"
              width={199}
              height={21}
              alt="Logo"
            />
          </div>
          <nav className={menu ? `${styles.nav__wrapper} ${styles.active}` : styles.nav__wrapper}>
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
          </nav>
          
          <button className={styles.nav__menuBtn} onClick={handleMenu}>
            {menu ? 'Close' : 'Menu'}
          </button>

        </div>
      </div>
    </header>
  )
}

export default Navbar