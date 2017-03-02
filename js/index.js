$(document).ready(function(){

  $('#stopButton').click(switchRed);
  $('#slowButton').click(switchYellow)
  $('#goButton').click(switchGreen)


  function switchRed(){
  $('#stopLight').css('background', 'red')
  }

  function switchYellow() {
  $('#slowLight').css('background', 'Yellow')
  }

  function switchGreen() {
  $('#goLight').css('background', 'green')
  }
  
});