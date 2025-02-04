'use client'
// Imports 
import React, { useState } from 'react'
import styles from './styles.module.css'
import { useForm } from "react-hook-form"

// Import components 
import Button from '@/components/button/Button'
import Popup from '@/components/popup/Popup'


const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/mjkgrybj', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        }
      })

      if(response.ok) {
        setShowPopup(true)
        reset()
      } else {
        alert('Error while sending a form')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


  return (
    <div className={styles.form__container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__inputsWrapper}>
          <input className={styles.form__input} type="text" placeholder='Full name' {...register("fullName", { required: true, maxLength: 20 })}/>
          {errors.fullName && <span className={styles.form__errorMessage}>This field is required</span>}
          <input className={styles.form__input} type="email" placeholder='Email' {...register("email", { required: true })}/>
          {errors.email && <span className={styles.form__errorMessage}>This field is required</span>}
          <select className={styles.form__input} name="Service Type" defaultValue={'A'} {...register("serviceType")}>
            <option value="A">Branding Identity</option>
            <option value="B">UI/UX Design</option>
            <option value="C">Website Development</option>
            <option value="D">App Development</option>
          </select>
          <textarea className={styles.form__textArea} placeholder='Comments' rows='1' {...register("comments")}></textarea>
        </div>
        <span className={styles.form__hint}>All fields are required</span>
          <Button
              text='submit'
              buttonType='filled'
              type='submit'  
          />
      </form>
      {showPopup && <Popup/>}
    </div>
  )
}

export default ContactForm