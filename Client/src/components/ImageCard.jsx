var ImageCard = (props) => (
  <tr>
    <td>{props.animal.name}</td>
    <td>
      <img src={props.animal.image} />
    </td>
  </tr>
);

window.ImageCard = ImageCard;