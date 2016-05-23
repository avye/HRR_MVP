var ImageCard = (props) => (
  <tr>
    <td>
      <img src={props.animal.image} />
    </td>
    <td>{props.animal.name}</td>
  </tr>
);

window.ImageCard = ImageCard;