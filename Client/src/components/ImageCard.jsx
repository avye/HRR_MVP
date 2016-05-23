class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.animal.image} onClick={()=> this.setState({clicked: !this.state.clicked})}/>
        </td>
        {this.state.clicked ? <AnswerCard animal={this.props.animal}/> : null}
      </tr>
    )
  }
}

window.ImageCard = ImageCard;