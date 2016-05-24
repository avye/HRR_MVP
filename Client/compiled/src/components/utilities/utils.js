"use strict";

var utils = {
  getAllAnimals: function getAllAnimals(callback) {
    // try it with the heroku url
    // or try it with just the /api/animals
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUTtBQUNWLGlCQUFnQix1QkFBQyxRQUFELEVBQWM7OztBQUc1QixNQUFFLElBQUYsQ0FBTztBQUNMLFlBQU0sS0FERDtBQUVMLFdBQUssY0FGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUIsaUJBQVMsSUFBVDtBQUNEO0FBTkksS0FBUDtBQVFELEdBWlM7O0FBY1YsZ0JBQWMsc0JBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBWDs7QUFFQSxNQUFFLElBQUYsQ0FBTztBQUNMLFlBQU0sTUFERDtBQUVMLFdBQUssY0FGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsWUFBTSxJQUpEO0FBS0wsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUI7QUFDRDtBQVBJLEtBQVA7QUFTRDtBQTFCUyxDQUFaOztBQTZCQSxPQUFPLEtBQVAsR0FBZSxLQUFmIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0ge1xuICBnZXRBbGxBbmltYWxzOiAgKGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gdHJ5IGl0IHdpdGggdGhlIGhlcm9rdSB1cmxcbiAgICAvLyBvciB0cnkgaXQgd2l0aCBqdXN0IHRoZSAvYXBpL2FuaW1hbHNcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIHVybDogXCIvYXBpL2FuaW1hbHNcIixcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIFxuICBhZGRPbmVBbmltYWw6IChhbmltYWwsIGNhbGxiYWNrKSA9PiB7XG4gICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShhbmltYWwpO1xuICAgIFxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL2FuaW1hbHNcIixcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuXG53aW5kb3cudXRpbHMgPSB1dGlsczsiXX0=