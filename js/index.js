/**
 * Created by canidmars on 4/30/17.
 */



$(document).ready(function() {
    "use strict";


    // $('.index-rose').animate({
    //     opacity: "hide"
    // }, 9500).animate({
    //     opacity: "show"
    // }, 3500);
    //
    // $('#dev').animate({
    //     right: "100px"
    // });

    $(window).bind("load", function() {
        $('.index-rose').animate({
            opacity: "hide"
        }, 9500).animate({
            opacity: "show"
        }, 3500);

        $('#dev').animate({
            right: "100px"
        });
    });


});

