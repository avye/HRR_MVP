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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "banner" },
          React.createElement(TitleBanner, null),
          React.createElement(GetAnimals, { onGetAnimalsClick: this.onGetAnimalsClick.bind(this) })
        ),
        React.createElement(CardView, { animals: this.state.animals })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLENBQWdDLFVBQUMsT0FBRCxFQUFhO0FBQzNDLFlBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQWpDLENBQW5CO0FBQ0EsWUFBSSxxQkFBcUIsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsUUFBUSxNQUFqQyxDQUF6Qjs7QUFFQSxZQUFJLGVBQWUsUUFBUSxNQUFSLENBQWUsWUFBZixFQUE0QixDQUE1QixDQUFuQjs7QUFFQSxZQUFJLE9BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUMsYUFBYSxDQUFiLEVBQWdCLElBQWhCLEtBQXlCLE9BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEYsRUFBNEY7QUFDMUYseUJBQWMsUUFBUSxNQUFSLENBQWUsa0JBQWYsRUFBa0MsQ0FBbEMsQ0FBZDtBQUNEOztBQUVELGVBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVM7QUFERyxTQUFkO0FBR0QsT0FiRDtBQWNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsUUFBZjtVQUNFLG9CQUFDLFdBQUQsT0FERjtVQUVFLG9CQUFDLFVBQUQsSUFBWSxtQkFBbUIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUEvQjtBQUZGLFNBREY7UUFLRSxvQkFBQyxRQUFELElBQVUsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUE5QjtBQUxGLE9BREY7QUFTRDs7OztFQXBDZSxNQUFNLFM7O0FBdUN4QixPQUFPLEdBQVAsR0FBYSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvL2FuaW1hbHM6IHRoaXMucHJvcHMuZXhhbXBsZUFuaW1hbHNcbiAgICAgIGFuaW1hbHM6IFtdXG4gICAgfTtcbiAgfVxuICBcbiAgb25HZXRBbmltYWxzQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy51dGlscy5nZXRBbGxBbmltYWxzKCAoYW5pbWFscykgPT4ge1xuICAgICAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbmltYWxzLmxlbmd0aCk7XG4gICAgICB2YXIgYmFja1VwUmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmFuaW1hbHMubGVuZ3RoKTtcbiAgICAgIFxuICAgICAgdmFyIHJhbmRvbUFuaW1hbCA9IGFuaW1hbHMuc3BsaWNlKHJhbmRvbU51bWJlciwxKTtcbiAgICAgIC8vIENoZWNrIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lIGFuaW1hbCBpc24ndCBzaG93biB0d2ljZVxuICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWFscy5sZW5ndGggIT09IDAgJiYgcmFuZG9tQW5pbWFsWzBdLm5hbWUgPT09IHRoaXMuc3RhdGUuYW5pbWFsc1swXS5uYW1lKSB7XG4gICAgICAgIHJhbmRvbUFuaW1hbCA9YW5pbWFscy5zcGxpY2UoYmFja1VwUmFuZG9tTnVtYmVyLDEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWFsczogcmFuZG9tQW5pbWFsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgICAgIDxUaXRsZUJhbm5lciAvPlxuICAgICAgICAgIDxHZXRBbmltYWxzIG9uR2V0QW5pbWFsc0NsaWNrPXt0aGlzLm9uR2V0QW5pbWFsc0NsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZFZpZXcgYW5pbWFscz17dGhpcy5zdGF0ZS5hbmltYWxzfSAvPlxuICAgICAgPC9kaXY+ICBcbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19