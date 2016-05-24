"use strict";

var utils = {
  getAllAnimals: function getAllAnimals(callback) {
    // Do I need to update url?
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/api/animals",
      contentType: 'application/json',
      success: function success(data) {
        callback(data);
      }
    });
  },

  addOneAnimal: function addOneAnimal(animal, callback) {
    var data = JSON.stringify(animal);

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/animals",
      contentType: 'application/json',
      data: data,
      success: function success(data) {
        callback();
      }
    });
  }
};

window.utils = utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUTtBQUNWLGlCQUFnQix1QkFBQyxRQUFELEVBQWM7O0FBRTVCLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxLQUREO0FBRUwsV0FBSyxtQ0FGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUIsaUJBQVMsSUFBVDtBQUNEO0FBTkksS0FBUDtBQVFELEdBWFM7O0FBYVYsZ0JBQWMsc0JBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBWDs7QUFFQSxNQUFFLElBQUYsQ0FBTztBQUNMLFlBQU0sTUFERDtBQUVMLFdBQUssbUNBRkE7QUFHTCxtQkFBYSxrQkFIUjtBQUlMLFlBQU0sSUFKRDtBQUtMLGVBQVMsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzlCO0FBQ0Q7QUFQSSxLQUFQO0FBU0Q7QUF6QlMsQ0FBWjs7QUE0QkEsT0FBTyxLQUFQLEdBQWUsS0FBZiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB1dGlscyA9IHtcbiAgZ2V0QWxsQW5pbWFsczogIChjYWxsYmFjaykgPT4ge1xuICAgIC8vIERvIEkgbmVlZCB0byB1cGRhdGUgdXJsP1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYW5pbWFsc1wiLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgXG4gIGFkZE9uZUFuaW1hbDogKGFuaW1hbCwgY2FsbGJhY2spID0+IHtcbiAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGFuaW1hbCk7XG4gICAgXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYW5pbWFsc1wiLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn07XG5cbndpbmRvdy51dGlscyA9IHV0aWxzOyJdfQ==