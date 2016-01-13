$(document).ready(function() {


  $("form#chooseme").submit(function(event) {
    var type1 = $("select#kingdom").val();
    var food = $("select#food").val();


    if (type1 === "bird" && food === "carnivore") {
      $(".hideme").hide();
      $(".hideme#penguin").show();
    } else if (type1 === "bird" && food === "herbivore") {
      $(".hideme").hide();
      $(".hideme#snowgoose").show();
    } else if (type1 === "mammal" && food === "carnivore") {
      $(".hideme").hide();
      $(".hideme#bear").show();
    } else if (type1 === "mammal" && food === "herbivore") {
      $(".hideme").hide();
      $(".hideme#elephant").show();
    }

    if (food) {
      $(".moreInfo").show();
    }
    event.preventDefault();

    $("button#moreInfo").click(function() {
      var type1 = $("select#kingdom").val();
      var food = $("select#food").val();


      if (type1 === "bird" && food === "carnivore") {
          $("p.hideme").hide();
          $(".penguinInfo").show();
        } else if (type1 === "bird" && food === "herbivore") {
          $("p.hideme").hide();
          $(".snowgooseInfo").show();
        } else if (type1 === "mammal" && food === "carnivore") {
          $("p.hideme").hide();
          $(".bearInfo").show();
        } else if (type1 === "mammal" && food === "herbivore") {
          $("p.hideme").hide();
          $(".elephantInfo").show();

      };

    });

  });




});
