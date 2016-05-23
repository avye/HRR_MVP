class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: this.props.exampleAnimals
    };
  }
  
  render() {
    return (
      <div>
        <TitleBanner />
        <CardView animals={this.state.animals} />
      </div>  
    );
  }
}

window.App = App;