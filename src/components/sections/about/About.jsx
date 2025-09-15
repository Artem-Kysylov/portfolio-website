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
          <div className={styles.about__images}>
            {
              aboutImages.map((image, index) => {
                const y = index === 0 ? sm : index === 1 ? md : lg

                return (
                  <motion.div style={{ y }} key={`i_${index}`} className={styles.about__imgContainer}>
                    <Image 
                      src={image.src}
                      width={image.width}
                      height={image.height}
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
              Hello! I'm Artem, a passionate designer with 5 years of experience and a developer with 3 years of expertise. I'm hardworking, goal-oriented, and detail-focused, always striving to create clean, intuitive, and aesthetically functional interfaces. My love for typography and minimalistic design drives my work, and I’m constantly learning to stay ahead of the curve. 
            </p>
            <p>
              On the development side, I’m proficient in HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, SCSS, Supabase, and Firebase. I leverage artificial intelligence to accelerate code writing and streamline workflows. Additionally, I have experience setting up MCP servers, showcasing my versatility in technical setups.
            </p>
            <p>
              Each project is an opportunity for growth, and I stay aligned with the latest trends to deliver modern, impactful solutions. Feel free to reach out for examples of my work!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
