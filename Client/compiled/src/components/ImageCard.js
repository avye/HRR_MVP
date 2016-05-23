"use strict";

var ImageCard = function ImageCard(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      React.createElement("img", { src: props.animal.image })
    ),
    React.createElement(
      "td",
      null,
      props.animal.name
    )
  );
};

window.ImageCard = ImageCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtJQUFBO0lBQ0U7QUFBQTtNQUFBO01BQ0UsNkJBQUssS0FBSyxNQUFNLE1BQU4sQ0FBYSxLQUF2QjtBQURGLEtBREY7SUFJRTtBQUFBO01BQUE7TUFBSyxNQUFNLE1BQU4sQ0FBYTtBQUFsQjtBQUpGLEdBRGM7QUFBQSxDQUFoQjs7QUFTQSxPQUFPLFNBQVAsR0FBbUIsU0FBbkIiLCJmaWxlIjoiSW1hZ2VDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEltYWdlQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmFuaW1hbC5pbWFnZX0gLz5cbiAgICA8L3RkPlxuICAgIDx0ZD57cHJvcHMuYW5pbWFsLm5hbWV9PC90ZD5cbiAgPC90cj5cbik7XG5cbndpbmRvdy5JbWFnZUNhcmQgPSBJbWFnZUNhcmQ7Il19