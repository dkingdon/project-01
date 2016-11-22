console.log("app.js is connected");
var displayResults;

$(document)
  .ready(function(){
    console.log('DOM is ready!');


  /* - - - Reset opening the modal again with new text - - - */

  $('#reset-btn').on('click', function(ev){
    $('.modal-title').text('Change your mind?');
    $('.modal-body').text("That's OK, we are here to help you find your next favorite trail")
    $('#intro-modal').modal('show');
    $('#trail-target').html(' ');
    initMap();
  });

  initMap(); // Initializes google's map

  /* - - - Modal button action selecting beginner trails - - - */
  $('#beginner-btn').on('click', function(){
    displayResults = 'beginner';
    $('#intro-modal').modal('hide'); // Hides modal from page once button is pressed
    $getResults();
  });

  $('#intermediate-btn').on('click', function(){
    displayResults = 'intermediate';
    $('#intro-modal').modal('hide');
    $getResults();
  });

  $('#hardcore-btn').on('click', function() {
    displayResults = 'Hardcore';
    $('#intro-modal').modal('hide');
    $getResults();
  });

  /* - - - Intro modal pop up upon load - - - */
  $('#intro-modal').modal('show');
  $('.updateButton').on('submit',function
  (ev){

    var id = $(this).attr('data-id');
    var formData = $(this).serialize();
      console.log(id, formData);

  });

}); //document closer TODO: remove before production

  /* - - - Ajax get call function - - - */

  function $getResults(){
    $.ajax({
      method: 'GET',
      url: '/api/trails',
      type: 'jsonData',
      success: handleSuccess,
      error: handleError
    });
  }

 function handleError(){
   console.log('Ajax'+'"GET"'+' ERROR!');
 }

  /* - - - Sets pins on map - - - */
    var map;
    function initMap(){
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
     });
   }

   /* - - - Success function for individual difficulty level - - - */
  function handleSuccess(jsonData){
    var trails = jsonData.trails;
    var targetTrails = [];
    for ( var i = 0; i < trails.length; i++ ){
      if (trails[i].experienceLevel === displayResults) {
        targetTrails.push(trails[i]);
      }
    }
      targetTrails.forEach(function (trailIndex){
      renderTrails(trailIndex)
      });

    targetTrails.forEach(function(trailsIndex){
      var myLatLng = {
      lat: trailsIndex.latitude,
      lng: trailsIndex.longitude}
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hi!'
      })

      var contentString = '<p><b>'+ trailsIndex.name +'</b></p>';
      var infoString = '<p><b>'+ trailsIndex.comments +'</b></p>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
      });
      marker.addListener('mouseout', function() {
        infowindow.close(map, marker);
      })
    });
  }

  function renderTrails(trail){
    var source = $('#result-template').html(),
    template = Handlebars.compile(source),
    trail = template(trail);
    $('#trail-target').prepend(trail);
  }
