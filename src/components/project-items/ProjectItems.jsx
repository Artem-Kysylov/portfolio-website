// Imports
import React from 'react'
import styles from './styles.module.css'
import { projectItems } from '../../app/data/data'

// Import components 
import ProjectItem from '@/components/project-item/ProjectItem'

const ProjectItems = () => {
  return (
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
  )
}

export default ProjectItems