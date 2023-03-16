import { useState } from "react"
import UpdatePointsForm from "../UpdatePointsForm/UpdatePointsForm"
import styles from "./BrowniePoints.module.css"

const BrowniePoints = (props) => {
  const [form, setForm] = useState(false)
  const [math, setMath] = useState("")
  const percentage = (props.soldier.currentPoints / props.soldier.totalPoints) * 100

  let color
  if (percentage < 30 ){
    color = "#FF0000"
  } else if (percentage < 70 ){
    color = "#FFDE00"
  } else {
    color = "#009900"
  }
  

  
  const Parentdiv = {
    background: percentage === 0 ? 'red': `linear-gradient(to right, ${color} ${percentage}%, whitesmoke 0%)`,
  }
  
  const handleForm = (math) => { 
    form ? setForm(false) : setForm(true)
    setMath(math)
  }


  return (
      <div className={styles.container}>

        {props.edit &&
          <button onClick={() => handleForm("Subtract")}>-</button>
        }

        <div style={Parentdiv} className={styles.parentDiv}>
          {`${props.soldier.currentPoints} / ${props.soldier.totalPoints}`}
        </div>

        {props.edit && 
          <button onClick={() => handleForm("Add")}>+</button>
        }

        {form && 
          <UpdatePointsForm handleUpdateSoldier={props.handleUpdateSoldier} setSoldier={props.setSoldier} soldier={props.soldier} handleForm={handleForm} math={math} />
        }
      </div>
  )
}

export default BrowniePoints