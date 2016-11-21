console.log("app.js is connected");
var displayResults;
var allTrails = [];
var template;
var $trailList;

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

  initMap(); // NOTE Casey, let's comment this to tell what it does

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
  $('#trail-target').on('click', '.add-comment',submitClbk);


  /* - - - Admin JS begin - - - */
  $trailList = $('#trail-target');

  /* - - - ADMIN Handlebars  - - - */
  // var source = $('#result-template').html();
  // template = Handlebars.compile(source);

  /* - - - Populates page with trail data - - - */
  $.ajax({
    method: 'GET',
    url: '/api/trails',
    type: 'jsonData',
    success: handleSuccess,
    error: handleError
  });

  /* - - - Submit new trail form - - - */
  $('#newTrailForm').on('submit', function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/trails', formData, function (trail) {
      console.log('trail after POST', trail);
      renderPage();
    });
    $(this).trigger("reset");
  });

  /* - - - Delete trail - - - */
  $('.delete-btn').on('click', handleDeleteClick);
  /* - - - Admin JS End - - - */

 }); //document closer TODO: remove before production

  /* - - - Ajax get call function - - - */

function submitClbk(ev){
  ev.preventDefault();
  console.log('submit has been clicked');

}

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
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
     });
   }



  /* - - - Success function for individual difficulty level - - - */
  function handleSuccess(jsonData){
    console.log(jsonData.trails[3].comments[0].comments);
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

      // var info = new google.maps.InfoWindow({
      //     content: infoString
      // })
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      // marker.addListener('click', function() {
      //   info.open(map, marker);
      // });
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

  /* - - - Admin JS functions  - - - */
  function renderPage() {
    $trailList.empty();
  /* - - - ADMIN Handlebars template variable  - - - */
 //    var trailHtml = template(allTrails);
 //    $('#trail-target').append(trailHtml);
 // }

    /* - - - Success for ajax GET: trails call - - - */
  function handleSuccess(json) {
    allTrails = json;
    console.log('allTrails = ', json); // NOTE: temp to see what the output is
    renderPage();
 }

   /* - - -Error handler - - - */
   function handleError (err) {
     console.log(err);
   }

   /* - - - Trail create success - - - */
   function createSuccess (json) {
     $('#newTrailForm input').val();
     allTrails.push(json);
     renderPage();
   }

   /* - - - Handle Delete - - - */
   function handleDeleteClick(data) {
     var trailId = $(this).parents('.frame-info').data('data-id');
     console.log('deleting ', trailId);
     $.ajax({
       method: 'DELETE',
       url: '/api/trails/' + trailId,
       success: handleDeleteSuccess
     });
   }

   /* - - - Handle Delete - - - */
   function handleDeleteSuccess(data) {
     var deletedTrailId = data.id;
     console.log('deleting ', deletedTrailId);
     $('div[data-id=' + deletedTrailId +']').remove();
   }

  /* - - - END Admint js functions - - - */



  /* - - - Playing around with comment submit button  - - - */
  function getComment(trailCode) {
    trailCode.preventDefault();
    var newComment;
    /* Using switch statment to handle each case, will find better way once it is working */
    switch (trailCode) {
      case 'alameda':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is alameda:" + newComment);
          break;
      case 'chabot':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is chabot:" + newComment);
          break;
      case 'angel':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is angel:" + newComment);
          break;
      case 'joaquin':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is joaquin:" + newComment);
          break;
      case 'tamarancho':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is tamarancho:" + newComment);
          break;
      case 'skeggs':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is skeggs:" + newComment);
          break;
      case 'demo':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is demo:" + newComment);
          break;
      case 'redwood':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is redwood:" + newComment);
          break;
      case 'annadel':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is annadel:" + newComment);
          break;
      case 'chinaCamp':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is chinaCamp:" + newComment);
          break;
      case 'rockville':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is rockville:" + newComment);
          break;
      case 'santaTeresa':
          newComment = document.getElementById(trailCode).value;
          console.log("switch out put is santaTeresa:" + newComment);
          break;
      default:
          break;
    }
  }
  // NOTE maybe switchstatement. Also, need a way to clear text field upon submitting
