// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import RunningTickerRow from './RunningTickerRow'

const runningTickerItems = {
  title: 'say hello to me',
  image: '/emoji-hand-img.png'
}

const RunningTicker = () => {
  return (
    <div className={styles.runningTicker__container}>
        <RunningTickerRow title={runningTickerItems .title} image={runningTickerItems.image} left={'-40%'}/>
        <RunningTickerRow title={runningTickerItems.title} image={runningTickerItems.image} left={'-25%'}/>
    </div>
  )
}

export default RunningTicker