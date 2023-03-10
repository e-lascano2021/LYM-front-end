import BrowniePoints from '../BrowniePoints/BrowniePoints'
import styles from './SoldierCard.module.css'

const SoldierCard = ({soldier}) => {
  return(
    <div className={styles.card}>
      <img src={soldier.image} alt='temporary'/>
      <div className={styles.cardInfo}>
        <h2>{soldier.name}</h2>
        <h6>Love Types:</h6>
        <p>{soldier.loveTypes?.join(", ")}</p>
        <br/>
        <h6>Love Languages:</h6>
        <p>{soldier.loveLanguages?.join(", ")}</p>
        <br/>
        <BrowniePoints soldier={soldier}/>
      </div>
    </div>
  )
}

export default SoldierCard