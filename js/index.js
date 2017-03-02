$(document).ready(function(){

  $("#stopButton").click(stopLight);
  $("#slowButton").click(slowLight);
  $("#goButton").click(goLight);

  function stopLight() {
    clearLights();
    $("#stopLight").css("background-color", "red");
  }

  function slowLight() {
    clearLights ()
    $("#slowLight").css("background-color", "yellow");
  }

  function goLight() {
    clearLights ()
    $("#goLight").css("background-color", "green");
  }

  function clearLights()
    $("#stopLight").css("background-color", "#111");
    $("#slowLight").css("background-color", "#111");
    $("#goLight").css("background-color", "#111");

  });