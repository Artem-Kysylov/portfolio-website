'use client'
// Imports 
import React, { useState } from 'react'
import styles from './styles.module.css'
import { servicesItems } from '../../../app/data/data'

// Import components 
import ServiceItem from '@/components/service-item/ServiceItem'
import Modal from '@/components/modal/Modal'

const Services = () => {
    const [modal, setModal] = useState({ active: false, index: 0})

  return (
    <section className={styles.services__section} id='services'>
        <div className="container">
            <h2 className={styles.services__title}>services</h2>
                <div className={styles.services__itemsList}>
                    {servicesItems.map((item, index) => (
                        <ServiceItem
                            key={index}
                            title={item.title}
                            number={item.number}
                            setModal={setModal}
                        />
                    ))}
                </div>
                <Modal
                    modal={modal}
                    services={servicesItems}
                />
        </div>
    </section>
  )
}

export default Services