console.log("app.js is connected");

  var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 9
     });
   }

$(document)
  .ready(function(){
    console.log('DOM is ready!');

    $.ajax({
      method: 'GET',
      url: '/api/trails',
      type: 'jsonData',
      success: handleSuccess,
      error: handleError
    })

    var $resetButton = $('#reset-btn');
    $resetButton.on('click', function(ev){
      location.reload();



    });

  initMap();

  /* - - - Intro modal pop up upon load - - - */
  $('#intro-modal').modal('show');
  



 }); //document closer TODO: remove before production

 function handleError(){
   console.log('Ajax'+'"GET"'+' ERROR!');
 }

  function handleSuccess(jsonData){
    var trails = jsonData.trails;
    trails.forEach(function (trailIndex){
    renderTrails(trailIndex)
    });

    trails.forEach(function(trailsIndex){
      var myLatLng = {
      lat: trailsIndex.latitude,
      lng: trailsIndex.longitude}
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      })
    });
  }

  function renderTrails(trail){
    var source = $('#result-template').html(),
    template = Handlebars.compile(source),
    trail = template(trail);
    $('#trail-target').prepend(trail);
  }
