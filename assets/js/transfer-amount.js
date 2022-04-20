// let amountFinal = '3000'

// dolares 1000

//signo moneda espacios
var pen = 50
var dolar = 80

// --------------------------


// transferencia en soles o dolares
// la opcion 1 soles
// la opcion 2 dolares
function transferCoin(number) {
  switch (number) {
      case 1:
        $("#MaxAmountSign").html("S/")
        $("#textEnterAmount").html("Ingresa monto en soles")
        $("#transferAmount").addClass("padding-left-60").removeClass("padding-left-80")
        $("#MessageAmount").html("S/ 0.00")
        $("#SignCoin").removeClass("w-80").addClass("w-50").html("S/")
        $("#accountDestine").html("Corriente Soles S/")
        $("#accountOrigin").html("Ahorro Soles S/")

        //espacio signo soles
        $("#transferAmount").on("keyup", function () {
            let  ip = $("#transferAmount").val();
            let mrspan = $('#textInput')
            mrspan.html(ip)
            let widthText =  Math.ceil(mrspan.width())
            let operationwidth = ((460 - pen) - widthText) / 2
            $('#SignCoin').css('left' , operationwidth )
        });
        // monto maximo en soles
       amountMax = '3000'
      break;
      case 2:
          $("#MaxAmountSign").html("US$")
          $("#textEnterAmount").html("Ingresa monto en dólares")
          $("#transferAmount").removeClass("padding-left-60").addClass("padding-left-80")
          $("#MessageAmount").html("US$ 0.00")
          $("#SignCoin").addClass("w-80").removeClass("w-50").html("US$")
          $("#accountDestine").html("Corriente Dólares US$")
          $("#accountOrigin").html("Ahorro Dólares US$")

          //espacio signo dolares
          $("#transferAmount").on("keyup", function () {
            let  ip = $("#transferAmount").val();
            let mrspan = $('#textInput')
            mrspan.html(ip)
            let widthText =  Math.ceil(mrspan.width())
            let operationwidth = ((460 - dolar) - widthText) / 2
            $('#SignCoin').css('left' , operationwidth )
          });
          // monto maximo dolares
          amountMax = '1000'
          break;
      default:
     
  }
}

transferCoin(2)


// --------------------------


//darle formato al monto con la separacion de coma
function formatAmmount(value, etiquete){
  //le quito espacios y comas
  let transferAmountFinal = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = transferAmountFinal

  if (str.length > 3) {
    //formato 
    let advanceAmmountFormat =  str.slice(0,1)  + "," + str.slice(1, str.length)
    //lo mando al html
    etiquete.html(advanceAmmountFormat)
  } else {
    //lo mando al html
      etiquete.html(str)
  }
}

formatAmmount( amountMax, $('#MaxAmount'))


var MaxAmount = $("#MaxAmount").text().replace(/,/g, "").replace(/ /g, "");


// cuando el monto supera el monto permitido
function errorInputConfirm() {
    //input
    $("#transferAmount").focus();
    $("#transferAmount").addClass("error");
    //btn borrar
    $("#DeleteTransferAmount").attr("disabled", "disabled");
    $("#DeleteTransferAmount").removeClass("btn-light");
    $("#DeleteTransferAmount").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmount").addClass("disabled");
    $("#ConfirmTransferAmount").attr("disabled", "disabled");
}



//SEPARAR NUMERO POR COMAS
function transferAmount(amount, sign, messageInput) {
    var AmountTotal = amount.val();
    if (AmountTotal.length == 0) {
        $(sign).addClass("hide");
        $(messageInput).removeClass("hide");
    }
    if (AmountTotal.length == 1) {
        $(sign).removeClass("hide");
        $(messageInput).addClass("hide");
    }
    if (AmountTotal > 999) {
        total = AmountTotal.slice(0, -3) + "," + AmountTotal.slice(-3);
        amount.val(total);
    }
    var posicion = AmountTotal.indexOf(",");
    if (posicion == 1 && AmountTotal.length <= 4) {
        var total2 = AmountTotal.replace(",", "");
        amount.val(total2);
    }
}

//BTN BORRAR
$("#DeleteTransferAmount").on("click", function () {
    //input
    $("#transferAmount").val("");
    $("#transferAmount").focus();
    $("#SignCoin").addClass("hide");
    $("#MessageAmount").removeClass("hide");
    $("#transferAmount").removeClass("error");
    //btn borrar
    $("#DeleteTransferAmount").attr("disabled", "disabled");
    $("#DeleteTransferAmount").removeClass("btn-light");
    $("#DeleteTransferAmount").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmount").addClass("disabled");
    $("#ConfirmTransferAmount").attr("disabled", "disabled");
    $("#ConfirmTransferAmount").removeClass("activeButtonNew");
    //border input
    $("#transferAmount").removeClass("border-blue")
});



function resetErrorNumberInput(){
  $("#transferAmount").one("keydown", function () {
    $("#transferAmount").val("");
    $("#transferAmount").removeClass("error");
    $('#higherAmount').fadeOut("fast")
    $("#ConfirmTransferAmount").removeClass("activeButton")
  });
}


//INGRESAR MONTO
$("#transferAmount").on("keyup", function () {
    transferAmount($("#transferAmount"), $("#SignCoin"), $("#MessageAmount"));

    if ($("#transferAmount").val().length == 0) {
        $("#transferAmount").removeClass("border-blue-happy")
         $("#transferAmount").removeClass("border-blue")
         $("#ConfirmTransferAmount").addClass("disabled");
        $("#ConfirmTransferAmount").attr("disabled", "disabled");
        $("#DeleteTransferAmount").attr("disabled", "disabled");
        $("#DeleteTransferAmount").removeClass("btn-light");
        $("#DeleteTransferAmount").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmount").val().length == 1) {
        $("#transferAmount").addClass("border-blue-happy")
         $("#transferAmount").removeClass("border-blue")
         // desactivar boton confirmar
         $("#ConfirmTransferAmount").addClass("disabled");
        $("#ConfirmTransferAmount").attr("disabled", "disabled");
        // desactivar boton borrar
        $("#DeleteTransferAmount").attr("disabled", "disabled");
        $("#DeleteTransferAmount").removeClass("btn-light");
        $("#DeleteTransferAmount").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmount").val().length > 1 && $("#transferAmount").val()[0] != 0 ) {
        $("#transferAmount").addClass("border-blue")
        $("#transferAmount").removeClass("border-blue-happy")
        //activar boton confirmar
        $("#ConfirmTransferAmount").removeClass("disabled");
        $("#ConfirmTransferAmount").removeAttr("disabled")
        //activar boton borrar
        $("#DeleteTransferAmount").removeAttr("disabled")
        $("#DeleteTransferAmount").addClass("btn-light");
        $("#DeleteTransferAmount").removeClass("btn-light-disabled none-box-shadow");
       
    }

});




$("#ConfirmTransferAmount").on("click", function () {

    //obtener valor del input
    var AmountAdvance = $("#transferAmount").val();
    //quitar espacio y coma
    var AmountStr = AmountAdvance.replace(/,/g, "").replace(/ /g, "");
    //pasar string a numero
    var AmountNumber = parseInt(AmountStr);


    if (AmountNumber > parseInt(MaxAmount) && $("#transferAmount").val().length > 1) {
        errorInputConfirm()
        resetErrorNumberInput()
        $("#higherAmount").fadeIn('slow');

    } else {
        console.log('ok')
    }


});











