// Imports 
import React from 'react'
import styles from './styles.module.css'
import Image from "next/image"
import { navItems } from '../../app/data/data'
import { socialsItems } from '../../app/data/data'

// Import components 
import MailLink from '@/components/mail-link/MailLink'
import NavLink from '@/components/nav-link/NavLink'
import SocilasIcon from '@/components/socials-icon/SocilasIcon'

const Footer = () => {
  return (
    <footer className={styles.footer} style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%'}}>
      <div className={styles.footer__inner}>
        <div className="container">
          <div className={styles.footer__top}>
            <div className={styles.footer__headlineContainer}>
              <Image
                className={styles.footer__headline}
                src='/artem kysylov.svg'
                fill
                alt='Artem Kysylov'
                loading="lazy"
              />
            </div>
            <div className={styles.footer__topContent}>
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
      </div>
    </footer>
  )
}

export default Footer