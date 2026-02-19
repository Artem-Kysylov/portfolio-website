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
              I’m a Design Engineer with 5+ years in UI/UX and 3 years in engineering. I bridge the gap between high-end design and production-ready code, building clean, high-performance interfaces where motion and function are as vital as the visuals.
            </p>
            <p>
              On the engineering side, I build scalable applications using React, Next.js, TypeScript, and Supabase. I don’t just "write code" — I architect experiences. My workflow is deeply integrated with Artificial Intelligence and custom MCP server setups, allowing me to build and ship complex products like Spendly and TableXport with incredible velocity and technical precision.
            </p>
            <p>
              I thrive in Founding Designer roles, taking products from a blank canvas in Figma to live deployments on Vercel. My focus is on shipping modern, scalable, and AI-integrated solutions that deliver real value. Let’s build your next big idea together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
