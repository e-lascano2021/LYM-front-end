import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import styles from './SignupForm.module.css'

const SignupForm = props => {
  const navigate = useNavigate()
  const [photoData, setPhotoData] = useState({
    photo: null
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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