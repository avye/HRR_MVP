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
        var backUpRandomNumber = Math.floor(Math.random() * animals.length - 1);

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
      this.setState({
        AddAnAnimalClicked: false
      });
      var doneAlert = function doneAlert() {
        alert('Animal added to the database!');
      };

      this.props.utils.addOneAnimal(animal, doneAlert);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVMsRUFGRTtBQUdYLDBCQUFvQjtBQUhULEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFdBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsYUFBakIsQ0FBZ0MsVUFBQyxPQUFELEVBQWE7QUFDM0MsWUFBSSxlQUFlLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLFFBQVEsTUFBakMsQ0FBbkI7QUFDQSxZQUFJLHFCQUFxQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQXRCLEdBQTZCLENBQXhDLENBQXpCOztBQUVBLFlBQUksZUFBZSxRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTRCLENBQTVCLENBQW5COztBQUVBLFlBQUksT0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixNQUFuQixLQUE4QixDQUE5QixJQUFtQyxhQUFhLENBQWIsRUFBZ0IsSUFBaEIsS0FBeUIsT0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixDQUFuQixFQUFzQixJQUF0RixFQUE0RjtBQUMxRix5QkFBYyxRQUFRLE1BQVIsQ0FBZSxrQkFBZixFQUFrQyxDQUFsQyxDQUFkO0FBQ0Q7O0FBRUQsZUFBSyxRQUFMLENBQWM7QUFDWixtQkFBUztBQURHLFNBQWQ7QUFHRCxPQWJEO0FBY0Q7OzswQ0FFcUI7QUFDcEIsV0FBSyxRQUFMLENBQWM7QUFDWiw0QkFBb0I7QUFEUixPQUFkO0FBR0Q7OztxQ0FFZ0IsTSxFQUFRO0FBQ3ZCLFdBQUssUUFBTCxDQUFjO0FBQ1osNEJBQW9CO0FBRFIsT0FBZDtBQUdBLFVBQUksWUFBWSxTQUFaLFNBQVksR0FBTTtBQUNwQixjQUFNLCtCQUFOO0FBQ0QsT0FGRDs7QUFJQSxXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFlBQWpCLENBQThCLE1BQTlCLEVBQXNDLFNBQXRDO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0U7QUFBQTtVQUFBLEVBQUssV0FBVSxRQUFmO1VBQ0Usb0JBQUMsV0FBRCxPQURGO1VBRUUsb0JBQUMsVUFBRCxJQUFZLG1CQUFtQixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQS9CLEdBRkY7VUFHRSxvQkFBQyxZQUFELElBQWMscUJBQXFCLEtBQUssbUJBQUwsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBbkM7QUFIRixTQURGO1FBTUU7QUFBQTtVQUFBLEVBQUssV0FBVSxrQkFBZjtVQUNHLEtBQUssS0FBTCxDQUFXLGtCQUFYLEdBQWdDLG9CQUFDLGdCQUFELElBQWtCLGtCQUFrQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQXBDLEdBQWhDLEdBQTBHO0FBRDdHLFNBTkY7UUFTRSxvQkFBQyxRQUFELElBQVUsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUE5QjtBQVRGLE9BREY7QUFjRDs7OztFQTNEZSxNQUFNLFM7O0FBOER4QixPQUFPLEdBQVAsR0FBYSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvL2FuaW1hbHM6IHRoaXMucHJvcHMuZXhhbXBsZUFuaW1hbHNcbiAgICAgIGFuaW1hbHM6IFtdLFxuICAgICAgQWRkQW5BbmltYWxDbGlja2VkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgXG4gIG9uR2V0QW5pbWFsc0NsaWNrKCkge1xuICAgIHRoaXMucHJvcHMudXRpbHMuZ2V0QWxsQW5pbWFscyggKGFuaW1hbHMpID0+IHtcbiAgICAgIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYW5pbWFscy5sZW5ndGgpO1xuICAgICAgdmFyIGJhY2tVcFJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbmltYWxzLmxlbmd0aC0xKTtcbiAgICAgIFxuICAgICAgdmFyIHJhbmRvbUFuaW1hbCA9IGFuaW1hbHMuc3BsaWNlKHJhbmRvbU51bWJlciwxKTtcbiAgICAgIC8vIENoZWNrIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lIGFuaW1hbCBpc24ndCBzaG93biB0d2ljZVxuICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWFscy5sZW5ndGggIT09IDAgJiYgcmFuZG9tQW5pbWFsWzBdLm5hbWUgPT09IHRoaXMuc3RhdGUuYW5pbWFsc1swXS5uYW1lKSB7XG4gICAgICAgIHJhbmRvbUFuaW1hbCA9YW5pbWFscy5zcGxpY2UoYmFja1VwUmFuZG9tTnVtYmVyLDEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWFsczogcmFuZG9tQW5pbWFsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgb25NYWtlQW5BbmltYWxDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIEFkZEFuQW5pbWFsQ2xpY2tlZDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIFxuICBvblN1Ym1pdEFuQW5pbWFsKGFuaW1hbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgQWRkQW5BbmltYWxDbGlja2VkOiBmYWxzZVxuICAgIH0pO1xuICAgIHZhciBkb25lQWxlcnQgPSAoKSA9PiB7XG4gICAgICBhbGVydCgnQW5pbWFsIGFkZGVkIHRvIHRoZSBkYXRhYmFzZSEnKTtcbiAgICB9O1xuICAgIFxuICAgIHRoaXMucHJvcHMudXRpbHMuYWRkT25lQW5pbWFsKGFuaW1hbCwgZG9uZUFsZXJ0KTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgICAgIDxUaXRsZUJhbm5lciAvPlxuICAgICAgICAgIDxHZXRBbmltYWxzIG9uR2V0QW5pbWFsc0NsaWNrPXt0aGlzLm9uR2V0QW5pbWFsc0NsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPE1ha2VBbkFuaW1hbCBvbk1ha2VBbkFuaW1hbENsaWNrPXt0aGlzLm9uTWFrZUFuQW5pbWFsQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWtlQW5BbmltYWxGb3JtXCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuQWRkQW5BbmltYWxDbGlja2VkID8gPE1ha2VBbkFuaW1hbEZvcm0gb25TdWJtaXRBbkFuaW1hbD17dGhpcy5vblN1Ym1pdEFuQW5pbWFsLmJpbmQodGhpcyl9Lz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRWaWV3IGFuaW1hbHM9e3RoaXMuc3RhdGUuYW5pbWFsc30gLz5cblxuICAgICAgPC9kaXY+ICBcbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19