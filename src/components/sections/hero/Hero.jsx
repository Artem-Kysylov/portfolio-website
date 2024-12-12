// Imports 
import React from 'react'
import styles from './styles.module.css'

const Hero = () => {
  return (
    <section>
        <div className="container">
            <div className={styles.hero__hello}>
                <p className='headline__stroke'>Hello</p>
            </div>
        </div>
    </section>
  )
}

export default Hero