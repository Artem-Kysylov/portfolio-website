// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import RunningTicker from '@/components/running-ticker/RunningTicker'
import ContactForm from '@/components/contact-form/ContactForm'

const Contact = () => {
  return (
    <section>
        <RunningTicker/>
        <ContactForm/>
    </section>
  )
}

export default Contact