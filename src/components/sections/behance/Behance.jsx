// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

// helpful link
// https://blog.olivierlarose.com/tutorials/smooth-parallax-scroll

const Behance = () => {
  return (
    <section className={styles.behance__section}>
      <h2 className={styles.behance__title}>behance works</h2>
      <div></div>
      <Button
        text='go to behance'
        buttonType='filled'
      />
    </section>
  )
}

export default Behance