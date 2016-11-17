
var db = require("./models");

  /* - - - Temp Hardcoded Trail Data - - - */

  var trailsList = [{
    name: 'Joaquin Miller Park',
    rating: 4.5,
    address: "3590 Sanborn Dr., Oakland, CA 94602",
    popularTrail: "cinderella",
    experienceLevel: "Hardcore",
    latitude: 37.809706,
    longitude: -122.183235,
    comments: "I like this place a lot, too many hikers though" // DK: TODO Temp, will replace with array
  },
  {
    name: 'Camp Tamarancho',
    rating: 4.7,
    address: 'Iron Springs Fire Rd, Fairfax, CA 94930',
    popularTrail: 'Flow Trail',
    experienceLevel: 'Hardcore',
    latitude: 37.9932731,
    longitude: -122.6085054,
    comments: "Physically demanding trails, but need to purchase a pass at local bike shop"
  },
  {
    name: 'Skeggs Point',
    rating: 4.7,
    address: '15463 Skyline Blvd, Redwood City, CA 94062',
    popularTrail: 'Manzanita Tral',
    experienceLevel: 'intermediate',
    latitude: 37.4010377,
    longitude: -122.3125133,
    comments: "Park mixed with both smooth and technical trails"
  },
  {
    name: 'Demo Forest',
    rating: 4.5,
    address: 'Highland Way, Los Gatos, CA 95033',
    popularTrail: 'Flow Trail',
    experienceLevel: 'Hardcore',
    latitude: 37.0824064,
    longitude: -121.8550676,
    comments: "Epic flow trail that goes on for days. One of the bay's best rides"
  },
  // {
  //   name:
  //   rating:
  //   address:
  //   popularTrail:
  //   experienceLevel:
  //   latitude:
  //   longitude:
  //   comments:
  // },
  // {
  //   name:
  //   rating:
  //   address:
  //   popularTrail:
  //   experienceLevel:
  //   latitude:
  //   longitude:
  //   comments:
  // },
  // {
  //   name:
  //   rating:
  //   address:
  //   popularTrail:
  //   experienceLevel:
  //   latitude:
  //   longitude:
  //   comments:
  // },
  {
    name: 'Lake Chabot Park',
    rating: 4.6,
    address: '17600 Lake Chabot Rd, Castro Valley, CA 94546',
    popularTrail: 'Brandon Trail',
    experienceLevel: 'beginner',
    latitude: 37.7166066,
    longitude: -122.1029251,
    comments: "Fun ride, all fireroads and some paved paths around the lake"
  },
  {
    name: 'China Camp',
    rating: 4.2,
    address: '100 China Camp Village Rd, San Rafael, CA 94901',
    popularTrail: 'Bay View Trail',
    experienceLevel: 'intermediate',
    latitude: 38.0066978,
    longitude: -122.4961469,
    comments: "Short fun ride, would recommend counter clockwise loop"
  }
];

  /* - - - Removes Trails from the db and replaces with seed info- - - */
  db.Trail.remove({}, function( err, trails ) {
    db.Trail.create(trailsList, function( err, trails) {
      if (err) { console.log(err); }
      console.log(trails);
      console.log( 'Dancsy has created ' + trails.length, 'trails');
      process.exit();
    })
  })
