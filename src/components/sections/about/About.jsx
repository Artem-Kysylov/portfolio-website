// Imports 
import React, { useRef } from 'react'
import Image from "next/image"
import styles from './styles.module.css'
import { aboutImages } from '../../../app/data/data'
import { useScroll, useTransform, motion } from 'framer-motion'

const About = () => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50])
  const md = useTransform(scrollYProgress, [0, 1], [0, -150])
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250])

  return (
    <section className={styles.about__section} id='about'>
      <div className='container'>
        <h2 className={styles.about__title}>about me</h2>
        <div className={styles.about__contentWrapper} ref={container}>
          <div className={styles.about__contentWrapperImages}>
            {
              aboutImages.map((image, index) => {
                const y = index === 0 ? sm : index === 1 ? md : lg

                return (
                  <motion.div style={{ y }} key={`i_${index}`}>
                    <Image 
                      className={styles[image.className]}                                       
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      layout='intrinsic'
                      alt={image.alt}
                      style={{objectFit: "cover"}}
                      loading="lazy"
                    />
                  </motion.div>
                )
              })
            }
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
