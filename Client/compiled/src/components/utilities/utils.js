"use strict";

var utils = {
  getAllAnimals: function getAllAnimals(callback) {
    // add in functionality to update the url
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/api/animals",
      contentType: 'application/json',
      success: function success(data) {
        callback(data);
      }
    });
  },

  addOneTodo: function addOneTodo(todo, callback) {
    var data = JSON.stringify({ todo: todo });

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/todos",
      contentType: 'application/json',
      data: data,
      success: function success(data) {
        callback();
      }
    });
  }
};

window.utils = utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUTtBQUNWLGlCQUFnQix1QkFBQyxRQUFELEVBQWM7O0FBRTVCLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxLQUREO0FBRUwsV0FBSyxtQ0FGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUIsaUJBQVMsSUFBVDtBQUNEO0FBTkksS0FBUDtBQVFELEdBWFM7O0FBYVYsY0FBWSxvQkFBQyxJQUFELEVBQU8sUUFBUCxFQUFvQjtBQUM5QixRQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsRUFBQyxNQUFNLElBQVAsRUFBZixDQUFYOztBQUVBLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxNQUREO0FBRUwsV0FBSyw2QkFGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsWUFBTSxJQUpEO0FBS0wsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUI7QUFDRDtBQVBJLEtBQVA7QUFTRDtBQXpCUyxDQUFaOztBQTRCQSxPQUFPLEtBQVAsR0FBZSxLQUFmIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0ge1xuICBnZXRBbGxBbmltYWxzOiAgKGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gYWRkIGluIGZ1bmN0aW9uYWxpdHkgdG8gdXBkYXRlIHRoZSB1cmxcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2FuaW1hbHNcIixcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIFxuICBhZGRPbmVUb2RvOiAodG9kbywgY2FsbGJhY2spID0+IHtcbiAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHt0b2RvOiB0b2RvfSk7XG4gICAgXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC90b2Rvc1wiLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn07XG5cbndpbmRvdy51dGlscyA9IHV0aWxzOyJdfQ==