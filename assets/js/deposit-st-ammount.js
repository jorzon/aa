var $comissionPrince = $('#comissionPrince')
var timeout = null;
var hopeTime = 500
var showComission = 1000


// ERROR INPUT
function errorInputConfirm() {
    //input
    // $("#Deposit-out-card").focus();
    $("#Deposit-out-card").addClass("error");
    //btn borrar
    $("#ChangeMoney").attr("disabled", "disabled");
    $("#ChangeMoney").removeClass("btn-light");
    $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmMoney").addClass("disabled");
    $("#ConfirmMoney").attr("disabled", "disabled");
}

//monto maximo y minimo quitarle coma y espacios
// var MinAmount = $("#MinAmount").text().replace(/,/g, "").replace(/ /g, "");
var MaxAmount = $("#MaxAmount").text().replace(/,/g, "").replace(/ /g, "");




//SEPARAR NUMERO POR COMAS - SIMBOLO - PLACEHOLDER
function otroMonto(amount, sign, messageInput) {
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
$("#ChangeMoney").on("click", function () {
    //input
    $("#Deposit-out-card").val("");
    $("#Deposit-out-card").focus();
    $("#SignPen").addClass("hide");
    $("#MessageAmount").removeClass("hide");
    $("#Deposit-out-card").removeClass("error");
    //btn borrar
    $("#ChangeMoney").attr("disabled", "disabled");
    $("#ChangeMoney").removeClass("btn-light");
    $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmMoney").addClass("disabled");
    $("#ConfirmMoney").attr("disabled", "disabled");
    $("#ConfirmMoney").removeClass("activeButtonNew");
    //border input
    $("#Deposit-out-card").removeClass("border-blue")
    //loading & comission
    // $('#com').fadeOut("fast")
    // $('#load').css('display' , 'none')
    // $('#load').removeClass('hide')
    $("#Deposit-out-card").removeClass("pointer-events")

    $("#higherAmount").addClass('hide');
    // $("#lowerAmount").addClass('hide');  
    $("#ammount-transfer").html("S/ 0.00").removeClass("color-gray").addClass("color-gray-claro")

});



function resetErrorNumberInput(value){
  $("#Deposit-out-card").one("keypress", function () {
    $("#Deposit-out-card").val("");
    $("#Deposit-out-card").removeClass("error");
    //loading
    // $('#com').fadeOut("fast")
    // $('#load').css('display' , 'none')
    // $('#load').removeClass('hide')
  });
}


//INGRESAR MONTO
$("#Deposit-out-card").on("keyup", function () {
    otroMonto($("#Deposit-out-card"), $("#SignPen"), $("#MessageAmount"));

    //obtener valor del input
    var AmountAdvance = $("#Deposit-out-card").val();
    //quitar espacio y coma
    var AmountStr = AmountAdvance.replace(/,/g, "").replace(/ /g, "");
    //pasar string a numero
    var AmountNumber = parseInt(AmountStr);

    if (AmountNumber >= parseInt(MaxAmount) && $("#Deposit-out-card").val().length > 1 ) {  
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
           //$('#load').fadeIn("slow")
           $("#Deposit-out-card").addClass("pointer-events")
           $("#Deposit-out-card").blur()
           setTimeout(function () {
                $("#higherAmount").removeClass('hide');  
                $("#Deposit-out-card").focus()
                $("#Deposit-out-card").removeClass("pointer-events")
                errorInputConfirm()
                resetErrorNumberInput()
            }, 1000);

        }, 500);
    } 



    if (AmountNumber <= parseInt(MaxAmount)) {
        if ($("#Deposit-out-card").val().length == 2 || $("#Deposit-out-card").val().length == 3 || $("#Deposit-out-card").val().length == 5) {
            if (timeout !== null) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
               // $('#load').fadeIn("slow")
               $("#Deposit-out-card").blur()
               $("#Deposit-out-card").addClass("pointer-events")
               $("#ammount-transfer").addClass("hide")
               $("#ammount-transfer-loading").removeClass("hide")
               let amountTransfer = $("#Deposit-out-card").val().replace(/,/g, "").replace(/ /g, "");
               // console.log(amountTransfer)
               let typeChange = $("#typeChange").html()
               let changeToPen = (amountTransfer * typeChange)
               let signMoney = "S/ "
               let numberToString = null

               if (changeToPen % 1 == 0) {
                    numberToString = changeToPen
               } else {
                    numberToString = changeToPen.toFixed(2)
               }
               console.log(changeToPen)
               setTimeout(function () {
                    // $('#load').addClass('hide')
                    // $('#com').fadeIn("slow")
                    // AmountComission(($("#Deposit-out-card").val().replace(",", "")))
                    $("#ConfirmMoney").removeClass("disabled box-shadow-gray");
                    $("#ConfirmMoney").removeAttr("disabled");
                    $("#ChangeMoney").addClass("btn-light");
                    $("#ChangeMoney").removeAttr("disabled");
                    $("#ChangeMoney").removeClass("btn-light-disabled none-box-shadow");
                    $("#Deposit-out-card").blur().addClass("pointer-events")
                    $("#ammount-transfer-loading").addClass("hide")
                    $("#ammount-transfer").removeClass("hide color-gray-claro").addClass("color-gray").html(signMoney + numberToString)
                }, 3000);
            }, 1000);
        }
    }

    if ($("#Deposit-out-card").val().length >  1) {
        $("#Deposit-out-card").addClass("border-blue").removeClass("border-blue-happy")
        //desactivar boton confirmar
        $("#ConfirmMoney").addClass("disabled");
        $("#ConfirmMoney").attr("disabled", "disabled");
        $("#ConfirmMoney").removeClass("activeButtonNew");
        //input
        $("#Deposit-out-card").removeClass("error");

        //mensaje error inferior
        $("#higherAmount").addClass('hide');
        // $("#lowerAmount").addClass('hide');
    }


    if ($("#Deposit-out-card").val().length == 1) {
        $("#Deposit-out-card").addClass("border-blue-happy")
        //desactivar boton confirmar
        $("#ConfirmMoney").addClass("disabled");
        $("#ConfirmMoney").attr("disabled", "disabled");
        $("#ConfirmMoney").removeClass("activeButtonNew");
        //input
        $("#Deposit-out-card").removeClass("error");

        //mensaje error inferior
        $("#higherAmount").addClass('hide');
        // $("#lowerAmount").addClass('hide');
    }
    if ($("#Deposit-out-card").val().length == 0) {
        $("#Deposit-out-card").removeClass("border-blue border-blue-happy")
        //desactivar botones borrar
        $("#ChangeMoney").attr("disabled", "disabled");
        $("#ChangeMoney").removeClass("btn-light");
        $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    }
});




//tabla niveles
// 50 a 500 -> 15
// 501 a 1000 -> 30
// 1001 a 1500 -> 45
// 1501 a 2500 -> 60

//OPERACION COMISION
// function AmountComission(value) {
//     let baseComission = 15
//     operation = value / 500
//     newValue = Math.ceil(operation)
//     newComission = newValue * baseComission
//     if (newComission < 60 ) {
//         $("#comissionPrice").html(newComission)
//     } else {
//         $("#comissionPrice").html('60')
//     }
           
// }

