"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetAnimals = function (_React$Component) {
  _inherits(GetAnimals, _React$Component);

  function GetAnimals(props) {
    _classCallCheck(this, GetAnimals);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GetAnimals).call(this, props));
  }

  _createClass(GetAnimals, [{
    key: "onGetAnimalsButton",
    value: function onGetAnimalsButton() {
      // do stuff
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "button", onClick: this.onGetAnimalsButton.bind(this) },
        "Get some animals!"
      );
    }
  }]);

  return GetAnimals;
}(React.Component);

window.GetAnimals = GetAnimals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dldEFuaW1hbHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxVOzs7QUFDSixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUZBQ1gsS0FEVztBQUVsQjs7Ozt5Q0FFb0I7O0FBRXBCOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7UUFBQSxFQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBL0I7UUFBQTtBQUFBLE9BREY7QUFHRDs7OztFQWJzQixNQUFNLFM7O0FBZ0IvQixPQUFPLFVBQVAsR0FBb0IsVUFBcEIiLCJmaWxlIjoiR2V0QW5pbWFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdldEFuaW1hbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgb25HZXRBbmltYWxzQnV0dG9uKCkge1xuICAgIC8vIGRvIHN0dWZmXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vbkdldEFuaW1hbHNCdXR0b24uYmluZCh0aGlzKX0+R2V0IHNvbWUgYW5pbWFscyE8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5HZXRBbmltYWxzID0gR2V0QW5pbWFsczsiXX0=