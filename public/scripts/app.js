console.log("app.js is connected");

$(document).ready(function(){
console.log('DOM is ready!');

$.ajax({
    method: 'GET',
    url: '/api/trails',
    type: 'jsonData',
    success: handleSuccess,
    error: handleError
})

}); //document closer TODO: remove before production

function handleSuccess(jsonData){
  console.log('? this is >> ', jsonData);
  var trails = jsonData.trails[0];
  // console.log('latitude is ' + json.trails[0].latitude);
  // console.log('latitude is ' + json.trails[0].longitude);
  renderTrails(trails)
}

function handleError(){
  console.log('Ajax'+'"GET"'+' ERROR!');
}

// fn that handles compiling for handlebars
function renderTrails(trail){
  var source = $('#result-template').html();
  var template = Handlebars.compile(source);
  var trail = template(trail);
  $('#trail-target').prepend(trail);
}
