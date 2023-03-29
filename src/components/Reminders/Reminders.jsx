import { useState } from "react"
import { createReminder } from "../../services/armyService.js"
import Reminder from "../Reminder/Reminder"

const Reminders = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let newReminder = await createReminder(props.soldier._id, formData)
    props.setReminders([...props.reminders, newReminder])
    props.setForm()
  }

  return (
    <div>
      {props.form &&
        <form onSubmit={handleSubmit}>
          <div>
            <label>Quote/Reminder:</label>
            <input
              autoComplete="off"
              name="text"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Author:</label>
            <input
              autoComplete="off"
              name="author"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Link:</label>
            <input
              autoComplete="off"
              name="link"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Notes:</label>
            <textarea
              name="notes"
              onChange={handleChange}
            />
          </div>

          <button type="submit" >Add Reminder</button>
          <button type="button" onClick={()=> props.setForm(false)}>Cancel</button>
        </form>
      }

      {props.reminders.length === 0 ?
        <h3>No Reminders Yet</h3> :
        <div>
          {props.reminders.map((reminder, idx) => 
            <Reminder key={idx}
              handleUpdateReminder={props.handleUpdateReminder}
              reminder={reminder}
            />
          )}
        </div>
      }
    </div>
  )
}

export default Reminders