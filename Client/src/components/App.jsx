class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //animals: this.props.exampleAnimals
      animals: []
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
  
  render() {
    return (
      <div>
        <TitleBanner />
        <GetAnimals onGetAnimalsClick={this.onGetAnimalsClick.bind(this)} />
        <CardView animals={this.state.animals} />
      </div>  
    );
  }
}

window.App = App;