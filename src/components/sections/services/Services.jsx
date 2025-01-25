// Imports 
import React from 'react'
import styles from './styles.module.css'
import { servicesItems } from '../../../app/data/data'

// Import components 
import Button from '@/components/button/Button'

const Services = () => {
  return (
    <section className={styles.services__section} id='services'>
        <div className="container">
            <h2 className={styles.services__title}>services</h2>
                <ul className={styles.services__itemsList}>
                    {servicesItems.map((item) => (
                        <li className={styles.itemList__item} key={item.id}>
                            <span className={styles.itemList__itemNumber}>{item.number}</span>
                            <h3>{item.title}</h3>
                        </li>
                    ))}
                </ul>
        </div>
    </section>
  )
}

export default Services