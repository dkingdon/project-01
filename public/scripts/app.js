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
 }); //document closer TODO: remove before production

  function handleSuccess(jsonData){
    var trails = jsonData.trails;
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
