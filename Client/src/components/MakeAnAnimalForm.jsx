class MakeAnAnimalForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onMakeAnAnimalSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    var animal = {
      name: this.refs.formName.value,
      type: this.refs.formType.value,
      diet: this.refs.formDiet.value,
      lifespan: this.refs.formLifespan.value,
      size: this.refs.formSize.value,
      weight: this.refs.formWeight.value,
      image: this.refs.formImage.value
    };
    
    this.props.onSubmitAnAnimal(animal);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onMakeAnAnimalSubmit.bind(this)}>
          <input type="text" placeholder="Name" ref='formName'/>
          <input type="text" placeholder="Type" ref='formType'/>
          <input type="text" placeholder="Diet" ref='formDiet'/>
          <input type="text" placeholder="Lifespan (in years)" ref='formLifespan'/>
          <input type="text" placeholder="Size (in ft)" ref='formSize'/>
          <input type="text" placeholder="Weight (in lbs)" ref='formWeight'/>
          <input type="text" placeholder="Image URL" ref='formImage'/>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

window.MakeAnAnimalForm = MakeAnAnimalForm;