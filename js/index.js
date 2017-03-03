  function redlighton(){
    $("#stopLight").css("background-color", "red");
  }

  $("#stopButton").click(redlighton);


    function yellowlighton(){
    $("#slowLight").css("background-color", "yellow");
  }

  $("#slowButton").click(yellowlighton);

    function greenlighton(){
    $("#goLight").css("background-color", "green");
  }

  $("#goButton").click(greenlighton);
