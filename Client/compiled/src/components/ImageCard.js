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
      this.setState({ answered: !this.state.answered });
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
        React.createElement(GuessForm, { onGuessFormSubmit: this.onGuessFormSubmit.bind(this) }),
        this.state.answered ? React.createElement(AnswerCard, { animal: this.props.animal }) : null
      );
    }
  }]);

  return ImageCard;
}(React.Component);

window.ImageCard = ImageCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFVO0FBREMsS0FBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxVQUFVLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBdkIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNFO0FBQUE7VUFBQTtVQUNFLDZCQUFLLEtBQUssS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixLQUE1QjtBQURGLFNBREY7UUFJRSxvQkFBQyxTQUFELElBQVcsbUJBQW1CLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUIsR0FKRjtRQUtHLEtBQUssS0FBTCxDQUFXLFFBQVgsR0FBc0Isb0JBQUMsVUFBRCxJQUFZLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBL0IsR0FBdEIsR0FBaUU7QUFMcEUsT0FERjtBQVNEOzs7O0VBdEJxQixNQUFNLFM7O0FBeUI5QixPQUFPLFNBQVAsR0FBbUIsU0FBbkIiLCJmaWxlIjoiSW1hZ2VDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW1hZ2VDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuc3dlcmVkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgXG4gIG9uR3Vlc3NGb3JtU3VibWl0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcmVkOiAhdGhpcy5zdGF0ZS5hbnN3ZXJlZH0pO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmFuaW1hbC5pbWFnZX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPEd1ZXNzRm9ybSBvbkd1ZXNzRm9ybVN1Ym1pdD17dGhpcy5vbkd1ZXNzRm9ybVN1Ym1pdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcmVkID8gPEFuc3dlckNhcmQgYW5pbWFsPXt0aGlzLnByb3BzLmFuaW1hbH0vPiA6IG51bGx9XG4gICAgICA8L3RyPlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuSW1hZ2VDYXJkID0gSW1hZ2VDYXJkOyJdfQ==