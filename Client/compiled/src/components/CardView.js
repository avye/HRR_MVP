"use strict";

var CardView = function CardView(props) {
  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      props.animals.map(function (element) {
        return React.createElement(ImageCard, { animal: element, key: element.name });
      })
    )
  );
};

window.CardView = CardView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmRWaWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksV0FBVyxTQUFYLFFBQVcsQ0FBQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0lBQUE7SUFDRTtBQUFBO01BQUE7TUFDRyxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQ0M7QUFBQSxlQUNBLG9CQUFDLFNBQUQsSUFBVyxRQUFRLE9BQW5CLEVBQTRCLEtBQUssUUFBUSxJQUF6QyxHQURBO0FBQUEsT0FERDtBQURIO0FBREYsR0FEYTtBQUFBLENBQWY7O0FBV0EsT0FBTyxRQUFQLEdBQWtCLFFBQWxCIiwiZmlsZSI6IkNhcmRWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhcmRWaWV3ID0gKHByb3BzKSA9PiAoXG4gIDx0YWJsZT5cbiAgICA8dGJvZHk+XG4gICAgICB7cHJvcHMuYW5pbWFscy5tYXAoXG4gICAgICAgIGVsZW1lbnQgPT5cbiAgICAgICAgPEltYWdlQ2FyZCBhbmltYWw9e2VsZW1lbnR9IGtleT17ZWxlbWVudC5uYW1lfSAvPlxuICAgICAgKX1cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuKTtcblxud2luZG93LkNhcmRWaWV3ID0gQ2FyZFZpZXc7Il19