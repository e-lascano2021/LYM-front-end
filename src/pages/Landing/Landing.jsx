import React, { useState } from 'react'
import Login from '../../components/Login/Login.jsx'
import Signup from '../../components/Signup/Signup.jsx'
import styles from './Landing.module.css'

const Landing = (props) => {
  const [form, setForm]= useState("none")

  const handleForm = (x) => {
    setForm(x)
  }

  return (
    <main className={styles.container}>

      <div className={styles.top}>
        <h1>Love You</h1>
        <h1>More</h1>
        <div className={styles.handleForm}>
          <p onClick={() => handleForm("LogIn")} className={styles.links}>LogIn</p>
          <p onClick={() => handleForm("SignUp")} className={styles.links}>Signup</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        { form === "LogIn" ?
          <Login {...props} handleForm={handleForm}/>
          : form === "SignUp" ?
          <Signup {...props} handleForm={handleForm}/>
          :
          <h4>about the app</h4>
        }
      </div>

    </main>
  )
}

export default Landing