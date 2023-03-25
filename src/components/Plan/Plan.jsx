import { useState } from "react"
import styles from "./Plan.module.css"

const Plan = (props) => {
  let [form, setForm] = useState(false)
  let date = new Date(props.plan.when).toString()
  let [formData, setFormData] = useState({
    when: props.plan.when.slice(0, 11) + date.slice(16, 21),
    where: props.plan.where,
    what: props.plan.what,
    notes: props.plan.notes
  })

  let day = date.slice(4, 16)
  let hours = parseInt(date.slice(16, 18))
  let minutes = date.slice(19, 21)
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12
  const strTime = hours + ':' + minutes + ' ' + ampm

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }
  

  const handleSubmit = async e => {
    e.preventDefault()
    props.handleUpdatePlan(props.plan._id, formData)
    setForm(false)
  }

  return (
    form ? 
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.when}>
          <label>
            <p>Date:</p>
            <input
              type="datetime-local"
              name="when"
              value={formData.when}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.info}>
          <label>
            Where:
            <input
              autoComplete="off"
              name="where"
              value={formData.where}
              onChange={handleChange}
            />
          </label>
          <label>
            Plan:
            <input
              autoComplete="off"
              name="what"
              value={formData.what}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>Notes :</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" >Update</button>
        <button type="button" onClick={()=> setForm(false)}>Cancel</button>
      </form>
    </div>
    :
    <div className={styles.card}>
      <div className={styles.when}>
        <label> 
          <p>Date: {day}</p>
        </label>

        <label>
          <p>Time: {strTime}</p>
        </label>
      </div>

      <div className={styles.info}>
        <label> Where:
          <p>{props.plan.where}</p>
        </label>

        <label> What:
          <p>{props.plan.what}</p>
        </label>
      </div>

      <label> Notes:
        <p>{props.plan.notes}</p>
      </label>
      <button onClick={() => props.handleDeletePlan(props.plan)}>X</button>
      <button onClick={() => setForm(true)}>Update</button>

    </div>
  )
}

export default Plan