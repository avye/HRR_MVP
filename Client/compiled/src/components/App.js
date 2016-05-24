'use strict';

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
    key: 'onGetAnimalsClick',
    value: function onGetAnimalsClick() {
      var _this2 = this;

      console.log('oh yeah');
      // do something with a randomizer so it only shows two animals at a time

      this.props.utils.getAllAnimals(function (animals) {
        var randomNumber = Math.floor(Math.random() * animals.length);
        var randomAnimal = animals.splice(randomNumber, 1);
        _this2.setState({
          animals: randomAnimal
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhOztBQUVYLGVBQVM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixjQUFRLEdBQVIsQ0FBWSxTQUFaOzs7QUFHQSxXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLGFBQWpCLENBQWdDLFVBQUMsT0FBRCxFQUFhO0FBQzNDLFlBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxRQUFRLE1BQWpDLENBQW5CO0FBQ0EsWUFBSSxlQUFlLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNEIsQ0FBNUIsQ0FBbkI7QUFDQSxlQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFTO0FBREcsU0FBZDtBQUdELE9BTkQ7QUFPRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRSxvQkFBQyxXQUFELE9BREY7UUFFRSxvQkFBQyxVQUFELElBQVksbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBL0IsR0FGRjtRQUdFLG9CQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUssS0FBTCxDQUFXLE9BQTlCO0FBSEYsT0FERjtBQU9EOzs7O0VBOUJlLE1BQU0sUzs7QUFpQ3hCLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vYW5pbWFsczogdGhpcy5wcm9wcy5leGFtcGxlQW5pbWFsc1xuICAgICAgYW5pbWFsczogW11cbiAgICB9O1xuICB9XG4gIFxuICBvbkdldEFuaW1hbHNDbGljaygpIHtcbiAgICBjb25zb2xlLmxvZygnb2ggeWVhaCcpO1xuICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIGEgcmFuZG9taXplciBzbyBpdCBvbmx5IHNob3dzIHR3byBhbmltYWxzIGF0IGEgdGltZVxuICAgIFxuICAgIHRoaXMucHJvcHMudXRpbHMuZ2V0QWxsQW5pbWFscyggKGFuaW1hbHMpID0+IHtcbiAgICAgIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYW5pbWFscy5sZW5ndGgpO1xuICAgICAgdmFyIHJhbmRvbUFuaW1hbCA9IGFuaW1hbHMuc3BsaWNlKHJhbmRvbU51bWJlciwxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYWxzOiByYW5kb21BbmltYWxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUaXRsZUJhbm5lciAvPlxuICAgICAgICA8R2V0QW5pbWFscyBvbkdldEFuaW1hbHNDbGljaz17dGhpcy5vbkdldEFuaW1hbHNDbGljay5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8Q2FyZFZpZXcgYW5pbWFscz17dGhpcy5zdGF0ZS5hbmltYWxzfSAvPlxuICAgICAgPC9kaXY+ICBcbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19