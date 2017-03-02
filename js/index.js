$(document).ready(function(){

  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);

  function redLight() {
    clearLights();
    $("#stopLight").css("background-color", "red");
  }

  function yellowLight() {
    clearLights ();
    $("#slowLight").css("background-color", "yellow");
  }

  function greenLight() {
    clearLights ();
    $("#goLight").css("background-color", "green");
  }

  function clearLights() {
    $("#stopLight").css("background-color", "#111");
    $("#slowLight").css("background-color", "#111");
    $("#goLight").css("background-color", "#111");
    }

  });