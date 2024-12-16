// Imports 
import React from 'react'
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
              <span className='headline'>ui/ux design</span>
              <span className='headline'>web development</span>
              <div className={styles.hero__titlesBtnWrapper}>
                <span className='headline'>digital products</span>
                <Button
                  text='let`s create a project'
                  buttonType='filled'                  
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero