var db = require('../models');

// GET /api/comments
function index(req, res) {
  db.UserComments.find(function(err, comments) {
    console.log('Success! >> from userCommentsController');
    if (err) { console.log("index error: " + err); }
    res.json({comments});
   });
  }


module.exports = {
  index: index,
};
