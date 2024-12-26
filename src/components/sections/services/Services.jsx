// Imports 
import React from 'react'
import styles from './styles.module.css'
import { servicesItems } from '../../../app/data/data'

// Import components 
import Button from '@/components/button/Button'

const Services = () => {
  return (
    <section className={styles.services__section}>
        <div className="container">
            <h2 className={styles.services__title}>services</h2>
            <div className={styles.services__wrapper}>
                <div className={styles.services__contentWrapper}>
                    <p className={styles.services__contentWrapperText}>
                        Lorem ipsum dolor sit amet consectetur. 
                        Id ac egestas lorem eget enim volutpat convallis in. 
                        Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. 
                        Consectetur venenatis fermentum bibendum ut amet.
                    </p>

                    <Button
                        text='let`s create a project'
                        buttonType='filled'
                    />
                </div>

                <ul className={styles.services__itemsList}>
                    {servicesItems.map((item) => (
                        <li className={styles.itemList__item} key={item.id}>
                            <span className={styles.itemList__itemNumber}>{item.number}</span>
                            <h3>{item.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Services