class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'borderColor': 'transparent',
      borderWidth: '4px'
    }
  }
  
  onSubmit(event) {
    event.preventDefault();
    this.props.onGuessFormSubmit();
    
    var value = this.refs.guessValue.value;
    if (value.toLowerCase() === this.props.animal.name.toLowerCase()) {
      this.setState({'borderColor': 'green'});
    } else {
      this.setState({'borderColor': 'red'});
    }
  }
  
  render() {
    return (
      <td>
        <form onSubmit={this.onSubmit.bind(this)} >
          <input type="text" placeholder="What do you think it is?" ref='guessValue' style={this.state}/>
          <input type="submit" value="Submit" />
        </form>
      </td>
    )
  }
}

window.GuessForm = GuessForm;