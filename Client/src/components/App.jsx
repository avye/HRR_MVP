class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //animals: this.props.exampleAnimals
      animals: []
    };
  }
  
  render() {
    return (
      <div>
        <TitleBanner />
        <GetAnimals />
        <CardView animals={this.state.animals} />
      </div>  
    );
  }
}

window.App = App;