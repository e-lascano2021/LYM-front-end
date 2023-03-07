import { Link } from 'react-router-dom'
import SoldierCard from "../../components/SoldierCard/SoldierCard"
import styles from './Army.module.css'
const Army = (props) => {
  return (
    <main>
      <div className={styles.header}>
        <h1>LoveArmy</h1>
        <Link to='/loveArmy/new'>
          <button>Add Soldier</button>
        </Link>
      </div>

      <br/>

      {props.army.map((soldier,idx) => 
        <SoldierCard key={idx} soldier={soldier}/>
      )}
    </main>
  )
}

export default Army