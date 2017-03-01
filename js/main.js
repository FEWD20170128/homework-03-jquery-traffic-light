$(document).ready(function() {

  $("#stopButton").click(illuminateRed);
  $("#slowButton").click(illuminateYellow);
  $("#goButton").click(illuminateGreen);

  function illuminateRed() {
      clearLights();
    $("#stopLight").addClass("red");
  }

  function illuminateYellow() {
      clearLights();
    $("#slowLight").addClass("yellow");
  }

  function illuminateGreen() {
      clearLights();
    $("#goLight").addClass("green");
  }

  function clearLights() {
    $(".red").removeClass("red");  
    $(".yellow").removeClass("yellow");
    $(".green").removeClass("green");
  }

});