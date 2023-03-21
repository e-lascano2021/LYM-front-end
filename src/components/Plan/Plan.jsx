import styles from "./Plan.module.css"

const Plan = (props) => {
  let date = new Date(props.plan.when).toString()
  let day = date.slice(4, 16)
  let hours = parseInt(date.slice(16, 18))
  let minutes = date.slice(19, 21)
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12
  const strTime = hours + ':' + minutes + ' ' + ampm


  return (
    <div className={styles.card}>
      <div className={styles.when}>
        <label> 
          <p>Date: {day}</p>
        </label>

        <label>
          <p>Time: {strTime}</p>
        </label>
      </div>

      <div className={styles.info}>
        <label> Where:
          <p>{props.plan.where}</p>
        </label>

        <label> What:
          <p>{props.plan.what}</p>
        </label>
      </div>

      <label> Notes:
        <p>{props.plan.notes}</p>
      </label>

    </div>
  )
}

export default Plan