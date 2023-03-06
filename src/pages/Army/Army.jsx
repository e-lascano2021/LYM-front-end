const Army = (props) => {
  return (
    <main>
      {props.armies.map(army => 
        <li> {army.name}</li>
      )}
    </main>
  )
}

export default Army