const Plan = (props) => {
  return (
    <div>
      <p>{props.plan.when} {props.plan.where}</p>
      <p>{props.plan.what}</p>
      <p>{props.plan.notes}</p>
    </div>
  )
}

export default Plan