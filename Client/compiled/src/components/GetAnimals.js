"use strict";

var GetAnimals = function GetAnimals(props) {
  return React.createElement(
    "button",
    { type: "button", onClick: function onClick() {
        return props.onGetAnimalsClick();
      } },
    "Get some animals!"
  );
};

window.GetAnimals = GetAnimals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dldEFuaW1hbHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7SUFBQSxFQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsZUFBTSxNQUFNLGlCQUFOLEVBQU47QUFBQSxPQUEvQjtJQUFBO0FBQUEsR0FEZTtBQUFBLENBQWpCOztBQUlBLE9BQU8sVUFBUCxHQUFvQixVQUFwQiIsImZpbGUiOiJHZXRBbmltYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdldEFuaW1hbHMgPSAocHJvcHMpID0+IChcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25HZXRBbmltYWxzQ2xpY2soKX0+R2V0IHNvbWUgYW5pbWFscyE8L2J1dHRvbj5cbilcblxud2luZG93LkdldEFuaW1hbHMgPSBHZXRBbmltYWxzOyJdfQ==