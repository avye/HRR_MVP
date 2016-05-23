class GuessForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onSubmit(event) {
    console.log('it hit');
    console.log(event);
    event.preventDefault();
    var value = this.refs.guessValue.value;
    console.log(value);
    this.props.onGuessFormSubmit();
  }
  
  render() {
    return (
      <td>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="What do you think it is?" ref='guessValue'/>
          <input type="submit" value="Submit" />
        </form>
      </td>
    )
  }
}

window.GuessForm = GuessForm;