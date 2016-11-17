console.log("app.js is connected");

$(document).ready(function(){
console.log('DOM is ready!');

// $.ajax({
//   method: 'GET',
//   url: '/api/trails',
//   type: 'jsonData'
//   success: handleSuccess,
//   error: handleError
//
// }) // ajax closer

}); //document closer TODO: remove before production


function handleSuccess(jsonData){
  console.log('? this is >>'+ jsonData);
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
};
