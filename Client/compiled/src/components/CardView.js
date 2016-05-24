"use strict";

var CardView = function CardView(props) {
  return React.createElement(
    "table",
    { className: "cardTable" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmRWaWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksV0FBVyxTQUFYLFFBQVcsQ0FBQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0lBQUEsRUFBTyxXQUFVLFdBQWpCO0lBQ0U7QUFBQTtNQUFBO01BQ0csTUFBTSxPQUFOLENBQWMsR0FBZCxDQUNDO0FBQUEsZUFDQSxvQkFBQyxTQUFELElBQVcsUUFBUSxPQUFuQixFQUE0QixLQUFLLFFBQVEsSUFBekMsR0FEQTtBQUFBLE9BREQ7QUFESDtBQURGLEdBRGE7QUFBQSxDQUFmOztBQVdBLE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJDYXJkVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDYXJkVmlldyA9IChwcm9wcykgPT4gKFxuICA8dGFibGUgY2xhc3NOYW1lPVwiY2FyZFRhYmxlXCI+XG4gICAgPHRib2R5PlxuICAgICAge3Byb3BzLmFuaW1hbHMubWFwKFxuICAgICAgICBlbGVtZW50ID0+XG4gICAgICAgIDxJbWFnZUNhcmQgYW5pbWFsPXtlbGVtZW50fSBrZXk9e2VsZW1lbnQubmFtZX0gLz5cbiAgICAgICl9XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbik7XG5cbndpbmRvdy5DYXJkVmlldyA9IENhcmRWaWV3OyJdfQ==