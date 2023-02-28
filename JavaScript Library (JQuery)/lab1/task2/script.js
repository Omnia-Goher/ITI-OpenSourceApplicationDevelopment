
$(document).ready(function () {
    $("img").on('mouseenter', function(){
        $(this).next().animate({ height: "+=290" });
    })
    .on('mouseleave', function(){
        $(this).next().animate({ height: "-=290" });
    })
});



