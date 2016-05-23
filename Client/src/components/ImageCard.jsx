class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false
    };
  }
  
  onGuessFormSubmit() {
    this.setState({answered: !this.state.answered});
  }
  
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.animal.image} />
        </td>
        <GuessForm onGuessFormSubmit={this.onGuessFormSubmit.bind(this)}/>
        {this.state.answered ? <AnswerCard animal={this.props.animal}/> : null}
      </tr>
    )
  }
}

window.ImageCard = ImageCard;