'use client'
// Imports 
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5"
import { GoCheckCircleFill } from "react-icons/go"
import styles from './styles.module.css'

const Popup = () => {
  const [popup, setPopup] = useState(true)

  const handlePopup = () => {
    setPopup(!popup)
  }

  return (
    popup && (
      <div className={styles.popup__wrapper}>
          <div className={styles.popup__item}>
              <button className={styles.popup__btn} onClick={handlePopup}>
                  <IoCloseOutline size={24}/>
              </button>
              <div className={styles.popup__content}>
                  <GoCheckCircleFill size={40}/>
                  <h4>thank you!</h4>
                  <p>I will contact to you soon as possible!</p>
              </div>
          </div>
      </div>
    )
  )
}

export default Popup