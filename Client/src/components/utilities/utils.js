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
  
  addOneAnimal: (animal, callback) => {
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
  },
};

window.utils = utils;