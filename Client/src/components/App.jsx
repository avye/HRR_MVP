class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <TitleBanner />
        <CardView />
      </div>  
    );
  }
}

window.App = App;