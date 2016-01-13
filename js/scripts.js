$(document).ready(function() {


  $("form#chooseme").submit(function(event) {
    var type = $("select#kingdom").val();
    var food = $("select#food").val();


    if (type === "bird" && food === "carnivore") {
      $(".hideme").hide();
      $(".hideme#penguin").show();
    } else if (type === "bird" && food === "herbivore") {
      $(".hideme").hide();
      $(".hideme#snowgoose").show();
    } else if (type === "mammal" && food === "carnivore") {
      $(".hideme").hide();
      $(".hideme#bear").show();
    } else if (type === "mammal" && food === "herbivore") {
      $(".hideme").hide();
      $(".hideme#elephant").show();
    }

    if (type) {
      $(".moreInfo").show();
    }
    event.preventDefault();
  });

});
