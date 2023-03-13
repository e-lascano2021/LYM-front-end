import { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import styles from './SignupForm.module.css'

const SignupForm = props => {
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
  const navigate = useNavigate()
  const [photoData, setPhotoData] = useState({
    photo: null
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    loveTypes: [],
    loveLanguages: []
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLoveLanguages = e => {
    setFormData({...formData, "loveLanguages": e })
  }

  const handleLoveTypes = e => {
    setFormData({...formData, "loveTypes": e })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData)
      props.handleSignupOrLogin()
      navigate('/loveArmy')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  const handleChangePhoto = (evt) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.flexEnd}>
        <label htmlFor="photo-upload">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div className={styles.flexEnd}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.flexEnd}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.flexEnd}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.flexEnd}>
        <label htmlFor="confirm">
          Confirm Password:
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
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

      <div>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
        <button onClick={() => props.handleForm("none")}>Cancel</button>
      </div>
    </form>
  )
}

export default SignupForm