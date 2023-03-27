import { useParams } from "react-router-dom"
import { useEffect, useState} from 'react'
import { getSoldier } from "../../services/armyService.js"
import { deletePlan, updatePlan } from "../../services/planService.js"
import { deleteGift, updateGift } from "../../services/armyService.js"
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
  let [gifts, setGifts] = useState([])

  useEffect(() => {
    const fetchSoldier = async () => {
      const soldierData = await getSoldier(id)
      setSoldier(soldierData)
      if(soldierData.plans.length > 0) setPlans(soldierData.plans)
      if(soldierData.gifts.length > 0) setGifts(soldierData.gifts)
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

  const handleDeleteGift = (giftId) => {
    deleteGift(soldier._id, giftId)
    setGifts(gifts.filter(g => g._id !== giftId))
  }

  const handleUpdateGift = async (giftId, giftData ) => {
    const updatedGift = await updateGift(soldier._id, giftId, giftData)
    const newGifts = gifts.map(g => (g._id === giftId) ? updatedGift : g)
    setGifts(newGifts)
  }

  const handleTab = (tabName) => {
    if (tabName !== tab) {
      setTab(tabName)
      if (form) setForm(false)
    }
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
          <button onClick={() => setForm(true)}>Add {tab}</button>
        }

        {
          tab === "Reminders" ? 
            <p>{tab}</p> :
          tab === "Plans" ?
            <Plans
              handleUpdatePlan={handleUpdatePlan}
              handleDeletePlan={handleDeletePlan}
              form={form}
              setForm={setForm}
              plans={plans}
              setPlans={setPlans}
              soldier={soldier}
            />:
          tab === "Gifts" ?
            <Gifts
              handleDeleteGift={handleDeleteGift}
              handleUpdateGift={handleUpdateGift}
              form={form}
              setForm={setForm}
              gifts={gifts}
              setGifts={setGifts}
              soldier={soldier}
            />
          :
            <p>{tab}</p>
        }
      </div>
    </main>
  )
}

export default Soldier