var utils = {
  getAllAnimals:  (callback) => {
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
  
  addOneTodo: (todo, callback) => {
    var data = JSON.stringify({todo: todo});
    
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/todos",
      contentType: 'application/json',
      data: data,
      success: function success(data) {
        callback();
      }
    });
  },
};

window.utils = utils;