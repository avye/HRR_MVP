"use strict";

var ImageCard = function ImageCard(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.animal.name
    ),
    React.createElement(
      "td",
      null,
      React.createElement("img", { src: props.animal.image })
    )
  );
};

window.ImageCard = ImageCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtJQUFBO0lBQ0U7QUFBQTtNQUFBO01BQUssTUFBTSxNQUFOLENBQWE7QUFBbEIsS0FERjtJQUVFO0FBQUE7TUFBQTtNQUNFLDZCQUFLLEtBQUssTUFBTSxNQUFOLENBQWEsS0FBdkI7QUFERjtBQUZGLEdBRGM7QUFBQSxDQUFoQjs7QUFTQSxPQUFPLFNBQVAsR0FBbUIsU0FBbkIiLCJmaWxlIjoiSW1hZ2VDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEltYWdlQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8dHI+XG4gICAgPHRkPntwcm9wcy5hbmltYWwubmFtZX08L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5hbmltYWwuaW1hZ2V9IC8+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cbndpbmRvdy5JbWFnZUNhcmQgPSBJbWFnZUNhcmQ7Il19