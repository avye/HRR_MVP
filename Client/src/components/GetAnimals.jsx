var GetAnimals = (props) => (
  <button type="button" onClick={() => props.onGetAnimalsClick()} className="getAnimalsButton">Get some animals!</button>
)

window.GetAnimals = GetAnimals;