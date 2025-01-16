// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

const About = () => {
  return (
    <section className={styles.about__section} id='about'>
      <div className='container'>
        <h2 className={styles.about__title}>about me</h2>
        <div className={styles.about__contentWrapper}>
          <div className={styles.about__contentWrapperImages}>
            <Image
              className={styles.about__img1}
              src='/about-1-img.png'
              width={339}
              height={453}
              layout='intrinsic'
              alt='Artem Kysylov image-1'
              style={{objectFit: "cover"}}
              loading="lazy"
            />
            <Image
              className={styles.about__img2}
              src='/about-2-img.png'
              width={225}
              height={184}
              layout='intrinsic'
              alt='Artem Kysylov image-2'
              style={{objectFit: "cover"}}
              loading="lazy"
            />
            <Image
              className={styles.about__img3}
              src='/about-3-img.png'
              width={177}
              height={237}
              layout='intrinsic'
              alt='Artem Kysylov image-3'
              style={{objectFit: "cover"}}
              loading="lazy"
            />
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
      </div>
    </section>
  )
}

export default About