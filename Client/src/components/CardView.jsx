var CardView = (props) => (
  <table className="cardTable">
    <tbody>
      {props.animals.map(
        element =>
        <ImageCard animal={element} key={element.name} />
      )}
    </tbody>
  </table>
);

window.CardView = CardView;