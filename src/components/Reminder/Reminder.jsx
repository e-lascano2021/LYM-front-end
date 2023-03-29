const Reminder = (props) => {
  return (
    <div>
      <p>{props.reminder.text}</p>
      <p>{props.reminder.author}</p>
      <p>{props.reminder.link}</p>
      <p>{props.reminder.notes}</p>
    </div>
  )
}

export default Reminder