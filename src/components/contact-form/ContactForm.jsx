// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'

const ContactForm = () => {
  return (
    <form>
        <input type="text" />
        <input type="email" />
        <Button
            text='submit'
            buttonType='filled'  
        />
    </form>
  )
}

export default ContactForm