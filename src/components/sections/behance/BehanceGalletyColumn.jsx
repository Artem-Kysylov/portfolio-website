// Imports 
import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const BehanceGalletyColumn = ({ behanceImages, y }) => {
  return (
    <motion.div className={styles.behance__column} style={{ y }}>
        {
            behanceImages.map((src, i) => {
                return (
                    <div className={styles.behance__imgContainer} key={i}>
                        <Image 
                            src={`${src}`}
                            alt='behance-image'
                            fill
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 768px) 50vw, (max-width: 1000px) 33vw, 25vw"
                            quality={90}
                        />
                    </div>
                )
            })
        }
    </motion.div>
  )
}

export default BehanceGalletyColumn