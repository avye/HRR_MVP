var CardView = (props) => (
  <table>
    <tbody>
      {props.animals.map(
        element =>
        <ImageCard animal={element} key={element.name} />
      )}
    </tbody>
  </table>
);

window.CardView = CardView;