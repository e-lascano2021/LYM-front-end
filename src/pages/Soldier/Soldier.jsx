import { useParams } from "react-router-dom"
import { useEffect, useState} from 'react'
import { getSoldier } from "../../services/armyService.js"
import styles from "./Soldier.module.css"

const Soldier = () => {
  let { id } = useParams()
  let [soldier, setSoldier] = useState(null)

  useEffect(() => {
    const fetchSoldier = async () => {
      const soldierData = await getSoldier(id)
      setSoldier(soldierData)
    }
    fetchSoldier()
  }, [id])

  if(!soldier) return <h1>Loading ...</h1>
  if(soldier.err) return <h1>{soldier.err}</h1>

  return (
    <main className={styles.main}>

      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={soldier.image} alt={`${soldier.name}`}></img>
          <h2>{soldier.name}</h2>
        </div>

        <div className={styles.headerInfo}>
          <h6>Love Types: </h6>
          <p>{soldier.loveTypes?.join(", ")}</p>
          <br/>
          <h6>Love Languages: </h6>
          <p>{soldier.loveLanguages?.join(", ")}</p>
          <br/>
          <h6>Brownie Points:</h6>
          <p>{soldier.currentPoints}/{soldier.totalPoints}</p>
        </div>
      </div>

    </main>
  )
}

export default Soldier