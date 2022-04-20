//ANIMACIÓN SEGUNDO
  function startTimerRanura(count, time) {
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
      count = count - 1;

      if (count < 0) {
        clearInterval(counter);
        return;
      }
      if (count == 0) {
        //close
        clearInterval(counter);
        $("#content-lottie-inserteBilletesMultifuncionDolares").addClass("hide");
        // $("#content-lottie-inserteBilletesReciclador").addClass("hide");
        $("#Cancel").addClass("hide");
        $("#timeRanura").addClass("hide");
        $("#messageRanura").fadeIn("slow");
        return;
      }
      if (count !== 1) {
        time.text(count);
      } else {
        time.text(count);
      }
    }
  }

  $("#timeRanura").on("click", function () {
    $("#content-lottie-inserteBilletesMultifuncionDolares").addClass("hide");
    // $("#content-lottie-inserteBilletesReciclador").addClass("hide");
    $("#Cancel").addClass("hide");
    $(this).addClass("hide");
    $("#messageRanura").fadeIn("slow");
  });

  startTimerRanura(19, $("#timeClose"));

  // typeChangeMessage()
  // la opcion 1 es --> por vez y presiona cerrar ranura
  // la opcion 2 es --> Por la misma cara y diferente a los devueltos
  function typeChangeMessage(number) {
    switch (number) {
      case 1:
        $("#firstMessage").removeClass("hide");
        $("#secondMessage").addClass("hide");
        break;
      case 2:
        $("#firstMessage").addClass("hide");
        $("#secondMessage").removeClass("hide");
        break;
      default:
    }
  }

  typeChangeMessage(2);