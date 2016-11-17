var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controllers = require('./controllers');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


// HTML endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Json API endpoints
app.get('/api', controllers.api.index);
app.get('/api/trails', controllers.trails.index);


//  Server listening on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Yea boi! Express server is running on http://localhost:3000/');
});


trailsController
apiController
