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
      'borderColor': 'transparent',
      borderWidth: '4px'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0d1ZXNzRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLHFCQUFlLGFBREo7QUFFWCxtQkFBYTtBQUZGLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBRVEsSyxFQUFPO0FBQ2QsWUFBTSxjQUFOO0FBQ0EsV0FBSyxLQUFMLENBQVcsaUJBQVg7O0FBRUEsVUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBakM7QUFDQSxVQUFJLE1BQU0sV0FBTixPQUF3QixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWxCLENBQXVCLFdBQXZCLEVBQTVCLEVBQWtFO0FBQ2hFLGFBQUssUUFBTCxDQUFjLEVBQUMsZUFBZSxPQUFoQixFQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxRQUFMLENBQWMsRUFBQyxlQUFlLEtBQWhCLEVBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQTtRQUNFO0FBQUE7VUFBQSxFQUFNLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtVQUNFLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLDBCQUEvQixFQUEwRCxLQUFJLFlBQTlELEVBQTJFLE9BQU8sS0FBSyxLQUF2RixHQURGO1VBRUUsK0JBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFGRjtBQURGLE9BREY7QUFRRDs7OztFQTlCcUIsTUFBTSxTOztBQWlDOUIsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Ikd1ZXNzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEd1ZXNzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAnYm9yZGVyQ29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyV2lkdGg6ICc0cHgnXG4gICAgfVxuICB9XG4gIFxuICBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkd1ZXNzRm9ybVN1Ym1pdCgpO1xuICAgIFxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmVmcy5ndWVzc1ZhbHVlLnZhbHVlO1xuICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnByb3BzLmFuaW1hbC5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeydib3JkZXJDb2xvcic6ICdncmVlbid9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7J2JvcmRlckNvbG9yJzogJ3JlZCd9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfSA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSB0aGluayBpdCBpcz9cIiByZWY9J2d1ZXNzVmFsdWUnIHN0eWxlPXt0aGlzLnN0YXRlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvdGQ+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5HdWVzc0Zvcm0gPSBHdWVzc0Zvcm07Il19