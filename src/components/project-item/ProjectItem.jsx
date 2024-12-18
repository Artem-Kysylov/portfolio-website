// Imports
import React from 'react'
import Image from "next/image"
import classNames from 'classnames'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const ProjectItem = ({ itemType }) => {
  const itemClass = classNames(styles.project__item, {
    [styles.dark]: itemType === 'dark',
    [styles.light]: itemType === 'light',
  })

  return (
    <div className={itemClass}>
      <div className={styles.project__itemContent}>
        <h4>Project 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Id ac egestas lorem eget enim volutpat convallis in. Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. Consectetur venenatis fermentum bibendum ut amet.</p>
        <Button
          text='project link'
          buttonType='outlined' 
        />
      </div>

      <Image
        src='/project-1-img.png'
        alt='image'
        width={620}
        height={376}
      />
    </div>
  )
}

export default ProjectItem