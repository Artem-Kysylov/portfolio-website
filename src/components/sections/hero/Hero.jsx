// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'
import Hello from '@/components/hello/Hello'

const Hero = () => {
  return (
    <section className={styles.hero__section}>
        <div className="container">
            <div className={styles.hero__hello}>
              <Hello/>
                <h1 className={styles.hero__helloText}>I`m Artem, UI/UX designer and web developer based 
                in Odessa, Ukraine</h1>
            </div>

            <div className={styles.hero__titles}>
              <p className={`headline ${styles.hero__titlFirst}`}>ui/ux design</p>
              <p className={`headline ${styles.hero__titleSecond}`}>web development</p>
              <div className={styles.hero__titlesBtnWrapper}>
                <p className={`headline ${styles.hero__titleThird}`}>digital products</p>
                <Button
                  text='let`s create a project'
                  buttonType='filled'                  
                />
              </div>
            </div>
            <Image
              className={styles.hero__img}
              src='/hero-img.png'
              width={835}
              height={834}
              alt='Artem Kysylov'
              loading="lazy"
            />
        </div>
    </section>
  )
}

export default Hero