$( document ).ready(function() {
        $("#createRoute").hide();
	$("#map").hide();
	$("#statList").hide();

	$( "#GoBike" ).click(function() {
     	    $("#homeScreen").hide();
     	    $("#createRoute").show();
	    $("#createConfirm").hide();
	});



$( "#statButton" ).click(function() {
     $("#createRoute").hide();
     $("#statList").show();
     $("#backTwo").hide();
});

$("#statBar").click(function() {
	$("#map").hide();
	$("#statList").show();
	$("#backOne").hide();
	$("#backTwo").show();
});

function tick(){
    $('#ticker li:first').slideUp( function () { $(this).appendTo($('#ticker')).slideDown(); });
}
setInterval(function(){ tick () }, 5000);


$( "#backOne" ).click(function() {
     $("#statList").hide();
     $("#createRoute").show();
});

$("#backTwo").click(function() {
	$("#statList").hide();
	$("#map").show();
});

$( "#goButton" ).click(function() {
     $("#createRoute").hide();
     $("#map").show();
   console.log("this isn't wokring"); 
     $("#mapConfirm").hide(); 
});
            
$( "#createCancel" ).click(function() {
     $("#createConfirm").show();
});
            
$( "#mapCancel" ).click(function() {
     $("#mapConfirm").show();
});
            
$( "#createYes" ).click(function() {
     $("#createRoute").hide();
     $("#homeScreen").show();
});
            
$( "#createNo" ).click(function() {
     $("#createConfirm").hide();
});
            
$( "#mapYes" ).click(function() {
     $("#map").hide();
     $("#homeScreen").show();
});
            
$( "#mapNo" ).click(function() {
     $("#mapConfirm").hide();
});
});
