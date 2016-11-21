var db = require('../models');

// GET /api/trails
function index(req, res) {
  db.Trail.find(function(err, trails) {
    console.log('Success! >> from trailsController!');
    if (err) { console.log("index error: " + err); }
    res.json({trails});
   });
  }


  //POST /api/trails
  function create( req, res ) {
    console.log('body', req.body);
    db.Trail.create(req.body, function ( err, trail ) {
      if (err) {
        console.log(err);
      }
      console.log(trail);
      res.json(trail);
    });
  }

  // DELETE /api/trails/:id
  function destroy (req,res) {
    console.log('Hello from the Controller side!');
    db.Trail.findOneAndRemove({ _id: req.params.id}, function (err, foundTrail) {
      console.log('delet >>', foundTrail);
      res.json(foundTrail);
    })
  }

  function show(req, res){
    db.Trail.findOne({_id: req.params.id}, function(err, oneTrail) {
      if (err) {console.log("Error: ", err);
      }
      res.json(oneTrail);
    });
   }


module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show : show
};
