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
app.get('/admin', function homepage (req, res) {
  res.sendFile(__dirname + '/views/admin.html');
});



// JSON API endpoints
app.get('/api', controllers.api.index);
app.get('/api/trails', controllers.trails.index);
app.post('/api/trails', controllers.trails.create);
app.delete('/api/trails/:id', controllers.trails.destroy);
app.get('/api/trails/:id', controllers.trails.show);
app.get('/api/comments', controllers.userComments.index);


//Server listening on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Yea boi! Express server is running on http://localhost:3000/');
});
