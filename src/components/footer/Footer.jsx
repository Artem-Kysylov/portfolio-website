// Imports 
import React from 'react'
import styles from './styles.module.css'
import { navItems } from '../../app/data/data'
import { socialsItems } from '../../app/data/data'

// Import components 
import MailLink from '@/components/mail-link/MailLink'
import NavLink from '@/components/nav-link/NavLink'
import SocilasIcon from '@/components/socials-icon/SocilasIcon'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__top}>
          <ul className={styles.footer__topNavList}>
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
            <MailLink/>
        </div>

        <div className={styles.footer__bottom}>
          <span className={styles.footer__bottomText}>All right reserved. Designed and developed by Artem Kysylov</span>
          <ul className={styles.footer__bottomSocialsList}>
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
    </footer>
  )
}

export default Footer