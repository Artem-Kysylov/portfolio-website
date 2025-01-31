'use client'
// Imports 
import React from 'react'
import styles from './styles.module.css'
import { useForm } from "react-hook-form"

// Import components 
import Button from '@/components/button/Button'
import Popup from '@/components/popup/Popup'

// Formspree url https://formspree.io/f/mjkgrybj

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div className={styles.form__container}>
    {/* <Popup/> */}
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
    </div>
  )
}

export default ContactForm