class MakeAnAnimalForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onMakeAnAnimalSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    var value = this.refs.todoValue.value;
    this.props.onFormSubmit(value);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitFunc.bind(this)}>
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