class GetAnimals extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onGetAnimalsButton() {
    // do stuff
  }
  
  render() {
    return (
      <button type="button" onClick={this.onGetAnimalsButton.bind(this)}>Get some animals!</button>
    );
  }
}

window.GetAnimals = GetAnimals;