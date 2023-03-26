const Gift = (props) => {

  return (
    <div>
      <p>{props.gift.item}</p>
      <p>{props.gift.where}</p>
      <p>{props.gift.notes}</p>
    </div>
  )
}

export default Gift