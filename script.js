var visible = false;

$("#menu-toggle").click(function() {

    // OPTION 1
    //$("#menu").show();

    // OPTION 2
    // if(visible == true) {
    //     $("#menu").hide();
    //     visible = false;
    // } else {
    //     $("#menu").show();
    //     visible = true;
    // }

    //OPTION 3
    //    if(visible == true) {
    //         $("#menu").slideUp();
    //         visible = false;
    //     } else {
    //         $("#menu").slideDown();
    //         visible = true;
    //     }

    // OPTION 4
    //$("#menu").fadeToggle(800);


    // Option 5
    // if(visible == true) {
    //     $(".open-menu").fadeOut(400, function() {
    //         $(".line").fadeIn();
    //     });
    //     visible = false;
    // } else {
    //     $(".line").fadeOut(400, function() {
    //         $(".open-menu").fadeIn();
    //     });
    //     visible = true;
    // }

    if(visible == true) {
        $(".line").removeClass("line-x");
        visible = false;
    } else {
        $(".line").addClass("line-x");
        visible = true;
    }

    $("#menu").slideToggle();


});

$(document).ready(function() {
    console.log("DOCUMENT READY");
});

$(window).load(function() {
    console.log("WINDOW LOAD");
});

$(window).scroll(function() {
    console.log("WINDOW SCROLL");
});

$(window).resize(function() {
    console.log("WINDOW RESIZE");
});