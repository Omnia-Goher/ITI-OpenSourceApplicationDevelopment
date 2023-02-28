$(function(){
    $("#task-input").on('keypress',function(e) {
        if(e.which == 13) {
            e.preventDefault()
            $("#add-btn").click()
        }
    });

    $("#add-btn").on('click',function(){
        var value = $("#task-input").val()
        if(value != ""){
            $("#task-container h4").removeClass("d-block")
            $("#task-container h4").addClass("d-none")
            var div = $(`<div class='row bg-light py-2 rounded-5 mt-3 mb-3 text-start ps-4'>
                            <p id="task-text" class="col-md-10 col-6 card-text fs-5 pe-4 pt-1">${value}</p>
                            <div class="col-md-2 col-6 pt-2 text-center">
                                <button id="delete-btn" class="btn btn-danger rounded-5"><i class="fa fa-close"></i></button>
                            </div>
                        </div>`).on('click',function(){
                            $(this).toggleClass("background")
                            $(this).find("p").toggleClass("text-decoration-line-through")
                        })
            $("#task-container").append(div)
            $("#task-input").val("")    
            $(".btn-danger").each(function (i, elem) {
                $(elem).on('click',function(){
                    var parent = $(this).parent().parent()
                    parent.remove()
                });
            });  
        }
    })
});


