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
      animals: _this.props.exampleAnimals
      //animals: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onGetAnimalsClick',
    value: function onGetAnimalsClick() {
      console.log('oh yeah');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUyxNQUFLLEtBQUwsQ0FBVzs7QUFEVCxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUNsQixjQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0Usb0JBQUMsV0FBRCxPQURGO1FBRUUsb0JBQUMsVUFBRCxJQUFZLG1CQUFtQixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQS9CLEdBRkY7UUFHRSxvQkFBQyxRQUFELElBQVUsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUE5QjtBQUhGLE9BREY7QUFPRDs7OztFQXJCZSxNQUFNLFM7O0FBd0J4QixPQUFPLEdBQVAsR0FBYSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmltYWxzOiB0aGlzLnByb3BzLmV4YW1wbGVBbmltYWxzXG4gICAgICAvL2FuaW1hbHM6IFtdXG4gICAgfTtcbiAgfVxuICBcbiAgb25HZXRBbmltYWxzQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ29oIHllYWgnKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGl0bGVCYW5uZXIgLz5cbiAgICAgICAgPEdldEFuaW1hbHMgb25HZXRBbmltYWxzQ2xpY2s9e3RoaXMub25HZXRBbmltYWxzQ2xpY2suYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPENhcmRWaWV3IGFuaW1hbHM9e3RoaXMuc3RhdGUuYW5pbWFsc30gLz5cbiAgICAgIDwvZGl2PiAgXG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==