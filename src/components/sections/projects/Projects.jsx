// Imports 
import React from 'react'
import styles from './styles.module.css'
import { projectItems } from '../../../app/data/data'

// Import components 
import ProjectItem from '@/components/project-item/ProjectItem'

const Projects = () => {
  return (
    <section className={styles.projects__section} id='projects'>
        <h2 className={styles.projects__title}>Projects</h2>
        <div className={styles.projects__container}>
          {
            projectItems.map((project, index) => (
              <ProjectItem
                key={`p_${index}`}
                {...project}
                index={index}
              />
            ))
          }
        </div>
    </section>
  )
}

export default Projects