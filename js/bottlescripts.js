$(document).ready(function() {
  $("button#song").click(function() {


    for(var index = 99; index >= 0; index -= 1) {
      $(".song").append("<p>" + index + " bottles of beer on the wall!</p>");

    };


  });



});
