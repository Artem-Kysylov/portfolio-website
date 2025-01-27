'use client'
// Imports 
import React from 'react'
import styles from './styles.module.css'

const ServiceItem = ({ index, number, title, setModal }) => {
  return (
    <div 
        className={styles.service__item}
        onMouseEnter={() => {setModal({active: true, index})}}
        onMouseLeave={() => {setModal({active: false, index})}}
    >
        <span className={styles.service__itemNumber}>{number}</span>
        <h3>{title}</h3>
    </div>
  )
}

export default ServiceItem