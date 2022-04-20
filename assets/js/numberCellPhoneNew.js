
function validationNumber(NumberCellPhone, cellPhoneIcon, placeHolderRecommend) {
  var NumberEnter = NumberCellPhone.val();
  if (NumberEnter.length < 1) {
    //muestro placeholder 9 números
    $(placeHolderRecommend).removeClass("hide");
  } else {
    //quita el placeholder
    $(placeHolderRecommend).addClass("hide");
  }

  //separacion de digitos ingresados cuarta posicion
  if (NumberEnter.length === 4) {
    spaceBetweenNumber =
      NumberEnter.slice(0, -1) + " " + NumberEnter.slice(-1);
    NumberCellPhone.val(spaceBetweenNumber);
  }

  //separacion de digitos ingresados octava posicion
  if (NumberEnter.length === 8) {
    spaceBetweenNumber =
      NumberEnter.slice(0, -1) + " " + NumberEnter.slice(-1);
    NumberCellPhone.val(spaceBetweenNumber);
  }
}

$("#InputNumberCellPhone").on("keyup", function () {
  validationNumber(
    $("#InputNumberCellPhone"),
    $("#CellPhoneIcon"),
    $("#PlaceHolderNumberRecommend")
  );

  if ($("#InputNumberCellPhone").val().length >= 1) {
    // se activa el boton de borrar numero cuando se digita el primer numero
    $("#DeleteNumberCellPhone").addClass("btn-light");
    $("#DeleteNumberCellPhone").removeClass(
      "btn-light-disabled none-box-shadow"
    );
    $("#DeleteNumberCellPhone").removeAttr("disabled");
    //input border cambia de color focus
    $("#InputNumberCellPhone").addClass("border-blue-happy");
    $("#InputNumberCellPhone").removeClass("error");
    $("#label-error-soles").fadeOut("fast");

    //cambio de icono celular focus
    $("#CellPhoneIcon img").addClass("hide");
    $("#CellPhoneIcon img:nth-child(2)").removeClass("hide");
  }

  //cuando esta vacio
  if ($("#InputNumberCellPhone").val().length == 0) {
    // boton borrar
    $("#DeleteNumberCellPhone").removeClass("btn-light");
    $("#DeleteNumberCellPhone").addClass(
      "btn-light-disabled none-box-shadow"
    );
    $("#DeleteNumberCellPhone").attr("disabled", "true");

    //input border cambia de color
    $("#InputNumberCellPhone").removeClass("border-blue-happy");
    $("#ConfirmNumberCellPhone").addClass("disabled");
    $("#ConfirmNumberCellPhone").attr("disabled", "true");

    //cambio de icono celular disabled
    $("#CellPhoneIcon img").addClass("hide");
    $("#CellPhoneIcon img:nth-child(1)").removeClass("hide");
  }

  //cuando no esta completo se desactiva el confirmar
  if ($("#InputNumberCellPhone").val().length < 11) {
    $("#ConfirmNumberCellPhone").addClass("disabled");
    $("#ConfirmNumberCellPhone").attr("disabled", "true");

    //input border cambia de color completed
    $("#InputNumberCellPhone").removeClass("border-blue-completed");
  }

  //cuando se completa OK se activa el confirmar
  if ($("#InputNumberCellPhone").val().length >= 11) {
    $("#ConfirmNumberCellPhone").removeClass("disabled");
    $("#ConfirmNumberCellPhone").removeAttr("disabled");

    //cambio de icono celular completed
    $("#CellPhoneIcon img").addClass("hide");
    $("#CellPhoneIcon img:nth-child(4)").removeClass("hide");

    //input border cambia de color completed
    $("#InputNumberCellPhone").addClass("border-blue-completed");
  }
});


// **********************
//  click boton borrar
//**********************

$("#DeleteNumberCellPhone").on("click", function () {
  //quitar estilos input
  $("#InputNumberCellPhone").removeClass(
    "btn-light border-blue-completed border-blue-happy border-error"
  );

  //desactivar btn confirmar
  $("#ConfirmNumberCellPhone").addClass("disabled");
  $("#ConfirmNumberCellPhone").attr("disabled", "true");

  //quitar mensaje de error
  // $("#messageNumberError").addClass("hide");
  $("#messageNumberErrorInvalid").addClass("hide");

  //agregar placeholder
  $("#PlaceHolderNumberRecommend").removeClass("hide");

  //quitar value input
  $("#InputNumberCellPhone").val("");
  $("#InputNumberCellPhone").focus()

  //quitar estilos boton borrar
  $("#DeleteNumberCellPhone").addClass(
    "btn-light-disabled none-box-shadow"
  );
  $("#DeleteNumberCellPhone").attr("disabled", "true");

  //cambio icono telefono
  $("#CellPhoneIcon img").addClass("hide");
  $("#CellPhoneIcon img:nth-child(1)").removeClass("hide");
});



// **********************
//  click boton confirmar
// 1 numero incorrecto ejm --> 000 000 000
// 2 numero correcto abre un popup
//**********************

function CaseButtonConfirm(number) {
  switch (number) {
    case 1:
      $("#InputNumberCellPhone").addClass("border-error");
      $("#CellPhoneIcon img").addClass("hide");
      $("#CellPhoneIcon img:nth-child(3)").removeClass("hide");
      $("#messageNumberErrorInvalid").removeClass("hide");
      $("#ConfirmNumberCellPhone").addClass("disabled");
      $("#ConfirmNumberCellPhone").attr("disabled", "true");

      // boton borrar
      $("#DeleteNumberCellPhone").removeClass("btn-light");
      $("#DeleteNumberCellPhone").addClass(
        "btn-light-disabled none-box-shadow"
      );
      $("#DeleteNumberCellPhone").attr("disabled", "true");
      $("#InputNumberCellPhone").focus()
      resetErrorNumberInput($("#InputNumberCellPhone").val().length)
      break;
    case 2:
      $("#NumberConfirmModal").addClass("show");
      $("#NumberConfirmModal .modal-backdrop").addClass("visible active");
      break;
    default:
  }
}




function resetErrorNumberInput(value) {
  $("#InputNumberCellPhone").one("keydown", function () {
    $("#InputNumberCellPhone").val("");

    //quitar mensaje de error
    // $("#messageNumberError").addClass("hide");
    $("#messageNumberErrorInvalid").addClass("hide");

    // quitar clase error
    $("#InputNumberCellPhone").removeClass("border-error");
  });
}


// **********************
//  click boton confirmar
// 1 numero incorrecto ejm --> 000 000 000
// 2 numero correcto abre un popup
//**********************

$("#ConfirmNumberCellPhone").on("click", function () {
  CaseButtonConfirm(1);
});
