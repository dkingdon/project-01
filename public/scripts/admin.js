console.log("admin js connected");
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

 }); //document closer TODO: remove before production

 function renderPage() {
   $trailList.empty();
     /* - - - Handlebars template variable  - - - */
   var trailHtml = template(allTrails);
   $('#trail-target').append(trailHtml);
}

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
