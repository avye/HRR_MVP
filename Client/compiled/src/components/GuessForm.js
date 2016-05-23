'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuessForm = function (_React$Component) {
  _inherits(GuessForm, _React$Component);

  function GuessForm(props) {
    _classCallCheck(this, GuessForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GuessForm).call(this, props));

    _this.state = {
      'borderColor': 'transparent'
    };
    return _this;
  }

  _createClass(GuessForm, [{
    key: 'onSubmit',
    value: function onSubmit(event) {
      event.preventDefault();
      this.props.onGuessFormSubmit();

      var value = this.refs.guessValue.value;
      if (value.toLowerCase() === this.props.animal.name.toLowerCase()) {
        this.setState({ 'borderColor': 'green' });
      } else {
        this.setState({ 'borderColor': 'red' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'td',
        null,
        React.createElement(
          'form',
          { onSubmit: this.onSubmit.bind(this) },
          React.createElement('input', { type: 'text', placeholder: 'What do you think it is?', ref: 'guessValue', style: this.state }),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return GuessForm;
}(React.Component);

window.GuessForm = GuessForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0d1ZXNzRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFlO0FBREosS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUSxLLEVBQU87QUFDZCxZQUFNLGNBQU47QUFDQSxXQUFLLEtBQUwsQ0FBVyxpQkFBWDs7QUFFQSxVQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixLQUFqQztBQUNBLFVBQUksTUFBTSxXQUFOLE9BQXdCLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBbEIsQ0FBdUIsV0FBdkIsRUFBNUIsRUFBa0U7QUFDaEUsYUFBSyxRQUFMLENBQWMsRUFBQyxlQUFlLE9BQWhCLEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsS0FBaEIsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtRQUFBO1FBQ0U7QUFBQTtVQUFBLEVBQU0sVUFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQWhCO1VBQ0UsK0JBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksMEJBQS9CLEVBQTBELEtBQUksWUFBOUQsRUFBMkUsT0FBTyxLQUFLLEtBQXZGLEdBREY7VUFFRSwrQkFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGO0FBREYsT0FERjtBQVFEOzs7O0VBN0JxQixNQUFNLFM7O0FBZ0M5QixPQUFPLFNBQVAsR0FBbUIsU0FBbkIiLCJmaWxlIjoiR3Vlc3NGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3Vlc3NGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdib3JkZXJDb2xvcic6ICd0cmFuc3BhcmVudCdcbiAgICB9XG4gIH1cbiAgXG4gIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uR3Vlc3NGb3JtU3VibWl0KCk7XG4gICAgXG4gICAgdmFyIHZhbHVlID0gdGhpcy5yZWZzLmd1ZXNzVmFsdWUudmFsdWU7XG4gICAgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMucHJvcHMuYW5pbWFsLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7J2JvcmRlckNvbG9yJzogJ2dyZWVuJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsnYm9yZGVyQ29sb3InOiAncmVkJ30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9ID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IHRoaW5rIGl0IGlzP1wiIHJlZj0nZ3Vlc3NWYWx1ZScgc3R5bGU9e3RoaXMuc3RhdGV9Lz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC90ZD5cbiAgICApXG4gIH1cbn1cblxud2luZG93Lkd1ZXNzRm9ybSA9IEd1ZXNzRm9ybTsiXX0=