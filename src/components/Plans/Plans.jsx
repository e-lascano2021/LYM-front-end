import { useState } from "react"

const Plans = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target?.name]: e.target?.value}) 
  }

  return (
    <div>
      <p>plans</p>
      <form>

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