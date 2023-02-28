$( function() {
  $("img").on("click",function(){
    $(this).effect("shake")
  })
    $("#draggable").draggable();
    
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" ).html( "Dropped!" );
          $("#draggable").remove()
      }
    });
});