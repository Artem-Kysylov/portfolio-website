// Imports
import React from 'react'
import Image from "next/image"
import classNames from 'classnames'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const ProjectItem = ({ title, description, image, background, index  }) => {
  return (
    <div className={styles.project__itemContainer}>
      <div 
        style={{ backgroundColor: background, top:`calc(-5vh + ${index * 25}px)` }}
        className={classNames(
          styles.project__item,
          { [styles.dark]: background === 'var(--light-black)',
            [styles.light]: background === 'var(--light)'
          }
        )}
      >
        <div className={styles.project__itemContent}>
          <h4>{title}</h4>
          <p>{description}</p>
          <Button
            text='project link'
            buttonType = {background === 'var(--light-black)' ? 'outlined' : 'outlinedDark'}
          />
        </div>

        <Image
          src={image}
          alt={title}
          width={620}
          height={376}
          layout='intrinsic'
        />
      </div>
    </div>
  )
}

export default ProjectItem