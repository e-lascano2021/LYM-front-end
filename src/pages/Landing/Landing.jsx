import React, { useState } from 'react'
import Login from '../../components/Login/Login.jsx'

const Landing = (props) => {
  const [form, setForm]= useState("none")

  const handleForm = (x) => {
    setForm(x)
  }

  return (
    <main>

      <div>
        <h1>Love You</h1>
        <h1>More</h1>
        <div>
          <p onClick={() => handleForm("LogIn")} >LogIn</p>
          <p onClick={() => handleForm("SignUp")} >Signup</p>
        </div>
      </div>
      
      <div>
        { form === "LogIn" ?
          <Login {...props} handleForm={handleForm}/>
          : form === "SignUp" ?
          <div>hiii</div>
          :
          <h4>about the app</h4>
        }
      </div>

    </main>
  )
}

export default Landing