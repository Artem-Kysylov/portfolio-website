// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import ProjectItems from '@/components/project-items/ProjectItems'

const Projects = () => {
  return (
    <section className={styles.projects__section}>
      <div className='container'>
        <h2 className={styles.projects__title}>Projects</h2>
        <ProjectItems/>
      </div>
    </section>
  )
}

export default Projects