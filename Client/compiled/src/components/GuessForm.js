"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuessForm = function (_React$Component) {
  _inherits(GuessForm, _React$Component);

  function GuessForm(props) {
    _classCallCheck(this, GuessForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GuessForm).call(this, props));
  }

  _createClass(GuessForm, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      console.log('it hit');
      console.log(event);
      event.preventDefault();
      var value = this.refs.guessValue.value;
      console.log(value);
      this.props.onGuessFormSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(
          "form",
          { onSubmit: this.onSubmit.bind(this) },
          React.createElement("input", { type: "text", placeholder: "What do you think it is?", ref: "guessValue" }),
          React.createElement("input", { type: "submit", value: "Submit" })
        )
      );
    }
  }]);

  return GuessForm;
}(React.Component);

window.GuessForm = GuessForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0d1ZXNzRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFM7OztBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3RkFDWCxLQURXO0FBRWxCOzs7OzZCQUVRLEssRUFBTztBQUNkLGNBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxjQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsWUFBTSxjQUFOO0FBQ0EsVUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBakM7QUFDQSxjQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsV0FBSyxLQUFMLENBQVcsaUJBQVg7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUEsRUFBTSxVQUFVLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7VUFDRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSwwQkFBL0IsRUFBMEQsS0FBSSxZQUE5RCxHQURGO1VBRUUsK0JBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFGRjtBQURGLE9BREY7QUFRRDs7OztFQXZCcUIsTUFBTSxTOztBQTBCOUIsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Ikd1ZXNzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEd1ZXNzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIFxuICBvblN1Ym1pdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdpdCBoaXQnKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnJlZnMuZ3Vlc3NWYWx1ZS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5wcm9wcy5vbkd1ZXNzRm9ybVN1Ym1pdCgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSB0aGluayBpdCBpcz9cIiByZWY9J2d1ZXNzVmFsdWUnLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC90ZD5cbiAgICApXG4gIH1cbn1cblxud2luZG93Lkd1ZXNzRm9ybSA9IEd1ZXNzRm9ybTsiXX0=