'use client'
// Imports 
import React from 'react'
import styles from './styles.module.css'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { projectItems } from '../../../app/data/data'

// Import components 
import ProjectItem from '@/components/project-item/ProjectItem'

const Projects = () => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section className={styles.projects__section} id='projects'>
        <h2 className={styles.projects__title}>Projects</h2>
        <div className={styles.projects__container} ref={container}>
          {
            projectItems.map((project, index) => {
              const targetScale = 1 - ( (projectItems.length - index) * 0.05)
              return (
                <ProjectItem
                  key={`p_${index}`}
                  {...project}
                  index={index}
                  progress={scrollYProgress}
                  range={[index * .25, 1]}
                  targetScale={targetScale}
                />
              )
            })
          }
        </div>
    </section>
  )
}

export default Projects