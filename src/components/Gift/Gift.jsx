import { useState } from "react"
import styles from "./Gift.module.css"
const Gift = (props) => {
  let [form, setForm] = useState(false)
  let [formData, setFormData] = useState({
    item: props.gift.item,
    where: props.gift.where,
    notes: props.gift.notes
  })

  const handleChange = e => {  
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    props.handleUpdateGift(props.gift._id, formData)
    setForm(false)
  }

  return (
    form ? 
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Item:</p>
            <input
              autoComplete="off"
              name="item"
              value={formData.item}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Where:
            <input
              autoComplete="off"
              name="where"
              value={formData.where}
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
      <p>{props.gift.item}</p>
      <p>{props.gift.where}</p>
      <p>{props.gift.notes}</p>
      <button onClick={() => props.handleDeleteGift(props.gift._id)}>X</button>
      <button onClick={() => setForm(true)}>Update</button>
    </div>
  )
}

export default Gift