$(document).ready(function(){

$('#stopButton').click(turnRed);
$('#slowButton').click(turnYellow);
$('#goButton').click(turnGreen);

function turnRed() {
  $('#stopLight').css('background-color', 'red');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
}

function turnYellow() {
  $('#slowLight').css('background-color', 'yellow');
  $('#stopLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
}

function turnGreen() {
  $('#goLight').css('background-color', 'green');
  $('#stopLight').css('background-color', 'black');
  $('#slowLight').css('background-color', 'black');
}

});