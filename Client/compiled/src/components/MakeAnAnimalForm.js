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
      var animal = {
        name: this.refs.formName.value,
        type: this.refs.formType.value,
        diet: this.refs.formDiet.value,
        lifespan: this.refs.formLifespan.value,
        size: this.refs.formSize.value,
        weight: this.refs.formWeight.value,
        image: this.refs.formImage.value
      };

      this.props.onSubmitAnAnimal(animal);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.onMakeAnAnimalSubmit.bind(this) },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01ha2VBbkFuaW1hbEZvcm0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxnQjs7O0FBQ0osNEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtGQUNYLEtBRFc7QUFFbEI7Ozs7eUNBRW9CLEssRUFBTztBQUMxQixZQUFNLGNBQU47QUFDQSxZQUFNLGVBQU47QUFDQSxVQUFJLFNBQVM7QUFDWCxjQUFNLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FEZDtBQUVYLGNBQU0sS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUZkO0FBR1gsY0FBTSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBSGQ7QUFJWCxrQkFBVSxLQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLEtBSnRCO0FBS1gsY0FBTSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBTGQ7QUFNWCxnQkFBUSxLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBTmxCO0FBT1gsZUFBTyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CO0FBUGhCLE9BQWI7O0FBVUEsV0FBSyxLQUFMLENBQVcsZ0JBQVgsQ0FBNEIsTUFBNUI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUEsRUFBTSxVQUFVLEtBQUssb0JBQUwsQ0FBMEIsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBaEI7VUFDRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxNQUEvQixFQUFzQyxLQUFJLFVBQTFDLEdBREY7VUFFRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxNQUEvQixFQUFzQyxLQUFJLFVBQTFDLEdBRkY7VUFHRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxNQUEvQixFQUFzQyxLQUFJLFVBQTFDLEdBSEY7VUFJRSwrQkFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxxQkFBL0IsRUFBcUQsS0FBSSxjQUF6RCxHQUpGO1VBS0UsK0JBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksY0FBL0IsRUFBOEMsS0FBSSxVQUFsRCxHQUxGO1VBTUUsK0JBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksaUJBQS9CLEVBQWlELEtBQUksWUFBckQsR0FORjtVQU9FLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFdBQS9CLEVBQTJDLEtBQUksV0FBL0MsR0FQRjtVQVFFLCtCQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCO0FBUkY7QUFERixPQURGO0FBY0Q7Ozs7RUFwQzRCLE1BQU0sUzs7QUF1Q3JDLE9BQU8sZ0JBQVAsR0FBMEIsZ0JBQTFCIiwiZmlsZSI6Ik1ha2VBbkFuaW1hbEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYWtlQW5BbmltYWxGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIG9uTWFrZUFuQW5pbWFsU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgYW5pbWFsID0ge1xuICAgICAgbmFtZTogdGhpcy5yZWZzLmZvcm1OYW1lLnZhbHVlLFxuICAgICAgdHlwZTogdGhpcy5yZWZzLmZvcm1UeXBlLnZhbHVlLFxuICAgICAgZGlldDogdGhpcy5yZWZzLmZvcm1EaWV0LnZhbHVlLFxuICAgICAgbGlmZXNwYW46IHRoaXMucmVmcy5mb3JtTGlmZXNwYW4udmFsdWUsXG4gICAgICBzaXplOiB0aGlzLnJlZnMuZm9ybVNpemUudmFsdWUsXG4gICAgICB3ZWlnaHQ6IHRoaXMucmVmcy5mb3JtV2VpZ2h0LnZhbHVlLFxuICAgICAgaW1hZ2U6IHRoaXMucmVmcy5mb3JtSW1hZ2UudmFsdWVcbiAgICB9O1xuICAgIFxuICAgIHRoaXMucHJvcHMub25TdWJtaXRBbkFuaW1hbChhbmltYWwpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uTWFrZUFuQW5pbWFsU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHJlZj0nZm9ybU5hbWUnLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGVcIiByZWY9J2Zvcm1UeXBlJy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEaWV0XCIgcmVmPSdmb3JtRGlldCcvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGlmZXNwYW4gKGluIHllYXJzKVwiIHJlZj0nZm9ybUxpZmVzcGFuJy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTaXplIChpbiBmdClcIiByZWY9J2Zvcm1TaXplJy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGluIGxicylcIiByZWY9J2Zvcm1XZWlnaHQnLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlIFVSTFwiIHJlZj0nZm9ybUltYWdlJy8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuTWFrZUFuQW5pbWFsRm9ybSA9IE1ha2VBbkFuaW1hbEZvcm07Il19