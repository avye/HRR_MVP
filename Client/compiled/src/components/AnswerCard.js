"use strict";

var AnswerCard = function AnswerCard(props) {
  return React.createElement(
    "td",
    null,
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Name: ",
        props.animal.name
      ),
      React.createElement(
        "li",
        null,
        "Type: ",
        props.animal.type
      ),
      React.createElement(
        "li",
        null,
        "Diet: ",
        props.animal.diet
      ),
      React.createElement(
        "li",
        null,
        "Life span: ",
        props.animal.lifespan,
        " years"
      ),
      React.createElement(
        "li",
        null,
        "Size: ",
        props.animal.size,
        " ft"
      ),
      React.createElement(
        "li",
        null,
        "Weight: ",
        props.animal.weight,
        " lbs"
      )
    )
  );
};

window.AnswerCard = AnswerCard;

//(name, type, diet, lifespan, size, weight, image)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fuc3dlckNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7SUFBQTtJQUNFO0FBQUE7TUFBQTtNQUNFO0FBQUE7UUFBQTtRQUFBO1FBQVcsTUFBTSxNQUFOLENBQWE7QUFBeEIsT0FERjtNQUVFO0FBQUE7UUFBQTtRQUFBO1FBQVcsTUFBTSxNQUFOLENBQWE7QUFBeEIsT0FGRjtNQUdFO0FBQUE7UUFBQTtRQUFBO1FBQVcsTUFBTSxNQUFOLENBQWE7QUFBeEIsT0FIRjtNQUlFO0FBQUE7UUFBQTtRQUFBO1FBQWdCLE1BQU0sTUFBTixDQUFhLFFBQTdCO1FBQUE7QUFBQSxPQUpGO01BS0U7QUFBQTtRQUFBO1FBQUE7UUFBVyxNQUFNLE1BQU4sQ0FBYSxJQUF4QjtRQUFBO0FBQUEsT0FMRjtNQU1FO0FBQUE7UUFBQTtRQUFBO1FBQWEsTUFBTSxNQUFOLENBQWEsTUFBMUI7UUFBQTtBQUFBO0FBTkY7QUFERixHQURlO0FBQUEsQ0FBakI7O0FBYUEsT0FBTyxVQUFQLEdBQW9CLFVBQXBCIiwiZmlsZSI6IkFuc3dlckNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQW5zd2VyQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8dGQ+XG4gICAgPHVsPlxuICAgICAgPGxpPk5hbWU6IHtwcm9wcy5hbmltYWwubmFtZX08L2xpPlxuICAgICAgPGxpPlR5cGU6IHtwcm9wcy5hbmltYWwudHlwZX08L2xpPlxuICAgICAgPGxpPkRpZXQ6IHtwcm9wcy5hbmltYWwuZGlldH08L2xpPlxuICAgICAgPGxpPkxpZmUgc3Bhbjoge3Byb3BzLmFuaW1hbC5saWZlc3Bhbn0geWVhcnM8L2xpPlxuICAgICAgPGxpPlNpemU6IHtwcm9wcy5hbmltYWwuc2l6ZX0gZnQ8L2xpPlxuICAgICAgPGxpPldlaWdodDoge3Byb3BzLmFuaW1hbC53ZWlnaHR9IGxiczwvbGk+XG4gICAgPC91bD5cbiAgPC90ZD5cbik7XG5cbndpbmRvdy5BbnN3ZXJDYXJkID0gQW5zd2VyQ2FyZDtcblxuLy8obmFtZSwgdHlwZSwgZGlldCwgbGlmZXNwYW4sIHNpemUsIHdlaWdodCwgaW1hZ2UpIl19