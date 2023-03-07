import BrowniePoints from '../BrowniePoints/BrowniePoints'
import styles from './SoldierCard.module.css'

const SoldierCard = ({soldier}) => {


  return(
    <div className={styles.card}>
      <img src='https://i.imgur.com/8qF3Faq_d.webp?maxwidth=520&shape=thumb&fidelity=high' alt='temporary'/>
      <div className={styles.cardInfo}>
        <h2>{soldier.name}</h2>
        <br/>
        <h6>Love Types:</h6>
        <p>{soldier.loveTypes?.join(", ")}</p>
        <br/>
        <h6>Love Languages:</h6>
        <p>{soldier.loveLanguages?.join(", ")}</p>
      <BrowniePoints soldier={soldier}/>
      </div>
    </div>
  )
}

export default SoldierCard