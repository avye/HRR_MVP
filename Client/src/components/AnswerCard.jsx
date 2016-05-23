var AnswerCard = (props) => (
  <td>
    <ul>
      <li>Name: {props.animal.name}</li>
      <li>Type: {props.animal.type}</li>
      <li>Diet: {props.animal.diet}</li>
      <li>Life span: {props.animal.lifespan} years</li>
      <li>Size: {props.animal.size} ft</li>
      <li>Weight: {props.animal.weight} lbs</li>
    </ul>
  </td>
);

window.AnswerCard = AnswerCard;

//(name, type, diet, lifespan, size, weight, image)