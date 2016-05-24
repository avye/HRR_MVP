var GetAnimals = (props) => (
  <button type="button" onClick={() => props.onGetAnimalsClick()}>Get some animals!</button>
)

window.GetAnimals = GetAnimals;