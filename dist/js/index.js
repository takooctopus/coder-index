/**
 * Created by elson on 2016/9/4.
 * Just for index.html javascript
 */


//for bxslider
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });

    $('.flexslider2').flexslider({
        animation: "slide"
    });

    $(".dynamic-body").delegate(".block", "mouseenter", function(){
        setTimeout(function(){
            $(this).addClass('block-hover');
        }.apply(this), 5000)
    })

    $(".dynamic-body").delegate(".block", "mouseleave", function(){
        $(this).removeClass('block-hover');
    })


});

