import React from 'react'
import styles from './MainComponent.module.scss'

const TopSquare = ({data}) => {
    return Number.isInteger(data) ? <h3 className={styles.leftSquare}>{data}</h3> : <h3 className={styles.topSquare}>{data}</h3>
}

export default TopSquare