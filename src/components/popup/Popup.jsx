// Imports 
import React from 'react'
import { IoCloseOutline } from "react-icons/io5"
import { GoCheckCircleFill } from "react-icons/go"
import styles from './styles.module.css'

const Popup = () => {
  return (
    <div className={styles.popup__wrapper}>
        <div className={styles.popup__item}>
            <button className={styles.popup__btn}>
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
}

export default Popup