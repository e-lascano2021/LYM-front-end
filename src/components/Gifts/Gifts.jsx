import { useState } from "react"
import { createGift } from "../../services/armyService.js"
import styles from "./Gifts.module.css"
import Gift from "../Gift/Gift.jsx"

const Gifts = (props) => {
  const [formData, setFormData] = useState({})

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let newGift = await createGift(props.soldier._id, formData)
    props.setGifts([...props.gifts, newGift])
    props.setForm()
  }
  
  return (
    <div className={styles.container}>
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
        <div className={styles.list}>
          {props.gifts.map((gift, idx) => 
            <Gift key={idx}
              gift={gift}
              handleDeleteGift={props.handleDeleteGift}
            />
          )}
        </div>
      }
    </div>
  )
}

export default Gifts