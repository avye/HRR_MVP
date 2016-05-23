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
      clicked: false
    };
    return _this;
  }

  _createClass(ImageCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("img", { src: this.props.animal.image, onClick: function onClick() {
              return _this2.setState({ clicked: !_this2.state.clicked });
            } })
        ),
        this.state.clicked ? React.createElement(AnswerCard, { animal: this.props.animal }) : null
      );
    }
  }]);

  return ImageCard;
}(React.Component);

window.ImageCard = ImageCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGVBQVM7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUE7VUFDRSw2QkFBSyxLQUFLLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBNUIsRUFBbUMsU0FBUztBQUFBLHFCQUFLLE9BQUssUUFBTCxDQUFjLEVBQUMsU0FBUyxDQUFDLE9BQUssS0FBTCxDQUFXLE9BQXRCLEVBQWQsQ0FBTDtBQUFBLGFBQTVDO0FBREYsU0FERjtRQUlHLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsb0JBQUMsVUFBRCxJQUFZLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBL0IsR0FBckIsR0FBZ0U7QUFKbkUsT0FERjtBQVFEOzs7O0VBakJxQixNQUFNLFM7O0FBb0I5QixPQUFPLFNBQVAsR0FBbUIsU0FBbkIiLCJmaWxlIjoiSW1hZ2VDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW1hZ2VDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbmltYWwuaW1hZ2V9IG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZDogIXRoaXMuc3RhdGUuY2xpY2tlZH0pfS8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNsaWNrZWQgPyA8QW5zd2VyQ2FyZCBhbmltYWw9e3RoaXMucHJvcHMuYW5pbWFsfS8+IDogbnVsbH1cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5JbWFnZUNhcmQgPSBJbWFnZUNhcmQ7Il19