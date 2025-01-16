// Imports 
import React from 'react'
import styles from './styles.module.css'
import { behanceImages } from '@/app/data/data'

// Import components 
import Button from '@/components/button/Button'
import BehanceGalletyColumn from './BehanceGalletyColumn'

// helpful link
// https://blog.olivierlarose.com/tutorials/smooth-parallax-scroll

const Behance = () => {
  return (
    <section className={styles.behance__section}>
      <h2 className={styles.behance__title}>behance works</h2>
      <div className={styles.behance__gallery}>
        <div className={styles.behance__galleryWrapper}>
          <BehanceGalletyColumn behanceImages={[behanceImages[0], behanceImages[1], behanceImages[2]]}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[3], behanceImages[4], behanceImages[5]]}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[6], behanceImages[7], behanceImages[8]]}/>
          <BehanceGalletyColumn behanceImages={[behanceImages[9], behanceImages[10], behanceImages[11]]}/>
        </div>
      </div>
      <div className={styles.behance__btnWrapper}>
        <div className={styles.behnace__btnContainer}>
          <Button
            text='go to behance'
            buttonType='outlined'
          />
        </div>
      </div>
    </section>
  )
}

export default Behance