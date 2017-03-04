$(document).ready(function(){

  $('#stopButton').click(function(){
    $('.bulb').css('background', '#111')
    $('#stopLight').css('background', 'red')
  });

  $('#slowButton').click(function(){
    $('.bulb').css('background', '#111')
    $('#slowLight').css('background','yellow');
  });

  $('#goButton').click(function(){
    $('.bulb').css('background', '#111')
    $('#goLight').css('background','green');
  });

});