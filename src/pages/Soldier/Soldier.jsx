import { useParams } from "react-router-dom"
import { useEffect, useState} from 'react'
import { getSoldier } from "../../services/armyService.js"
import styles from "./Soldier.module.css"
import BrowniePoints from "../../components/BrowniePoints/BrowniePoints.jsx"
import Plans from "../../components/Plans/Plans.jsx"

const Soldier = (props) => {
  let { id } = useParams()
  let [soldier, setSoldier] = useState(null)
  const [tab, setTab] = useState("Reminders")
  const [form, setForm] = useState(false)
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const fetchSoldier = async () => {
      const soldierData = await getSoldier(id)
      setSoldier(soldierData)
      if(soldierData.plans.length > 0) setPlans(soldierData.plans)
    }
    fetchSoldier()
  }, [id])


  const handleTab = (tabName) => {
    setTab(tabName)
    if(form) setForm(false)
  }

  const handleForm = () => {
    form ? setForm(false) : setForm(true)
  }
  
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
          <BrowniePoints handleUpdateSoldier={props.handleUpdateSoldier} setSoldier={setSoldier} edit={true} soldier={soldier}/>
        </div>
      </div>

      <div className={styles.tab}>
        <p onClick={() => handleTab("Reminders")}>Reminders</p>
        <p onClick={() => handleTab("Plans")}>Dates/Hangouts</p>
        <p onClick={() => handleTab("Gifts")}>Gifts</p>
        <p onClick={() => handleTab("Core Memories")}>Core Memories</p>
      </div>

      <div className={styles.body}>
        {!form && 
          <button onClick={handleForm}>Add {tab}</button>
        }

        {
          tab === "Reminders" ? 
            <p>{tab}</p> :
          tab === "Plans" ?
            <Plans form={form} setPlans={setPlans} setForm={setForm} plans={plans} soldier={soldier}/>:
          tab === "Gifts" ?
            <p>{tab}</p> 
          :
            <p>{tab}</p>
        }
      </div>

    </main>
  )
}

export default Soldier