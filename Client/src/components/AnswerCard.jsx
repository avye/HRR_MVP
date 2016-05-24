var AnswerCard = (props) => (
  <td>
      <p>Name: {props.animal.name}</p>
      <p>Type: {props.animal.type}</p>
      <p>Diet: {props.animal.diet}</p>
      <p>Life span: {props.animal.lifespan} years</p>
      <p>Size: {props.animal.size} ft</p>
      <p>Weight: {props.animal.weight} lbs</p>
  </td>
);

window.AnswerCard = AnswerCard;