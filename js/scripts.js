$(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  function illuminateRed() {
  clearLights();
  $('#stopLight').addClass('red');
  console.log('Turned on red light');
  }

  function illuminateYellow() {
  clearLights();
  $('#slowLight').addClass('yellow');
  console.log('Turned on yellow light');
  }

  function illuminateGreen() {
  clearLights();
  $('#goLight').addClass('green');
  console.log('Turned on green light');
  }

  function clearLights() {
  $('#stopLight,#slowLight,#goLight').attr('class','bulb');
  console.log('Cleared lights');
  }

});