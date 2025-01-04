// Imports 
import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'

const BehanceGalletyColumn = ({ behanceImages }) => {
  return (
    <div className={styles.behance__column}>
        {
            behanceImages.map((src, i) => {
                return <div key={i} className={styles.behance__columnContainer}>
                    <Image 
                        src={`${src}`}
                        alt='behance-image'
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
            })
        }
    </div>
  )
}

export default BehanceGalletyColumn