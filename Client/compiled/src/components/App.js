"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      //animals: this.props.exampleAnimals
      animals: [],
      AddAnAnimalClicked: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "onGetAnimalsClick",
    value: function onGetAnimalsClick() {
      var _this2 = this;

      this.props.utils.getAllAnimals(function (animals) {
        var randomNumber = Math.floor(Math.random() * animals.length);
        var backUpRandomNumber = Math.floor(Math.random() * animals.length);

        var randomAnimal = animals.splice(randomNumber, 1);
        // Check to ensure that the same animal isn't shown twice
        if (_this2.state.animals.length !== 0 && randomAnimal[0].name === _this2.state.animals[0].name) {
          randomAnimal = animals.splice(backUpRandomNumber, 1);
        }

        _this2.setState({
          animals: randomAnimal
        });
      });
    }
  }, {
    key: "onMakeAnAnimalClick",
    value: function onMakeAnAnimalClick() {
      this.setState({
        AddAnAnimalClicked: true
      });
    }
  }, {
    key: "onSubmitAnAnimal",
    value: function onSubmitAnAnimal(animal) {
      console.log(animal);
      this.setState({
        AddAnAnimalClicked: false
      });
      alert('Animal added to the database!');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "banner" },
          React.createElement(TitleBanner, null),
          React.createElement(GetAnimals, { onGetAnimalsClick: this.onGetAnimalsClick.bind(this) }),
          React.createElement(MakeAnAnimal, { onMakeAnAnimalClick: this.onMakeAnAnimalClick.bind(this) })
        ),
        React.createElement(
          "div",
          { className: "makeAnAnimalForm" },
          this.state.AddAnAnimalClicked ? React.createElement(MakeAnAnimalForm, { onSubmitAnAnimal: this.onSubmitAnAnimal.bind(this) }) : null
        ),
        React.createElement(CardView, { animals: this.state.animals })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVMsRUFGRTtBQUdYLDBCQUFvQjtBQUhULEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFdBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsQ0FBZ0MsVUFBQyxPQUFELEVBQWE7QUFDM0MsWUFBSSxlQUFlLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLFFBQVEsTUFBakMsQ0FBbkI7QUFDQSxZQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQWpDLENBQXpCOztBQUVBLFlBQUksZUFBZSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTRCLENBQTVCLENBQW5COztBQUVBLFlBQUksT0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixNQUFuQixLQUE4QixDQUE5QixJQUFtQyxhQUFhLENBQWIsRUFBZ0IsSUFBaEIsS0FBeUIsT0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixDQUFuQixFQUFzQixJQUF0RixFQUE0RjtBQUMxRix5QkFBYyxRQUFRLE1BQVIsQ0FBZSxrQkFBZixFQUFrQyxDQUFsQyxDQUFkO0FBQ0Q7O0FBRUQsZUFBSyxRQUFMLENBQWM7QUFDWixtQkFBUztBQURHLFNBQWQ7QUFHRCxPQWJEO0FBY0Q7OzswQ0FFcUI7QUFDcEIsV0FBSyxRQUFMLENBQWM7QUFDWiw0QkFBb0I7QUFEUixPQUFkO0FBR0Q7OztxQ0FFZ0IsTSxFQUFRO0FBQ3ZCLGNBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFLLFFBQUwsQ0FBYztBQUNaLDRCQUFvQjtBQURSLE9BQWQ7QUFHQSxZQUFNLCtCQUFOO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0U7QUFBQTtVQUFBLEVBQUssV0FBVSxRQUFmO1VBQ0Usb0JBQUMsV0FBRCxPQURGO1VBRUUsb0JBQUMsVUFBRCxJQUFZLG1CQUFtQixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQS9CLEdBRkY7VUFHRSxvQkFBQyxZQUFELElBQWMscUJBQXFCLEtBQUssbUJBQUwsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBbkM7QUFIRixTQURGO1FBTUU7QUFBQTtVQUFBLEVBQUssV0FBVSxrQkFBZjtVQUNHLEtBQUssS0FBTCxDQUFXLGtCQUFYLEdBQWdDLG9CQUFDLGdCQUFELElBQWtCLGtCQUFrQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQXBDLEdBQWhDLEdBQTBHO0FBRDdHLFNBTkY7UUFTRSxvQkFBQyxRQUFELElBQVUsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUE5QjtBQVRGLE9BREY7QUFjRDs7OztFQXhEZSxNQUFNLFM7O0FBMkR4QixPQUFPLEdBQVAsR0FBYSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvL2FuaW1hbHM6IHRoaXMucHJvcHMuZXhhbXBsZUFuaW1hbHNcbiAgICAgIGFuaW1hbHM6IFtdLFxuICAgICAgQWRkQW5BbmltYWxDbGlja2VkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgXG4gIG9uR2V0QW5pbWFsc0NsaWNrKCkge1xuICAgIHRoaXMucHJvcHMudXRpbHMuZ2V0QWxsQW5pbWFscyggKGFuaW1hbHMpID0+IHtcbiAgICAgIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYW5pbWFscy5sZW5ndGgpO1xuICAgICAgdmFyIGJhY2tVcFJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbmltYWxzLmxlbmd0aCk7XG4gICAgICBcbiAgICAgIHZhciByYW5kb21BbmltYWwgPSBhbmltYWxzLnNwbGljZShyYW5kb21OdW1iZXIsMSk7XG4gICAgICAvLyBDaGVjayB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZSBhbmltYWwgaXNuJ3Qgc2hvd24gdHdpY2VcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hbHMubGVuZ3RoICE9PSAwICYmIHJhbmRvbUFuaW1hbFswXS5uYW1lID09PSB0aGlzLnN0YXRlLmFuaW1hbHNbMF0ubmFtZSkge1xuICAgICAgICByYW5kb21BbmltYWwgPWFuaW1hbHMuc3BsaWNlKGJhY2tVcFJhbmRvbU51bWJlciwxKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hbHM6IHJhbmRvbUFuaW1hbFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG9uTWFrZUFuQW5pbWFsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBBZGRBbkFuaW1hbENsaWNrZWQ6IHRydWVcbiAgICB9KTtcbiAgfVxuICBcbiAgb25TdWJtaXRBbkFuaW1hbChhbmltYWwpIHtcbiAgICBjb25zb2xlLmxvZyhhbmltYWwpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgQWRkQW5BbmltYWxDbGlja2VkOiBmYWxzZVxuICAgIH0pO1xuICAgIGFsZXJ0KCdBbmltYWwgYWRkZWQgdG8gdGhlIGRhdGFiYXNlIScpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgICAgPFRpdGxlQmFubmVyIC8+XG4gICAgICAgICAgPEdldEFuaW1hbHMgb25HZXRBbmltYWxzQ2xpY2s9e3RoaXMub25HZXRBbmltYWxzQ2xpY2suYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8TWFrZUFuQW5pbWFsIG9uTWFrZUFuQW5pbWFsQ2xpY2s9e3RoaXMub25NYWtlQW5BbmltYWxDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ha2VBbkFuaW1hbEZvcm1cIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5BZGRBbkFuaW1hbENsaWNrZWQgPyA8TWFrZUFuQW5pbWFsRm9ybSBvblN1Ym1pdEFuQW5pbWFsPXt0aGlzLm9uU3VibWl0QW5BbmltYWwuYmluZCh0aGlzKX0vPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZFZpZXcgYW5pbWFscz17dGhpcy5zdGF0ZS5hbmltYWxzfSAvPlxuXG4gICAgICA8L2Rpdj4gIFxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=