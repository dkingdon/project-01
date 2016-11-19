console.log("app.js is connected");
var displayResults;


$(document)
  .ready(function(){
    console.log('DOM is ready!');

    /* - - - Reset opening the modal again with new text - - - */
    $('#reset-btn').on('click', function(ev){ // NOTE not clearing map and reults tab
      $('.modal-title').text('Change your mind?');
      $('.modal-body').text("That's OK, we are here to help you find your next favorite trail")
      $('#intro-modal').modal('show');
      $('#trail-target').html(' ');
      initMap();
    });

    initMap(); //initializes google map

  /* - - - Modal button action selecting beginner trails - - - */
  $('#beginner-btn').on('click', function () {
    displayResults = 'beginner';
    $('#intro-modal').modal('hide'); // Hides modal from page once button is pressed
    $getResults();
  });

  $('#intermediate-btn').on('click', function () {
    displayResults = 'intermediate';
    $('#intro-modal').modal('hide');
    $getResults();
  });

  $('#hardcore-btn').on('click', function () {
    displayResults = 'Hardcore';
    $('#intro-modal').modal('hide');
    $getResults();
  });

  /* - - - Intro modal pop up upon load - - - */
  $('#intro-modal').modal('show');
  $('#trail-target').on('click', function(ev){
    ev.preventDefault();
    console.log('this is  text');
  });

 }); //document closer TODO: remove before production

  /* - - - Ajax get call function - - - */


  function $getResults() {
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

  var map;
  function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 37.78, lng: -122.44},
     zoom: 9
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
        title: 'Click for information!'
      })
      var contentString = '<p><b>'+ trailsIndex.name +'</b></p>';
      var infoString = '<p><b>'+ trailsIndex.comments +'</b></p>';

      var info = new google.maps.InfoWindow({
          content: infoString
      })
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      marker.addListener('click', function() {
        info.open(map, marker);
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
