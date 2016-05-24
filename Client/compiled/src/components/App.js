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
      animals: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "onGetAnimalsClick",
    value: function onGetAnimalsClick() {
      var _this2 = this;

      this.props.utils.getAllAnimals(function (animals) {
        var randomNumber = Math.floor(Math.random() * animals.length);
        var randomAnimal = animals.splice(randomNumber, 1);
        _this2.setState({
          animals: randomAnimal
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(TitleBanner, null),
        React.createElement(GetAnimals, { onGetAnimalsClick: this.onGetAnimalsClick.bind(this) }),
        React.createElement(CardView, { animals: this.state.animals })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLENBQWdDLFVBQUMsT0FBRCxFQUFhO0FBQzNDLFlBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQWpDLENBQW5CO0FBQ0EsWUFBSSxlQUFlLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNEIsQ0FBNUIsQ0FBbkI7QUFDQSxlQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFTO0FBREcsU0FBZDtBQUdELE9BTkQ7QUFPRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRSxvQkFBQyxXQUFELE9BREY7UUFFRSxvQkFBQyxVQUFELElBQVksbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBL0IsR0FGRjtRQUdFLG9CQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUssS0FBTCxDQUFXLE9BQTlCO0FBSEYsT0FERjtBQU9EOzs7O0VBM0JlLE1BQU0sUzs7QUE4QnhCLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vYW5pbWFsczogdGhpcy5wcm9wcy5leGFtcGxlQW5pbWFsc1xuICAgICAgYW5pbWFsczogW11cbiAgICB9O1xuICB9XG4gIFxuICBvbkdldEFuaW1hbHNDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLnV0aWxzLmdldEFsbEFuaW1hbHMoIChhbmltYWxzKSA9PiB7XG4gICAgICB2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmFuaW1hbHMubGVuZ3RoKTtcbiAgICAgIHZhciByYW5kb21BbmltYWwgPSBhbmltYWxzLnNwbGljZShyYW5kb21OdW1iZXIsMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWFsczogcmFuZG9tQW5pbWFsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGl0bGVCYW5uZXIgLz5cbiAgICAgICAgPEdldEFuaW1hbHMgb25HZXRBbmltYWxzQ2xpY2s9e3RoaXMub25HZXRBbmltYWxzQ2xpY2suYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPENhcmRWaWV3IGFuaW1hbHM9e3RoaXMuc3RhdGUuYW5pbWFsc30gLz5cbiAgICAgIDwvZGl2PiAgXG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==