import styles from "./Gift.module.css"
const Gift = (props) => {

  return (
    <div className={styles.card}>
      <p>{props.gift.item}</p>
      <p>{props.gift.where}</p>
      <p>{props.gift.notes}</p>
    </div>
  )
}

export default Gift