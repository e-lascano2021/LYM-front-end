import Reminder from "../Reminder/Reminder"

const Reminders = (props) => {
  return (
    <div>
      {props.reminders.length === 0 ?
        <h3>No Reminders Yet</h3> :
        <div>
          {props.reminders.map((reminder, idx) => 
            <Reminder key={idx}
              reminder={reminder}
            />
          )}
        </div>
      }
    </div>
  )
}

export default Reminders