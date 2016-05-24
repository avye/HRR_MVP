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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUTtBQUNWLGlCQUFnQix1QkFBQyxRQUFELEVBQWM7O0FBRTVCLE1BQUUsSUFBRixDQUFPO0FBQ0wsWUFBTSxLQUREO0FBRUwsV0FBSyxtQ0FGQTtBQUdMLG1CQUFhLGtCQUhSO0FBSUwsZUFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUIsaUJBQVMsSUFBVDtBQUNEO0FBTkksS0FBUDtBQVFELEdBWFM7O0FBYVYsZ0JBQWMsc0JBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDbEMsUUFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBWDs7QUFFQSxNQUFFLElBQUYsQ0FBTztBQUNMLFlBQU0sTUFERDtBQUVMLFdBQUssbUNBRkE7QUFHTCxtQkFBYSxrQkFIUjtBQUlMLFlBQU0sSUFKRDtBQUtMLGVBQVMsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzlCO0FBQ0Q7QUFQSSxLQUFQO0FBU0Q7QUF6QlMsQ0FBWjs7QUE0QkEsT0FBTyxLQUFQLEdBQWUsS0FBZiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB1dGlscyA9IHtcbiAgZ2V0QWxsQW5pbWFsczogIChjYWxsYmFjaykgPT4ge1xuICAgIC8vIGFkZCBpbiBmdW5jdGlvbmFsaXR5IHRvIHVwZGF0ZSB0aGUgdXJsXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hbmltYWxzXCIsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBcbiAgYWRkT25lQW5pbWFsOiAoYW5pbWFsLCBjYWxsYmFjaykgPT4ge1xuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYW5pbWFsKTtcbiAgICBcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hbmltYWxzXCIsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufTtcblxud2luZG93LnV0aWxzID0gdXRpbHM7Il19