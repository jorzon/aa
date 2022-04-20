
//esta variable guarda el monto maximo de transferencia que se puede hacer --> string
var transferAmountFinalPen = $("#MaxAmountPen").text()

//focus
$("#transferAmountPen").focus()

//signo moneda espacios
var pen = 50

$("#transferAmountPen").on("keyup", function () {
    let  ip = $("#transferAmountPen").val();
    let mrspan = $('#textInputPen')
    mrspan.html(ip)
    let widthText =  Math.ceil(mrspan.width())
    let operationwidth = ((460 - pen) - widthText) / 2
    $('#SignCoinPen').css('left' , operationwidth )
});



//darle formato al monto con la separacion de coma
function formatAmmountPen(value, etiquete){
  //le quito espacios y comas
  let transferAmountFinalPen = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = transferAmountFinalPen

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

formatAmmountPen(transferAmountFinalPen, $('#MaxAmountPen'))


var MaxAmountPen = $("#MaxAmountPen").text().replace(/,/g, "").replace(/ /g, "");


// cuando el monto supera el monto permitido
function errorInputConfirmPen() {
    //input
    $("#transferAmountPen").focus();
    $("#transferAmountPen").addClass("error");
    //btn borrar
    $("#DeleteTransferAmountPen").attr("disabled", "disabled");
    $("#DeleteTransferAmountPen").removeClass("btn-light");
    $("#DeleteTransferAmountPen").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmountPen").addClass("disabled");
    $("#ConfirmTransferAmountPen").attr("disabled", "disabled");
}



//SEPARAR NUMERO POR COMAS
function transferAmountPen(amount, sign, messageInput) {
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
$("#DeleteTransferAmountPen").on("click", function () {
    //input
    $("#transferAmountPen").val("");
    $("#transferAmountPen").focus();
    $("#SignCoinPen").addClass("hide");
    $("#MessageAmountPen").removeClass("hide");
    $("#transferAmountPen").removeClass("error");
    //btn borrar
    $("#DeleteTransferAmountPen").attr("disabled", "disabled");
    $("#DeleteTransferAmountPen").removeClass("btn-light");
    $("#DeleteTransferAmountPen").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmountPen").addClass("disabled");
    $("#ConfirmTransferAmountPen").attr("disabled", "disabled");
    $("#ConfirmTransferAmountPen").removeClass("activeButtonNew");
    //border input
    $("#transferAmountPen").removeClass("border-blue")
});



function resetErrorNumberInputPen(){
  $("#transferAmountPen").one("keydown", function () {
    $("#transferAmountPen").val("");
    $("#transferAmountPen").removeClass("error");
    $('#higherAmountPen').fadeOut("fast")
    $("#ConfirmTransferAmountPen").removeClass("activeButton")
  });
}


//INGRESAR MONTO
$("#transferAmountPen").on("keyup", function () {
    transferAmountPen($("#transferAmountPen"), $("#SignCoinPen"), $("#MessageAmountPen"));

    if ($("#transferAmountPen").val().length == 0) {
        $("#transferAmountPen").removeClass("border-blue-happy")
         $("#transferAmountPen").removeClass("border-blue")
         $("#ConfirmTransferAmountPen").addClass("disabled");
        $("#ConfirmTransferAmountPen").attr("disabled", "disabled");
        $("#DeleteTransferAmountPen").attr("disabled", "disabled");
        $("#DeleteTransferAmountPen").removeClass("btn-light");
        $("#DeleteTransferAmountPen").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmountPen").val().length == 1) {
        $("#transferAmountPen").addClass("border-blue-happy")
         $("#transferAmountPen").removeClass("border-blue")
         // desactivar boton confirmar
         $("#ConfirmTransferAmountPen").addClass("disabled");
        $("#ConfirmTransferAmountPen").attr("disabled", "disabled");
        // desactivar boton borrar
        $("#DeleteTransferAmountPen").attr("disabled", "disabled");
        $("#DeleteTransferAmountPen").removeClass("btn-light");
        $("#DeleteTransferAmountPen").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmountPen").val().length > 1 && $("#transferAmountPen").val()[0] != 0 ) {
        $("#transferAmountPen").addClass("border-blue")
        $("#transferAmountPen").removeClass("border-blue-happy")
        //activar boton confirmar
        $("#ConfirmTransferAmountPen").removeClass("disabled");
        $("#ConfirmTransferAmountPen").removeAttr("disabled")
        //activar boton borrar
        $("#DeleteTransferAmountPen").removeAttr("disabled")
        $("#DeleteTransferAmountPen").addClass("btn-light");
        $("#DeleteTransferAmountPen").removeClass("btn-light-disabled none-box-shadow");
       
    }

});




$("#ConfirmTransferAmountPen").on("click", function () {

    //obtener valor del input
    var AmountAdvance = $("#transferAmountPen").val();
    //quitar espacio y coma
    var AmountStr = AmountAdvance.replace(/,/g, "").replace(/ /g, "");
    //pasar string a numero
    var AmountNumber = parseInt(AmountStr);

    if (AmountNumber > parseInt(MaxAmountPen) && $("#transferAmountPen").val().length > 1) {
        errorInputConfirmPen()
        resetErrorNumberInputPen()
        $("#higherAmountPen").fadeIn('slow');

    } else {
        console.log('ok')
    }
});











