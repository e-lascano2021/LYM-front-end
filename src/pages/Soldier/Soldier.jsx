import { useParams } from "react-router-dom"
import { useEffect, useState} from 'react'
import { getSoldier } from "../../services/armyService"
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
    <div>
      {soldier.name}
    </div>
  )
}

export default Soldier