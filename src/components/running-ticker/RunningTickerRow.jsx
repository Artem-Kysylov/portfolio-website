// Imports 
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const RunningTickerRow = ({ title, image, left }) => {
  return (
    <div style={{left: left}} className={styles.runningTicker__row}>
      <span className='headline'>{title}</span>
      <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
       <span className='headline__stroke'>{title}</span>
       <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
      <span className='headline'>{title}</span>
      <Image 
        src={image}
        height={72}
        width={72}
        alt={title}
      />
      <span className='headline__stroke'>{title}</span>
    </div>
  )
}

export default RunningTickerRow