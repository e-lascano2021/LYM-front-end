import {useState} from "react"
import styles from "./UpdatePointsForm.module.css"
import { updatePoints } from "../../services/armyService"

const UpdatePointsForm = (props) => {
  const [formData, setFormData] = useState({
    currentPoints: 0
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : parseInt(`${props.math === "Add" ? e.target.value : - e.target.value}`)})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const data = await updatePoints(props.soldier._id, formData)
      props.handleUpdateSoldier(data)
      props.setSoldier(data)
      props.handleForm(props.math)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => props.handleForm(props.math)} >X</button>
      <div>
        <h5> {props.math} points {props.math === "Add"? "to": "from"} {props.soldier.name}'s points</h5>
        <form onSubmit={handleSubmit}>
          <input type="number" min="0" onChange={handleChange} name="currentPoints"></input>
          <button> {props.math} points</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePointsForm