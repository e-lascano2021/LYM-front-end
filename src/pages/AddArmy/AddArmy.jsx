import React, { useState } from 'react'
import Select from 'react-select'

const AddArmy = ({handleAddArmy}) => {
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
  

  const handleSubmit = e => {
    e.preventDefault()
    handleAddArmy(formData)
  }

  return (
    <main>
      <form onSubmit= {handleSubmit}>
        <div className='form-group left'>            
          <label className='label-name'>Add Name: </label>            
          <input className="form-input"
            required
            name="name"
            autoComplete='off'
            placeholder="Enter Name here"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
{/* 
        <div className='form-group right'>
          <label className='label-title'>Add an Image: </label>
          <input className="form-input"
            required
            type='file'
            name="image"
            onChange={handleImage}
          />
        </div>
         */}
        <div>
          <label> Add Love Types</label>
          <Select name="loveTypes" onChange={handleLoveTypes} isMulti closeMenuOnSelect={false} options={loveTypesOptions}/>
        </div>

        <div>
        <label> Add Love Languages</label>
          <Select name="loveLanguages" onChange={handleLoveLanguages} isMulti closeMenuOnSelect={false} options={loveLanguagesOptions}/>
        </div>

        <div className='createBtn-wrapper'>
          <button type="submit" className='createBtn'>Create Post</button>
        </div>
      </form>
    </main>
  )
}

export default AddArmy