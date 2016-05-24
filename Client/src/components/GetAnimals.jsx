var GetAnimals = (props) => (
  <button type="button" onClick={() => props.onGetAnimalsClick()} className="getAnimalsButton">Get an animal</button>
)

window.GetAnimals = GetAnimals;