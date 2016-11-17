
var db = require("./models");

  /* - - - Temp Hardcoded Trail Data - - - */
  var trailList = [{
    name: 'Joaquin Miller Park',
    rating: 4.5,
    address: "3590 Sanborn Dr., Oakland, CA 94602",
    popularTrail: "cinderella",
    experienceLevel: "Hardcore",
    latitude: 37.809706,
    longitude: -122.183235,
    comments: "I like this place a lot, too many hikers though" // DK: Temp, will replace with array
  }];

  /* - - - Removes Trails from the db and replaces with seed info- - - */
  db.Trail.remove({}, function( err, trails ) {
    db.Trail.create(trailList, funtion ( err, trails) {
      if (err) {
        console.log(err);
      }
      console.log( 'Dancsy has created ', trails.length, 'trails');
    })
  })
