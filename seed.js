var db = require("./models");

  /* - - - Temp Hardcoded Trail Data - - - */

  var trailsList = [{

    name: 'Joaquin Miller Park',
    trailCode: 'joaquin',
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
    trailCode: 'tamarancho',
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
    trailCode: 'skeggs',
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
    trailCode: 'demo',
    rating: 4.5,
    address: 'Highland Way, Los Gatos, CA 95033',
    popularTrail: 'Flow Trail',
    experienceLevel: 'Hardcore',
    latitude: 37.0824064,
    longitude: -121.8550676,
    comments: "Epic flow trail that goes on for days. One of the bay's best rides"
  },
  {
    name: 'Angel Island State Park',
    trailCode: 'angel',
    rating: 4.6,
    address: '6 Beach Rd, Belvedere, CA 94920',
    popularTrail: 'Sunset Trail',
    experienceLevel: 'beginner',
    latitude: 37.868623,
    longitude: -122.434567,
    comments: "Fun ride for the whole family. Note that you need to take the ferry to the island"
  },
  {
    name: 'Redwood Regional Park',
    trailCode: 'redwood',
    rating: 4.6,
    address: '7867 Redwood Road, Oakland, CA 94619',
    popularTrail: 'Stream Trail',
    experienceLevel: 'beginner',
    latitude: 37.8198206,
    longitude: -122.1727039,
    comments: "There are a lot of trails in this park, mostly fireroads. Popular family hiking location"
  },
  {
    name: 'Annadel State Park',
    trailCode: 'annadel',
    rating: 4.8,
    address: '6201 Channel Dr, Santa Rosa, CA 95409',
    popularTrail: 'Burna Trail',
    experienceLevel: 'intermediate',
    latitude: 38.4565992,
    longitude: -122.6408547,
    comments: "Physically challenging ride. Bring plenty of water"
  },
  {
    name: 'Lake Chabot Park',
    trailCode: 'chabot',
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
    trailCode: 'chinaCamp',
    rating: 4.2,
    address: '100 China Camp Village Rd, San Rafael, CA 94901',
    popularTrail: 'Bay View Trail',
    experienceLevel: 'intermediate',
    latitude: 38.0066978,
    longitude: -122.4961469,
    comments: "Short fun ride, would recommend counter clockwise loop"
  },
  {
    name: 'Alameda Creek',
    trailCode: 'alameda',
    rating: 4.7,
    address: 'Alameda Creek Trail, Fremont, CA 94536',
    popularTrail: "Alameda Creek",
    experienceLevel: 'beginner',
    latitude: 37.5794513,
    longitude: -121.9679912,
    comments: "Fun ride for the family and casual biker"
  },
  {
    name: 'Rockville Hills',
    trailCode: 'rockville',
    rating: 4.2,
    address: '2149 Rockville Rd, Fairfield, CA 94534',
    popularTrail: 'Mystic Ridge',
    experienceLevel: 'Hardcore',
    latitude: 38.2452069,
    longitude: -122.1428958,
    comments: "Just like the name suggests, this place is full of technical rocky trails"
  },
  {
    name: 'Santa Teresa Park',
    trailCode: 'santaTeresa',
    rating: 4.4,
    address: '260 Bernal Rd, San Jose, CA 95119',
    popularTrail: 'Ohlone Trail',
    experienceLevel: 'intermediate',
    latitude: 37.2196646,
    longitude: -121.7790788,
    comments: "Best place in San Jose to ride!!"
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
