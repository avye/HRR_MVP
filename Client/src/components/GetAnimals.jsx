var GetAnimals = (props) => (
  <button type="button" onClick={() => props.onGetAnimalsClick()} className="getAnimalsButton">PLAY</button>
)

window.GetAnimals = GetAnimals;