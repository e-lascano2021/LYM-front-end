import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination.jsx'
import SoldierCard from '../../components/SoldierCard/SoldierCard.jsx'
import styles from './Army.module.css'
const Army = (props) => {
  const [input, setInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 4

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
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
  
  const currentCards = filteredArmy.slice(indexOfFirstCard, indexOfLastCard)

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
        {currentCards.map((soldier,idx) => 
          <SoldierCard key={idx} soldier={soldier}/>
        )}
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={filteredArmy.length}
          paginate={paginate}
        />
      </div>
    </main>
  )
}

export default Army