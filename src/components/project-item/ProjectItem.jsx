'use client'
// Imports
import React, { useRef } from 'react'
import Image from "next/image"
import classNames from 'classnames'
import { useTransform, useScroll, motion } from 'framer-motion'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const ProjectItem = ({ title, description, image, background, index, progress, range, targetScale  }) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className={styles.project__itemContainer} ref={container}>
      <motion.div 
        style={{ backgroundColor: background, scale, top:`calc(-5vh + ${index * 25}px)` }}
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
        <div className={styles.project__imageContainer}>
          <motion.div 
            className={styles.project__imageContainerInner}
            style={{scale: imageScale}}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{objectFit: "cover"}}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectItem