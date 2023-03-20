import { useState } from "react"
import { createPlan } from "../../services/planService"
import Plan from "../Plan/Plan"

const Plans = (props) => {
  const [formData, setFormData] = useState({})
  const [plans, setPlans] = useState(props.soldier.plans)

  const handleChange = e => {  
    setFormData({...formData, [e.target?.name]: e.target?.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newPlan = await createPlan(props.soldier._id, formData)
    setPlans([...plans, newPlan])
    props.setForm()
  }


  return (
    <div>
      <p>plans</p>
      {props.form &&
        <>
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
                name="where"
                onChange={handleChange}
                />
            </div>

            <div>
              <label>Plan :</label>
              <input
                required
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
            <button>Add Plan</button>
          </form>
          <button onClick={()=> props.setForm()}>Cancel</button>
        </>
      }
      {plans?.map((plan, id) => 
        <Plan key={id} plan={plan}/>
      )}
    </div>
  )
}

export default Plans