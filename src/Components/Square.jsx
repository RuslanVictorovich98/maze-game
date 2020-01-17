import React from 'react'
import styles from './MainComponent.module.scss'

const Square = ({id, data, checkCurrentSquare}) => {

  let main = 0
  const [one, setOne] = React.useState(false)

  const test = () => {
    checkCurrentSquare(id, !one)
    setOne(!one)
  }

  // return <div className={styles.square} onClick={() => test()}>{id} {data.current ? 'CURRENT' : null}</div>
  return <div className={styles.square} onClick={() => test()}>{id} {one ? 'CURRENT' : null}</div>
}

export default Square
