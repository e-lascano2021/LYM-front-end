import { useState } from "react"

const Gifts = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    props.setForm()
  }
  
  return (
    <div>
      {props.form &&
        <form onSubmit={handleSubmit}>
          <div>
            <label>Gift Idea :</label>
            <input
              required
              autoComplete="off"
              name="item"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Where to get Gift:</label>
            <input
              required
              autoComplete="off"
              name="where"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Notes :</label>
            <textarea
              name="notes"
              onChange={handleChange}
            />
          </div>

          <button type="submit" >Add Plan</button>
          <button type="button" onClick={()=> props.setForm(false)}>Cancel</button>
        </form>
      }

      {props.gifts.length === 0 ?
        <h3>No Gifts Yet</h3> :
        <div>
          {props.gifts.map((gift, idx) => 
            <div key={idx}>
              <p>{gift.item}</p>
              <p>{gift.where}</p>
              <p>{gift.notes}</p>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Gifts