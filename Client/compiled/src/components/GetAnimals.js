"use strict";

var GetAnimals = function GetAnimals(props) {
  return React.createElement(
    "button",
    { type: "button", onClick: function onClick() {
        return props.onGetAnimalsClick();
      }, className: "getAnimalsButton" },
    "Get some animals!"
  );
};

window.GetAnimals = GetAnimals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dldEFuaW1hbHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7SUFBQSxFQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsZUFBTSxNQUFNLGlCQUFOLEVBQU47QUFBQSxPQUEvQixFQUFnRSxXQUFVLGtCQUExRTtJQUFBO0FBQUEsR0FEZTtBQUFBLENBQWpCOztBQUlBLE9BQU8sVUFBUCxHQUFvQixVQUFwQiIsImZpbGUiOiJHZXRBbmltYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdldEFuaW1hbHMgPSAocHJvcHMpID0+IChcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25HZXRBbmltYWxzQ2xpY2soKX0gY2xhc3NOYW1lPVwiZ2V0QW5pbWFsc0J1dHRvblwiPkdldCBzb21lIGFuaW1hbHMhPC9idXR0b24+XG4pXG5cbndpbmRvdy5HZXRBbmltYWxzID0gR2V0QW5pbWFsczsiXX0=