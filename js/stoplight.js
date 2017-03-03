$(document).ready(function(){

  
  function stopButton() {
    clearLights();
    $("#stopLight").css("background-color", "red");
  }
    
  function slowButton() {
    clearLights();
    $("#slowLight").css("background-color", "yellow");
  }
   
  function goButton() {
    clearLights();
    $("#goLight").css("background-color", "green");
  }
    
  function clearLights() {
    $("#stopLight").css("background-color", "black");
    $("#slowLight").css("background-color", "black");
    $("#goLight").css("background-color", "black");
  }

  $("#stopButton").click(stopButton);
  $("#slowButton").click(slowButton);
  $("#goButton").click(goButton);


});