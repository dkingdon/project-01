var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Trail.find(function(err, trails) {
    console.log('Success! >> from trailsController!');
    if (err) { console.log("index error: " + err); }
    res.json({trails});
   });
  }


module.exports = {
  index: index,
};
