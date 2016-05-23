"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCard = function (_React$Component) {
  _inherits(ImageCard, _React$Component);

  function ImageCard(props) {
    _classCallCheck(this, ImageCard);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCard).call(this, props));

    _this.state = {
      answered: false
    };
    return _this;
  }

  _createClass(ImageCard, [{
    key: "onGuessFormSubmit",
    value: function onGuessFormSubmit() {
      this.setState({ answered: true });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("img", { src: this.props.animal.image })
        ),
        React.createElement(GuessForm, { onGuessFormSubmit: this.onGuessFormSubmit.bind(this), animal: this.props.animal }),
        this.state.answered ? React.createElement(AnswerCard, { animal: this.props.animal }) : null
      );
    }
  }]);

  return ImageCard;
}(React.Component);

window.ImageCard = ImageCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFVO0FBREMsS0FBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxVQUFVLElBQVgsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNFO0FBQUE7VUFBQTtVQUNFLDZCQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixLQUE1QjtBQURGLFNBREY7UUFJRSxvQkFBQyxTQUFELElBQVcsbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUIsRUFBaUUsUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFwRixHQUpGO1FBS0csS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixvQkFBQyxVQUFELElBQVksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUEvQixHQUF0QixHQUFpRTtBQUxwRSxPQURGO0FBU0Q7Ozs7RUF0QnFCLE1BQU0sUzs7QUF5QjlCLE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJJbWFnZUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbWFnZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBcbiAgb25HdWVzc0Zvcm1TdWJtaXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyZWQ6IHRydWV9KTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbmltYWwuaW1hZ2V9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDxHdWVzc0Zvcm0gb25HdWVzc0Zvcm1TdWJtaXQ9e3RoaXMub25HdWVzc0Zvcm1TdWJtaXQuYmluZCh0aGlzKX0gYW5pbWFsPXt0aGlzLnByb3BzLmFuaW1hbH0vPlxuICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJlZCA/IDxBbnN3ZXJDYXJkIGFuaW1hbD17dGhpcy5wcm9wcy5hbmltYWx9Lz4gOiBudWxsfVxuICAgICAgPC90cj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LkltYWdlQ2FyZCA9IEltYWdlQ2FyZDsiXX0=