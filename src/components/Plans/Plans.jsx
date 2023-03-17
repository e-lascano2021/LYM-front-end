import { useState } from "react"
import { createPlan } from "../../services/planService"

const Plans = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target?.name]: e.target?.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newPlan = await createPlan(props.soldier._id, formData)
    console.log(newPlan)
  }

  return (
    <div>
      <p>plans</p>
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
    </div>
  )
}

export default Plans