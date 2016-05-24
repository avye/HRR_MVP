"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MakeAnAnimalForm = function (_React$Component) {
  _inherits(MakeAnAnimalForm, _React$Component);

  function MakeAnAnimalForm(props) {
    _classCallCheck(this, MakeAnAnimalForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MakeAnAnimalForm).call(this, props));
  }

  _createClass(MakeAnAnimalForm, [{
    key: "onMakeAnAnimalSubmit",
    value: function onMakeAnAnimalSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      var value = this.refs.todoValue.value;
      this.props.onFormSubmit(value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.onSubmitFunc.bind(this) },
          React.createElement("input", { type: "text", placeholder: "Name", ref: "formName" }),
          React.createElement("input", { type: "text", placeholder: "Type", ref: "formType" }),
          React.createElement("input", { type: "text", placeholder: "Diet", ref: "formDiet" }),
          React.createElement("input", { type: "text", placeholder: "Lifespan (in years)", ref: "formLifespan" }),
          React.createElement("input", { type: "text", placeholder: "Size (in ft)", ref: "formSize" }),
          React.createElement("input", { type: "text", placeholder: "Weight (in lbs)", ref: "formWeight" }),
          React.createElement("input", { type: "text", placeholder: "Image URL", ref: "formImage" }),
          React.createElement("input", { type: "submit", value: "Add" })
        )
      );
    }
  }]);

  return MakeAnAnimalForm;
}(React.Component);

window.MakeAnAnimalForm = MakeAnAnimalForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01ha2VBbkFuaW1hbEZvcm0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxnQjs7O0FBQ0osNEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtGQUNYLEtBRFc7QUFFbEI7Ozs7eUNBRW9CLEssRUFBTztBQUMxQixZQUFNLGNBQU47QUFDQSxZQUFNLGVBQU47QUFDQSxVQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsU0FBVixDQUFvQixLQUFoQztBQUNBLFdBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBeEI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUEsRUFBTSxVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFoQjtVQUNFLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLE1BQS9CLEVBQXNDLEtBQUksVUFBMUMsR0FERjtVQUVFLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLE1BQS9CLEVBQXNDLEtBQUksVUFBMUMsR0FGRjtVQUdFLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLE1BQS9CLEVBQXNDLEtBQUksVUFBMUMsR0FIRjtVQUlFLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLHFCQUEvQixFQUFxRCxLQUFJLGNBQXpELEdBSkY7VUFLRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxjQUEvQixFQUE4QyxLQUFJLFVBQWxELEdBTEY7VUFNRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxpQkFBL0IsRUFBaUQsS0FBSSxZQUFyRCxHQU5GO1VBT0UsK0JBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksV0FBL0IsRUFBMkMsS0FBSSxXQUEvQyxHQVBGO1VBUUUsK0JBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0I7QUFSRjtBQURGLE9BREY7QUFjRDs7OztFQTNCNEIsTUFBTSxTOztBQThCckMsT0FBTyxnQkFBUCxHQUEwQixnQkFBMUIiLCJmaWxlIjoiTWFrZUFuQW5pbWFsRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1ha2VBbkFuaW1hbEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgb25NYWtlQW5BbmltYWxTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmVmcy50b2RvVmFsdWUudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbkZvcm1TdWJtaXQodmFsdWUpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0RnVuYy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiByZWY9J2Zvcm1OYW1lJy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlXCIgcmVmPSdmb3JtVHlwZScvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGlldFwiIHJlZj0nZm9ybURpZXQnLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxpZmVzcGFuIChpbiB5ZWFycylcIiByZWY9J2Zvcm1MaWZlc3BhbicvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2l6ZSAoaW4gZnQpXCIgcmVmPSdmb3JtU2l6ZScvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2VpZ2h0IChpbiBsYnMpXCIgcmVmPSdmb3JtV2VpZ2h0Jy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZSBVUkxcIiByZWY9J2Zvcm1JbWFnZScvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93Lk1ha2VBbkFuaW1hbEZvcm0gPSBNYWtlQW5BbmltYWxGb3JtOyJdfQ==