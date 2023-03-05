import { useState } from 'react'
import SignupForm from '../SignupForm/SignupForm.jsx'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <h2>Sign Up</h2>
      <p>{message}</p>
      <SignupForm 
        {...props} 
        updateMessage={updateMessage} 
        handleForm={props.handleForm}
      />
    </>
  )
}

export default Signup
