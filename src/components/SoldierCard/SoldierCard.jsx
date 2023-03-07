

const SoldierCard = (props) => {


  return(
    <>
    <div>{props.soldier.name}</div>
    <div>{props.soldier.loveTypes}</div>
    </>
  )
}

export default SoldierCard