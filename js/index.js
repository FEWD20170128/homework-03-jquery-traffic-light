$(document).ready(function(){

  $('#stopButton').click(switchRed);
  $('#slowButton').click(switchYellow)
  $('#goButton').click(switchGreen)


  function switchRed() {
    clearlights()
  $('#stopLight').css('background', 'red')
  }

  function switchYellow() {
    clearlights()
  $('#slowLight').css('background', 'Yellow')
  }

  function switchGreen() {
    clearlights()
  $('#goLight').css('background', 'green')
  }


  function clearlights (){
    $('#stopLight').css('background', '#111')
    $('#slowLight').css('background', '#111')
    $('#goLight').css('background', '#111')
  }
});