"use strict";

var AnswerCard = function AnswerCard(props) {
    return React.createElement(
        "td",
        null,
        React.createElement(
            "p",
            null,
            "Name: ",
            props.animal.name
        ),
        React.createElement(
            "p",
            null,
            "Type: ",
            props.animal.type
        ),
        React.createElement(
            "p",
            null,
            "Diet: ",
            props.animal.diet
        ),
        React.createElement(
            "p",
            null,
            "Life span: ",
            props.animal.lifespan,
            " years"
        ),
        React.createElement(
            "p",
            null,
            "Size: ",
            props.animal.size,
            " ft"
        ),
        React.createElement(
            "p",
            null,
            "Weight: ",
            props.animal.weight,
            " lbs"
        )
    );
};

window.AnswerCard = AnswerCard;

//(name, type, diet, lifespan, size, weight, image)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fuc3dlckNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQ7QUFBQSxXQUNmO0FBQUE7UUFBQTtRQUNJO0FBQUE7WUFBQTtZQUFBO1lBQVUsTUFBTSxNQUFOLENBQWE7QUFBdkIsU0FESjtRQUVJO0FBQUE7WUFBQTtZQUFBO1lBQVUsTUFBTSxNQUFOLENBQWE7QUFBdkIsU0FGSjtRQUdJO0FBQUE7WUFBQTtZQUFBO1lBQVUsTUFBTSxNQUFOLENBQWE7QUFBdkIsU0FISjtRQUlJO0FBQUE7WUFBQTtZQUFBO1lBQWUsTUFBTSxNQUFOLENBQWEsUUFBNUI7WUFBQTtBQUFBLFNBSko7UUFLSTtBQUFBO1lBQUE7WUFBQTtZQUFVLE1BQU0sTUFBTixDQUFhLElBQXZCO1lBQUE7QUFBQSxTQUxKO1FBTUk7QUFBQTtZQUFBO1lBQUE7WUFBWSxNQUFNLE1BQU4sQ0FBYSxNQUF6QjtZQUFBO0FBQUE7QUFOSixLQURlO0FBQUEsQ0FBakI7O0FBV0EsT0FBTyxVQUFQLEdBQW9CLFVBQXBCIiwiZmlsZSI6IkFuc3dlckNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQW5zd2VyQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8dGQ+XG4gICAgICA8cD5OYW1lOiB7cHJvcHMuYW5pbWFsLm5hbWV9PC9wPlxuICAgICAgPHA+VHlwZToge3Byb3BzLmFuaW1hbC50eXBlfTwvcD5cbiAgICAgIDxwPkRpZXQ6IHtwcm9wcy5hbmltYWwuZGlldH08L3A+XG4gICAgICA8cD5MaWZlIHNwYW46IHtwcm9wcy5hbmltYWwubGlmZXNwYW59IHllYXJzPC9wPlxuICAgICAgPHA+U2l6ZToge3Byb3BzLmFuaW1hbC5zaXplfSBmdDwvcD5cbiAgICAgIDxwPldlaWdodDoge3Byb3BzLmFuaW1hbC53ZWlnaHR9IGxiczwvcD5cbiAgPC90ZD5cbik7XG5cbndpbmRvdy5BbnN3ZXJDYXJkID0gQW5zd2VyQ2FyZDtcblxuLy8obmFtZSwgdHlwZSwgZGlldCwgbGlmZXNwYW4sIHNpemUsIHdlaWdodCwgaW1hZ2UpIl19