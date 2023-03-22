import { useState } from "react"
import { createPlan } from "../../services/planService.js"
import Plan from "../Plan/Plan.jsx"
import styles from "./Plans.module.css"

const Plans = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newPlan = await createPlan(props.soldier._id, formData)
    props.setPlans([...props.plans, newPlan])
    props.setForm()
  }


  return (
    <div className={styles.container}>
      {props.form &&
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date :</label>
            <input
              required
              type="datetime-local"
              name="when"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Where :</label>
            <input
              required
              autoComplete="off"
              name="where"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Plan :</label>
            <input
              required
              autoComplete="off"
              name="what"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Notes :</label>
            <textarea
              required
              name="notes"
              onChange={handleChange}
            />
          </div>

          <button type="submit" >Add Plan</button>
          <button type="button" onClick={()=> props.setForm(false)}>Cancel</button>
        </form>
      }

      {props.plans.length === 0 ?
        <h3>No Plans Yet</h3> :
        <div className={styles.list}>
          {props.plans.map((plan, idx) => 
            <Plan key={idx} plan={plan}/>
          )}
        </div>
      }
    </div>
  )
}

export default Plans