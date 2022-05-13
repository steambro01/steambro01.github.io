$(document).ready(function() {
    $("#readMore").click(function(){
        $("#more").removeClass("hide");
        $("#readMore").addClass("hide");
        $("#less").removeClass("hide");
    });
    $("#less").click(function(){
        $("#more").addClass("hide");
        $("#less").addClass("hide");
        $("#readMore").removeClass("hide");

    });
});