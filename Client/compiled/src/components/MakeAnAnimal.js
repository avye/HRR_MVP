"use strict";

var MakeAnAnimal = function MakeAnAnimal(props) {
  return React.createElement(
    "button",
    { type: "button", onClick: function onClick() {
        return props.onMakeAnAnimalClick();
      }, className: "makeAnAnimalButton" },
    "Add an animal"
  );
};

window.MakeAnAnimal = MakeAnAnimal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01ha2VBbkFuaW1hbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsU0FBZixZQUFlLENBQUMsS0FBRDtBQUFBLFNBQ2pCO0FBQUE7SUFBQSxFQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsZUFBTSxNQUFNLG1CQUFOLEVBQU47QUFBQSxPQUEvQixFQUFrRSxXQUFVLG9CQUE1RTtJQUFBO0FBQUEsR0FEaUI7QUFBQSxDQUFuQjs7QUFJQSxPQUFPLFlBQVAsR0FBc0IsWUFBdEIiLCJmaWxlIjoiTWFrZUFuQW5pbWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1ha2VBbkFuaW1hbCA9IChwcm9wcykgPT4gKFxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbk1ha2VBbkFuaW1hbENsaWNrKCl9IGNsYXNzTmFtZT1cIm1ha2VBbkFuaW1hbEJ1dHRvblwiPkFkZCBhbiBhbmltYWw8L2J1dHRvbj5cbilcblxud2luZG93Lk1ha2VBbkFuaW1hbCA9IE1ha2VBbkFuaW1hbDsiXX0=