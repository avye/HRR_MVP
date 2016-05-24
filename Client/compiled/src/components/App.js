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
        React.createElement(TitleBanner, null),
        React.createElement(GetAnimals, { onGetAnimalsClick: this.onGetAnimalsClick.bind(this) }),
        React.createElement(CardView, { animals: this.state.animals })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLENBQWdDLFVBQUMsT0FBRCxFQUFhO0FBQzNDLFlBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQWpDLENBQW5CO0FBQ0EsWUFBSSxxQkFBcUIsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsUUFBUSxNQUFqQyxDQUF6Qjs7QUFFQSxZQUFJLGVBQWUsUUFBUSxNQUFSLENBQWUsWUFBZixFQUE0QixDQUE1QixDQUFuQjs7QUFFQSxZQUFJLE9BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUMsYUFBYSxDQUFiLEVBQWdCLElBQWhCLEtBQXlCLE9BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEYsRUFBNEY7QUFDMUYseUJBQWMsUUFBUSxNQUFSLENBQWUsa0JBQWYsRUFBa0MsQ0FBbEMsQ0FBZDtBQUNEOztBQUVELGVBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVM7QUFERyxTQUFkO0FBR0QsT0FiRDtBQWNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNFLG9CQUFDLFdBQUQsT0FERjtRQUVFLG9CQUFDLFVBQUQsSUFBWSxtQkFBbUIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUEvQixHQUZGO1FBR0Usb0JBQUMsUUFBRCxJQUFVLFNBQVMsS0FBSyxLQUFMLENBQVcsT0FBOUI7QUFIRixPQURGO0FBT0Q7Ozs7RUFsQ2UsTUFBTSxTOztBQXFDeEIsT0FBTyxHQUFQLEdBQWEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy9hbmltYWxzOiB0aGlzLnByb3BzLmV4YW1wbGVBbmltYWxzXG4gICAgICBhbmltYWxzOiBbXVxuICAgIH07XG4gIH1cbiAgXG4gIG9uR2V0QW5pbWFsc0NsaWNrKCkge1xuICAgIHRoaXMucHJvcHMudXRpbHMuZ2V0QWxsQW5pbWFscyggKGFuaW1hbHMpID0+IHtcbiAgICAgIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYW5pbWFscy5sZW5ndGgpO1xuICAgICAgdmFyIGJhY2tVcFJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbmltYWxzLmxlbmd0aCk7XG4gICAgICBcbiAgICAgIHZhciByYW5kb21BbmltYWwgPSBhbmltYWxzLnNwbGljZShyYW5kb21OdW1iZXIsMSk7XG4gICAgICAvLyBDaGVjayB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZSBhbmltYWwgaXNuJ3Qgc2hvd24gdHdpY2VcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hbHMubGVuZ3RoICE9PSAwICYmIHJhbmRvbUFuaW1hbFswXS5uYW1lID09PSB0aGlzLnN0YXRlLmFuaW1hbHNbMF0ubmFtZSkge1xuICAgICAgICByYW5kb21BbmltYWwgPWFuaW1hbHMuc3BsaWNlKGJhY2tVcFJhbmRvbU51bWJlciwxKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hbHM6IHJhbmRvbUFuaW1hbFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRpdGxlQmFubmVyIC8+XG4gICAgICAgIDxHZXRBbmltYWxzIG9uR2V0QW5pbWFsc0NsaWNrPXt0aGlzLm9uR2V0QW5pbWFsc0NsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxDYXJkVmlldyBhbmltYWxzPXt0aGlzLnN0YXRlLmFuaW1hbHN9IC8+XG4gICAgICA8L2Rpdj4gIFxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=