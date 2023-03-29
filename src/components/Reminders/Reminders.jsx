import Reminder from "../Reminder/Reminder"

const Reminders = (props) => {
  return (
    <div>
      {props.form &&
        <form>
          <div>
            <label>Quote/Reminder:</label>
            <input
              required
              autoComplete="off"
              name="text"
            />
          </div>

          <div>
            <label>Author:</label>
            <input
              required
              autoComplete="off"
              name="author"
            />
          </div>

          <div>
            <label>Link:</label>
            <input
              required
              autoComplete="off"
              name="link"
            />
          </div>

          <div>
            <label>Notes :</label>
            <textarea
              name="notes"
            />
          </div>

          <button type="submit" >Add Reminder</button>
          <button type="button" onClick={()=> props.setForm(false)}>Cancel</button>
        </form>
      }

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