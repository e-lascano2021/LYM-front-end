const Army = (props) => {
  return (
    <main>
      {props.army.map((soldier,idx) => 
        <li key={idx}> {soldier.name}</li>
      )}
    </main>
  )
}

export default Army