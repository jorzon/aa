
//esta variable guarda el monto maximo de transferencia que se puede hacer --> string
var transferAmountFinalDollar = $("#MaxAmountDollar").text()

//focus
$("#transferAmountDollar").focus()


//signo moneda espacios
var dollar = 80

$("#transferAmountDollar").on("keyup", function () {
    let  ip = $("#transferAmountDollar").val();
    let mrspan = $('#textInputDollar')
    mrspan.html(ip)
    let widthText =  Math.ceil(mrspan.width())
    let operationwidth = ((460 - dollar) - widthText) / 2
    $('#SignCoinDollar').css('left' , operationwidth )
});



//darle formato al monto con la separacion de coma
function formatAmmountDollar(value, etiquete){
  //le quito espacios y comas
  let transferAmountFinalDollar = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = transferAmountFinalDollar

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

formatAmmountDollar(transferAmountFinalDollar, $('#MaxAmountDollar'))


var MaxAmountDollar = $("#MaxAmountDollar").text().replace(/,/g, "").replace(/ /g, "");


// cuando el monto supera el monto permitido
function errorInputConfirmDollar() {
    //input
    $("#transferAmountDollar").focus();
    $("#transferAmountDollar").addClass("error");
    //btn borrar
    $("#DeleteTransferAmountDollar").attr("disabled", "disabled");
    $("#DeleteTransferAmountDollar").removeClass("btn-light");
    $("#DeleteTransferAmountDollar").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmountDollar").addClass("disabled");
    $("#ConfirmTransferAmountDollar").attr("disabled", "disabled");
}



//SEPARAR NUMERO POR COMAS
function transferAmountDollar(amount, sign, messageInput) {
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
$("#DeleteTransferAmountDollar").on("click", function () {
    //input
    $("#transferAmountDollar").val("");
    $("#transferAmountDollar").focus();
    $("#SignCoinDollar").addClass("hide");
    $("#MessageAmountDollar").removeClass("hide");
    $("#transferAmountDollar").removeClass("error");
    //btn borrar
    $("#DeleteTransferAmountDollar").attr("disabled", "disabled");
    $("#DeleteTransferAmountDollar").removeClass("btn-light");
    $("#DeleteTransferAmountDollar").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmTransferAmountDollar").addClass("disabled");
    $("#ConfirmTransferAmountDollar").attr("disabled", "disabled");
    $("#ConfirmTransferAmountDollar").removeClass("activeButtonNew");
    //border input
    $("#transferAmountDollar").removeClass("border-blue")
});



function resetErrorNumberInputDollar(){
  $("#transferAmountDollar").one("keydown", function () {
    $("#transferAmountDollar").val("");
    $("#transferAmountDollar").removeClass("error");
    $('#higherAmountDollar').fadeOut("fast")
    $("#ConfirmTransferAmountDollar").removeClass("activeButton")
  });
}


//INGRESAR MONTO
$("#transferAmountDollar").on("keyup", function () {
    transferAmountDollar($("#transferAmountDollar"), $("#SignCoinDollar"), $("#MessageAmountDollar"));

    if ($("#transferAmountDollar").val().length == 0) {
        $("#transferAmountDollar").removeClass("border-blue-happy")
         $("#transferAmountDollar").removeClass("border-blue")
         $("#ConfirmTransferAmountDollar").addClass("disabled");
        $("#ConfirmTransferAmountDollar").attr("disabled", "disabled");
        $("#DeleteTransferAmountDollar").attr("disabled", "disabled");
        $("#DeleteTransferAmountDollar").removeClass("btn-light");
        $("#DeleteTransferAmountDollar").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmountDollar").val().length == 1) {
        $("#transferAmountDollar").addClass("border-blue-happy")
         $("#transferAmountDollar").removeClass("border-blue")
         // desactivar boton confirmar
         $("#ConfirmTransferAmountDollar").addClass("disabled");
        $("#ConfirmTransferAmountDollar").attr("disabled", "disabled");
        // desactivar boton borrar
        $("#DeleteTransferAmountDollar").attr("disabled", "disabled");
        $("#DeleteTransferAmountDollar").removeClass("btn-light");
        $("#DeleteTransferAmountDollar").addClass("btn-light-disabled none-box-shadow");
    }


    if ($("#transferAmountDollar").val().length > 1 && $("#transferAmountDollar").val()[0] != 0 ) {
        $("#transferAmountDollar").addClass("border-blue")
        $("#transferAmountDollar").removeClass("border-blue-happy")
        //activar boton confirmar
        $("#ConfirmTransferAmountDollar").removeClass("disabled");
        $("#ConfirmTransferAmountDollar").removeAttr("disabled")
        //activar boton borrar
        $("#DeleteTransferAmountDollar").removeAttr("disabled")
        $("#DeleteTransferAmountDollar").addClass("btn-light");
        $("#DeleteTransferAmountDollar").removeClass("btn-light-disabled none-box-shadow");
       
    }

});




$("#ConfirmTransferAmountDollar").on("click", function () {

    //obtener valor del input
    var AmountAdvance = $("#transferAmountDollar").val();
    //quitar espacio y coma
    var AmountStr = AmountAdvance.replace(/,/g, "").replace(/ /g, "");
    //pasar string a numero
    var AmountNumber = parseInt(AmountStr);

    if (AmountNumber > parseInt(MaxAmountDollar) && $("#transferAmountDollar").val().length > 1) {
        errorInputConfirmDollar()
        resetErrorNumberInputDollar()
        $("#higherAmountDollar").fadeIn('slow');

    } else {
        console.log('ok')
    }
});











