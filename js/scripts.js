$(document).ready(function(){

    $("#addH2").click(function(){
        // $("#headerTwoTag").html("<h2>Header Two Tag Added</h2>");
        $("#headerTwoTag").text("Header Two Tag Added");
    });

    $("#addLi").click(function(){
        $("ul").prepend("<li>Ciao</li>");
    });

    $("#addH3").click(function(){
        $("#headerThreeTag").html("<h3>Header Three Tag</h3>")
    });
});
