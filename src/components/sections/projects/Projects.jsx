// Imports 
import React from 'react'
import styles from './styles.module.css'
import { projectItems } from '../../../app/data/data'

// Import components 
import ProjectItem from '@/components/project-item/ProjectItem'

const Projects = () => {
  return (
    <section className={styles.projects__section}>
      <div className='container'>
        <h2 className={styles.projects__title}>Projects</h2>
        <div className={styles.project__itemsWrapper}>
          {
            projectItems.map((project) => (
              <ProjectItem
                key={project.id}
                {...project}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects