// Imports
import React from 'react'
import Image from "next/image"
import classNames from 'classnames'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const ProjectItem = ({ title, description, image, background  }) => {


  return (
    <div 
      style={{ backgroundColor: background }}
      className={classNames(
        styles.project__item,
        { [styles.dark]: background === 'var(--light-black)',
          [styles.light]: background === 'var(--light)'
        }
      )}
    >
      <div className={styles.project__itemContent}
      
      >
        <h4>{title}</h4>
        <p>{description}</p>
        <Button
          text='project link'
          buttonType='outlined' 
        />
      </div>

      <Image
        src={image}
        alt={title}
        width={620}
        height={376}
      />
    </div>
  )
}

export default ProjectItem