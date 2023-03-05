import { useState } from 'react'

const Login = props => {
  const [message, setMessage] = useState([''])

  return (
    <>
      <h2>Log In</h2>
      <p>{message}</p>
    </>

  )
}

export default Login