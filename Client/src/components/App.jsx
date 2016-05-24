class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //animals: this.props.exampleAnimals
      animals: []
    };
  }
  
  onGetAnimalsClick() {
    console.log('oh yeah');
    // do something with a randomizer so it only shows two animals at a time
    
    this.props.utils.getAllAnimals( (animals) => {
      var randomNumber = Math.floor(Math.random()*animals.length);
      var randomAnimal = animals.splice(randomNumber,1);
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