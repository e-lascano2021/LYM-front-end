const Gifts = (props) => {

  
  return (
    <div>
      {props.form &&
        <form>
          <div>
            <label>Gift Idea :</label>
            <input
              required
              autoComplete="off"
              name="item"
            />
          </div>

          <div>
            <label>Where to get Gift:</label>
            <input
              required
              autoComplete="off"
              name="where"
            />
          </div>

          <div>
            <label>Notes :</label>
            <textarea
              name="notes"
            />
          </div>

          <button type="submit" >Add Plan</button>
          <button type="button" onClick={()=> props.setForm(false)}>Cancel</button>
        </form>
      }

      {props.gifts.length === 0 ?
        <h3>No Gifts Yet</h3> :
        <div>
          {props.gifts.map((gift, idx) => 
            <div key={idx}>
              <p>{gift.item}</p>
              <p>{gift.where}</p>
              <p>{gift.notes}</p>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Gifts