// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import RunningTicker from '@/components/running-ticker/RunningTicker'
import ProjectItems from '@/components/project-items/ProjectItems'

const Projects = () => {
  return (
    <section>
        <RunningTicker/>
        <ProjectItems/>
    </section>
  )
}

export default Projects