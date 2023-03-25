import { useParams } from "react-router-dom"
import { useEffect, useState} from 'react'
import { getSoldier } from "../../services/armyService.js"
import { deletePlan, updatePlan } from "../../services/planService.js"
import styles from "./Soldier.module.css"
import BrowniePoints from "../../components/BrowniePoints/BrowniePoints.jsx"
import Plans from "../../components/Plans/Plans.jsx"
import Gifts from "../../components/Gifts/Gifts.jsx"

const Soldier = (props) => {
  let { id } = useParams()
  let [soldier, setSoldier] = useState(null)
  let [tab, setTab] = useState("Plans")
  let [form, setForm] = useState(false)
  let [plans, setPlans] = useState([])

  useEffect(() => {
    const fetchSoldier = async () => {
      const soldierData = await getSoldier(id)
      setSoldier(soldierData)
      if(soldierData.plans.length > 0) setPlans(soldierData.plans)
    }
    fetchSoldier()
  }, [id])

  const handleDeletePlan = (plan) => {
    deletePlan(plan._id, plan.who._id)
    setPlans(plans.filter(p => p._id !== plan._id))
  }
  const handleUpdatePlan = async (planId, planData ) => {
    const updatedPlan = await updatePlan(planId, planData)
    const newPlans = plans.map(p => (p._id === planId) ? updatedPlan : p)
    setPlans(newPlans)
  }

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
            <Plans
              handleUpdatePlan={handleUpdatePlan}
              handleDeletePlan={handleDeletePlan}
              form={form}
              setPlans={setPlans}
              setForm={setForm}
              plans={plans}
              soldier={soldier}
            />:
          tab === "Gifts" ?
            <Gifts/>
          :
            <p>{tab}</p>
        }
      </div>

    </main>
  )
}

export default Soldier