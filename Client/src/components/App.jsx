class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //animals: this.props.exampleAnimals
      animals: [],
      AddAnAnimalClicked: false
    };
  }
  
  onGetAnimalsClick() {
    this.props.utils.getAllAnimals( (animals) => {
      var randomNumber = Math.floor(Math.random()*animals.length);
      var backUpRandomNumber = Math.floor(Math.random()*animals.length);
      
      var randomAnimal = animals.splice(randomNumber,1);
      // Check to ensure that the same animal isn't shown twice
      if (this.state.animals.length !== 0 && randomAnimal[0].name === this.state.animals[0].name) {
        randomAnimal =animals.splice(backUpRandomNumber,1);
      }
      
      this.setState({
        animals: randomAnimal
      });
    });
  }
  
  onMakeAnAnimalClick() {
    this.setState({
      AddAnAnimalClicked: true
    });
  }
  
  onSubmitAnAnimal(animal) {
    console.log(animal);
    this.setState({
      AddAnAnimalClicked: false
    });
    alert('Animal added to the database!');
  }
  
  render() {
    return (
      <div>
        <div className="banner">
          <TitleBanner />
          <GetAnimals onGetAnimalsClick={this.onGetAnimalsClick.bind(this)} />
          <MakeAnAnimal onMakeAnAnimalClick={this.onMakeAnAnimalClick.bind(this)}/>
        </div>
        <div className="makeAnAnimalForm">
          {this.state.AddAnAnimalClicked ? <MakeAnAnimalForm onSubmitAnAnimal={this.onSubmitAnAnimal.bind(this)}/> : null}
        </div>
        <CardView animals={this.state.animals} />

      </div>  
    );
  }
}

window.App = App;