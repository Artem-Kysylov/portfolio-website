// Imports 
import React from 'react'
import styles from './styles.module.css'

// Import components 
import RunningTickerRow from './RunningTickerRow'

const RunningTicker = () => {
  return (
    <div>
      <RunningTickerRow/>
      <RunningTickerRow/>
    </div>
  )
}

export default RunningTicker