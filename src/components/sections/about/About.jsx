// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

const About = () => {
  return (
    <section className={styles.about__section}>
      <h2 className={styles.about__title}>about me</h2>
      <div className={styles.about__contentWrapper}>
        <div className={styles.about__contentWrapperImages}>

        </div>
        <div className={styles.about__contentWrapperText}>
          <p>
            Hello! My name is Artem. I have been designing for about 4 years. I am very hardworking, purposeful and responsible, 
            I pay a lot of attention to details. 
            I never stand still, always learning something new. 
            I love creating clean, intuitive interfaces, I love typography and aesthetic functional minimalism. 
          </p>
          <p>
            I develop with each project, I always follow the trends. 
            I am fluent in Figma, Photoshop, Illustrator, After Effect, Principle, Protopie, Invision. 
            I actively study Webflow, upon request I can throw off the work I have made. 
            Have an understanding of HTML/CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About