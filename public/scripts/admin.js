console.log("admin.js connected");
var allTrails = [];
var template;
var $trailList;

$(document)
  .ready(function(){

    $trailList = $('#trail-target');

    /* - - - Handlebars  - - - */
    var source = $('#result-template').html();
    template = Handlebars.compile(source);

    /* - - - Populates page with trail data - - - */
    $.ajax({
      method: 'GET',
      url: '/api/trails',
      type: 'jsonData',
      success: handleSuccess,
      error: handleError
    });

    /* - - - Submit new trail form - - - */
    $('#newTrailForm').on('submit', function(e) {
      var formData = $(this).serialize();
      console.log('formData >> ', formData);
      $.post('/api/trails', formData, function (trail) {
        console.log('trail after POST', trail);
        renderPage();
      });
      $(this).trigger("reset");
    });

    $('.button').on('click','.deleteBtn', function(ev){
    ev.preventDefault();
    var id = $(this).attr('data-id');
    console.log(id);

    $.ajax({
      method: 'DELETE',
      url: "/api/trails/"+$(this).attr('data-id'),
      success: deleteTrailSuccess,
      error: deleteError
    });
  }); //deletebtn closer

});

function deleteError(xhr, status, errorThrown){
  console.log('Your delete error has been thrown.');
  console.log(xhr)
  console.log(errorThrown)
}

function deleteTrailSuccess(json){
  var deleteTrail = json;
  var trailId = deleteTrail._id;
  console.log('delete trail>> ', trailId);

  for(var i = 0; i < allTrails.length; i++) {
    if(allTrials.trails[i]._id === trailId) {
      allTrails.splice(i, 1);
      break;
    }
  }
  renderPage();
}


function renderPage() {
   $trailList.empty();
   var trailHtml = template(allTrails);
   $('#trail-target').prepend(trailHtml);
}
   /* - - - Success for ajax GET: trails call - - - */
 function handleSuccess(json) {
   allTrails = json;
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
