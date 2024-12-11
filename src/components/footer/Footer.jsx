// Imports 
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import styles from './styles.module.css'
import { navItems } from '../../app/data/navData'
import { socialsItems } from '../../app/data/navData'

// Import components 
import MailLink from '@/components/mail-link/MailLink'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__top}>
          <ul className={styles.footer__topNavList}>
              {
                navItems.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={item.anchorLink}
                      className={styles.footer__topNavList} 
                    >
                        {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>

            <MailLink/>
        </div>

        <div className={styles.footer__bottom}>
          <span className={styles.footer__bottomText}>All right reserved. Designed and developed by Artem Kysylov</span>
          <ul className={styles.footer__bottomSocialsList}>
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
                        <Icon className={styles.footer__bottomSocialsListIcon} aria-label={item.title}/>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer