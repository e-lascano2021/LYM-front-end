import { useState } from 'react'
import { Link } from 'react-router-dom'
import SoldierCard from '../../components/SoldierCard/SoldierCard'
import styles from './Army.module.css'
const Army = (props) => {
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    const search = e.target.value
    setInput(search)
  }

  const filteredArmy = props.army.filter((soldier) => {
    if (input === "") {
      return soldier
    } else {
      return soldier.name.toLowerCase().includes(input.toLowerCase())
    }
  })

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>LoveArmy</h1>
        <Link to='/loveArmy/new'>
          <button>Add Soldier</button>
        </Link>
      </div>
      <br/>

      <div>
        <label> Search for soldier:</label>
        <input onChange={handleInput}/>
      </div>



      <div className={styles.cardContainer}>
        {filteredArmy.map((soldier,idx) => 
          <SoldierCard key={idx} soldier={soldier}/>
        )}
      </div>

    </main>
  )
}

export default Army