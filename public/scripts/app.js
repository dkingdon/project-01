console.log("app.js is connected");


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

 }); //document closer TODO: remove before production

  function handleSuccess(jsonData){
    var trails = jsonData.trails; // TODO: use this for map loop
    console.log(trails[4].name);
    trails.forEach(function (trailIndex){
    renderTrails(trailIndex)
    });
  }

  function handleError(){
    console.log('Ajax'+'"GET"'+' ERROR!');
  }

  function renderTrails(trail){
    var source = $('#result-template').html(),
    template = Handlebars.compile(source),
    trail = template(trail);
    $('#trail-target').prepend(trail);
  }

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 10
    });
  }
