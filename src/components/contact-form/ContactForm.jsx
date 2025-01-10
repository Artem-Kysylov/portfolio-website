// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import Button from '@/components/button/Button'
import Popup from '@/components/popup/Popup'

const ContactForm = () => {
  return (
    <div className={styles.form__container}>
    {/* <Popup/> */}
      <form className={styles.form}>
        <div className={styles.form__inputsWrapper}>
          <input className={styles.form__input} type="text" placeholder='Full name'/>
          <input className={styles.form__input} type="email" placeholder='Email'/>
          <select className={styles.form__input} name="Service Type" defaultValue={'A'}>
            <option value="A">Branding Identity</option>
            <option value="B">UI/UX Design</option>
            <option value="C">Website Development</option>
            <option value="D">App Development</option>
          </select>
          <textarea className={styles.form__textArea} placeholder='Comments' rows='1'></textarea>
        </div>
        <span className={styles.form__hint}>All fields are required</span>
          <Button
              text='submit'
              buttonType='filled'  
          />
      </form>
    </div>
  )
}

export default ContactForm