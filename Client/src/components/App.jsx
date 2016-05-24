class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: this.props.exampleAnimals
      //animals: []
    };
  }
  
  onGetAnimalsClick() {
    console.log('oh yeah');
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