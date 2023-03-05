import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'

const Login = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <h2>Log In</h2>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
        handleForm={props.handleForm}
      />
    </>
  )
}

export default Login