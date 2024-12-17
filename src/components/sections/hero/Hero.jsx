// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className="container">
            <div className={styles.hero__hello}>
                <p className='headline__stroke'>Hello</p>
                <h1 className={styles.hero__helloText}>I`m Artem, UI/UX designer and web developer based 
                in Odessa, Ukraine</h1>
            </div>

            <div className={styles.hero__titles}>
              <p className='headline'>ui/ux design</p>
              <p className={`headline ${styles.hero__titleSecond}`}>web development</p>
              <div className={styles.hero__titlesBtnWrapper}>
                <p className={`headline ${styles.hero__titleThird}`}>digital products</p>
                <Button
                  text='let`s create a project'
                  style={{width: '369px'}}
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
            />
        </div>
    </section>
  )
}

export default Hero