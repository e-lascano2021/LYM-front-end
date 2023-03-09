import React, { useState } from 'react'
import Select from 'react-select'
import styles from './AddSoldier.module.css'

const AddSoldier = ({handleAddSoldier}) => {
  const loveTypesOptions = [
    { value: "Eros", label: "Eros" },
    { value: "Philia", label: "Philia" },
    { value: "Storge", label: "Storge" },
    { value: "Agape", label: "Agape" },
    { value: "Ludus", label: "Ludus" },
    { value: "Pragma", label: "Pragma" },
    { value: "Philautia", label: "Philautia" },
    { value: "Mania", label: "Mania" },
  ]
  const loveLanguagesOptions = [
    { value: "Words of Affirmation", label: "Words of Affirmation" },
    { value: "Acts of Service", label: "Acts of Service" },
    { value: "Receiving Gifts", label: "Receiving Gifts" },
    { value: "Quality Time", label: "Quality Time" },
    { value: "Physical Touch", label: "Physical Touch" },
  ]

  const [image, setImage] = useState({photo: null})
  
  const [formData, setFormData] = useState({
    name: '',
    loveTypes: [],
    loveLanguages: []
  })
  
  const handleLoveLanguages = e => {
    setFormData({...formData, "loveLanguages": e })
  }

  const handleLoveTypes = e => {
    setFormData({...formData, "loveTypes": e })
  }

  const handleChange = e => {  
    setFormData({...formData, [e.target?.name]: e.target?.value}) 
  }

  const handleImage = (evt) => {
    if (evt.target.files) setImage({ photo: evt.target.files.item(0) })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleAddSoldier(formData, image)
  }

  return (
    <main className={styles.main}>
      <form onSubmit= {handleSubmit}>
        <div className={styles.image}>
          <div>
            <label>Add an Image:</label>
            <input
              required
              type='file'
              name="image"
              onChange={handleImage}
            />
          </div>
        </div>
        
        <div className={styles.name}>
          <div>
            <label>Add Name:</label>            
            <input
              required
              name="name"
              autoComplete='off'
              placeholder="Enter Name here"
              value={formData.name}
              onChange={handleChange}
            />
          </div>         
        </div>

        <div className={styles.types}>
          <div>
            <label>Add Love Types:</label>
            <Select required
              isMulti
              name="loveTypes"
              closeMenuOnSelect={false}
              options={loveTypesOptions}
              onChange={handleLoveTypes}
            />
          </div>
        </div>

        <div className={styles.languages}>
          <div>
            <label>Add Love Languages:</label>
            <Select required
              isMulti
              name="loveLanguages"
              closeMenuOnSelect={false}
              options={loveLanguagesOptions}
              onChange={handleLoveLanguages}
            />
          </div>
        </div>

        <div className={styles.submit}>
          <div>
            <button type="submit">Create Soldier</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default AddSoldier