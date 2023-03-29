import { useState } from "react"

const Reminder = (props) => {
  let [form, setForm] = useState(false)
  let [formData, setFormData] = useState({
    text: props.reminder.text,
    link: props.reminder.link,
    author: props.reminder.author,
    notes: props.reminder.notes
  })

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  return (
    form ? 
    <div>
      <form>
        <div>
          <label>
            <p>Quote/Reminder:</p>
            <input
              autoComplete="off"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Link:
            <input
              autoComplete="off"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Author:
            <input
              autoComplete="off"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>Notes:</label>
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
    <div>
      <p>{props.reminder.text}</p>
      <p>{props.reminder.link}</p>
      <p>{props.reminder.author}</p>
      <p>{props.reminder.notes}</p>
      <button onClick={() => setForm(true)}>Update</button>
    </div>
  )
}

export default Reminder