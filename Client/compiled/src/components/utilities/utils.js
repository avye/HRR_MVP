"use strict";

var utils = {
  getAllAnimals: function getAllAnimals(callback) {

    $.ajax({
      type: "GET",
      url: "/api/animals",
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
      url: "/api/animals",
      contentType: 'application/json',
      data: data,
      success: function success(data) {
        callback();
      }
    });
  }
};

window.utils = utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUTtBQUNWLGlCQUFnQix1QkFBQyxRQUFELEVBQWM7O0FBRTVCLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxLQUREO0FBRUwsV0FBSyxjQUZBO0FBR0wsbUJBQWEsa0JBSFI7QUFJTCxlQUFTLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QjtBQUM5QixpQkFBUyxJQUFUO0FBQ0Q7QUFOSSxLQUFQO0FBUUQsR0FYUzs7QUFhVixnQkFBYyxzQkFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUNsQyxRQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsTUFBZixDQUFYOztBQUVBLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxNQUREO0FBRUwsV0FBSyxjQUZBO0FBR0wsbUJBQWEsa0JBSFI7QUFJTCxZQUFNLElBSkQ7QUFLTCxlQUFTLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QjtBQUM5QjtBQUNEO0FBUEksS0FBUDtBQVNEO0FBekJTLENBQVo7O0FBNEJBLE9BQU8sS0FBUCxHQUFlLEtBQWYiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbHMgPSB7XG4gIGdldEFsbEFuaW1hbHM6ICAoY2FsbGJhY2spID0+IHtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvYW5pbWFsc1wiLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgXG4gIGFkZE9uZUFuaW1hbDogKGFuaW1hbCwgY2FsbGJhY2spID0+IHtcbiAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGFuaW1hbCk7XG4gICAgXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvYW5pbWFsc1wiLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn07XG5cbndpbmRvdy51dGlscyA9IHV0aWxzOyJdfQ==