import React from 'react'
import styles from './MainComponent.module.scss'
import Header from './Header'
import TopSquare from './TopSquare'
import Square from "./Square";

const MainComponent = () => {

  const hods = ['up', 'down', 'left', 'right']
  const latters = ['A', 'B', 'C']
  const movesData = []
  const nums = [1, 2, 3]
  const square = [
    {id: 1, start: false, finish: false, current: false},
    {id: 2, start: false, finish: false, current: false},
    {id: 3, start: false, finish: false, current: false},
    {id: 4, start: false, finish: false, current: false},
    {id: 5, start: false, finish: false, current: false},
    {id: 6, start: false, finish: false, current: false},
    {id: 7, start: false, finish: false, current: false},
    {id: 8, start: false, finish: false, current: false},
    {id: 9, start: false, finish: false, current: false},
  ]

  React.useEffect(() => {
    if (movesData.length < 1) {
      setInterval(() => {
        createPools()
      }, 1)
    }

  })

  const createPools = () => {
    if (movesData.length > 9) return
    let start = 5
    let interval

    if (start === 1 || start === 2 || start === 3)
    interval = Math.random() * (3 - 0) + 0;
      interval = Math.round(interval)
    movesData.push(hods[interval])
    if (movesData.length === 10) console.log(movesData)

  }

  const checkCurrentSquare = (id, check) => {
    console.log('WORK:  ' + id)
    let item = square.find(data => data.id === id)
    item.current = check
    let num
    if ('down') {
      num = id + 3
    }

    console.log('NUM: ' + num)
    console.log(square)
  }

  const move = (params, data) => {
    if (params === hods[0]) return data - 3 //up
    if (params === hods[1]) return data + 3 //down
    if (params === hods[2]) return data + 1 //left
    if (params === hods[3]) return data - 1 //right
  }



    return (
        <div className={styles.mainComponent} onClick={()=> alert(move('down', 5)) }>
            <Header />
            <div className={styles.TopSquareContainer}>
              {latters.map((data, i) => {
                    return <TopSquare key={i} data={data} />
                })}
            </div>

          <div style={{display: 'flex', background: 'aqua'}}>
            <div style={{background: 'aqua'}}>
          <div className={styles.LeftSquareContainer}>
            {nums.map((data, i) => {
              return <TopSquare key={i} data={data} />
            })}
          </div>
            </div>
            <div>
          <div style={{display: 'flex', background: 'aqua'}}>
            { square.map((data, i) => {
              return(
                  <Square key={i}  id={data.id} data={data} checkCurrentSquare={checkCurrentSquare} />
              )
            })}
          </div>

          </div>
          </div>
        </div>
    )
}

export default MainComponent