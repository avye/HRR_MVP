var express = require('express');
var partials = require('express-partials');
var helpers = require('../Server/helpers.js');
var bodyParser = require('body-parser');

var app = express();

// configure app to use bodyParser()
// this will let us get teh data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set our port
var port = process.envPORT || 8080;

// Get our router set up
var router = express.Router();

// test route to make sure everything is working
router.get('/', function(req,res) {
  res.json({message: "got it working"});
});

// All of our routes will be prefixed with /api
app.use('/api', router);


// Start the server
app.listen(port);
console.log('Server started and listening on ' + port);


// Serve up the static file
// Will need to make thsi path relative with __dirname + '/client'
// app.use(express.static('../Client'));


// app.get('/todos', helpers.getHandler);
// app.post('/todos', helpers.postHandler);
// app.delete('/todos', helpers.deleteHandler);



module.exports = app;