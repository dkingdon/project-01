console.log("app.js is connected");

$(document).ready(function(){
console.log('DOM is ready!');

$.ajax({
    method: 'GET',
    url: '/api/trails',
    type: 'json',
    success: handleSuccess,
    error: handleError
})

}); //document closer TODO: remove before production

function handleSuccess(json){
  console.log('? this is >>'+ json.trails[0].name);
}

function handleError(){
  console.log('Ajax'+'"GET"'+' ERROR!');
}

// fn that handles compiling for handlebars
function renderTrails(trail){
  source = $('#trail-template').html
  template = Handlebars.compile(source)
  var trail = template(trail)
  $('#trail-target').prepend(trail)
}
