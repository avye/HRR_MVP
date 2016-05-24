var MakeAnAnimal = (props) => (
  <button type="button" onClick={() => props.onMakeAnAnimalClick()} className="makeAnAnimalButton">Add an animal</button>
)

window.MakeAnAnimal = MakeAnAnimal;