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
    $('#newTrailForm').on('submit', function(e) {
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/trails', formData, function (trail) {
        console.log('trail after POST', trail);
        renderPage();
      });
      $(this).trigger("reset");
    });


    /* - - - Delete Trail from Admin page - - - */
    $('.button').on('click','.deleteBtn', function(ev){
    ev.preventDefault();
    var id = $(this).attr('data-id');
    console.log(id);

    $.ajax({
      method: 'DELETE',
      url: "/api/trails/"+$(this).attr('data-id'),
      error: deleteError
    });
    $(this).closest('.frame-info').remove()
  }); //deletebtn closer

}); //document closer TODO: remove before production

  function deleteError(xhr, status, errorThrown){
    console.log('Your delete error has been thrown.');
    console.log(xhr)
    console.log(errorThrown)
  }

  function renderPage() {
     $trailList.empty();
     var trailHtml = template(allTrails);
     $('#trail-target').prepend(trailHtml);
  }

     /* - - - Success for ajax GET: trails call - - - */
   function handleSuccess(json) {
     allTrails = json;
     console.log('allTrails = ', allTrails.trails[4]);
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
