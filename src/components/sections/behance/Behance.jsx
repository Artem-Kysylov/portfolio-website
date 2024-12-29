// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const Behance = () => {
  return (
    <section className={styles.behance__section}>
      <h2>behance works</h2>
      <div></div>
      <Button
        text='go to behance'
        buttonType='filled'
      />
    </section>
  )
}

export default Behance