var $comissionPrince = $('#comissionPrince')
var timeout = null;
var hopeTime = 950
var showComission = 2000


// ERROR INPUT
function errorInputConfirm() {
    //input
    $("#AmountAdvance").focus();
    $("#AmountAdvance").addClass("error");
    //btn borrar
    $("#ChangeMoney").attr("disabled", "disabled");
    $("#ChangeMoney").removeClass("btn-light");
    $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmMoney").addClass("disabled");
    $("#ConfirmMoney").attr("disabled", "disabled");
}

//monto maximo y minimo quitarle coma y espacios
var MinAmount = $("#MinAmount").text().replace(/,/g, "").replace(/ /g, "");
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
    $("#AmountAdvance").val("");
    $("#AmountAdvance").focus();
    $("#SignPen").addClass("hide");
    $("#MessageAmount").removeClass("hide");
    $("#AmountAdvance").removeClass("error");
    //btn borrar
    $("#ChangeMoney").attr("disabled", "disabled");
    $("#ChangeMoney").removeClass("btn-light");
    $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    //btn confirmar
    $("#ConfirmMoney").addClass("disabled");
    $("#ConfirmMoney").attr("disabled", "disabled");
    $("#ConfirmMoney").removeClass("activeButtonNew");
    //border input
    $("#AmountAdvance").removeClass("border-blue")
    //loading & comission
    $('#com').fadeOut("fast")
    $('#load').css('display' , 'none')
    $('#load').removeClass('hide')
});



function resetErrorNumberInput(value){
  $("#AmountAdvance").one("keydown", function () {
    $("#AmountAdvance").val("");
    $("#AmountAdvance").removeClass("error");
    //loading
    $('#com').fadeOut("fast")
    $('#load').css('display' , 'none')
    $('#load').removeClass('hide')
  });
}


//INGRESAR MONTO
$("#AmountAdvance").on("keyup", function () {
    otroMonto($("#AmountAdvance"), $("#SignPen"), $("#MessageAmount"));

    //obtener valor del input
    var AmountAdvance = $("#AmountAdvance").val();
    //quitar espacio y coma
    var AmountStr = AmountAdvance.replace(/,/g, "").replace(/ /g, "");
    //pasar string a numero
    var AmountNumber = parseInt(AmountStr);

    if (AmountNumber >= parseInt(MaxAmount) && $("#AmountAdvance").val().length > 1 ) {  
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
           $('#load').fadeIn("slow")
           $("#AmountAdvance").blur()
           if (!$("#load").hasClass("hide")) {
                setTimeout(function () {
                    $('#load').addClass('hide')
                    $("#higherAmount").fadeIn('slow');
                    $("#lowerAmount").css('display' , ' none');  
                    errorInputConfirm()
                    resetErrorNumberInput()
                }, showComission);
            }
        }, hopeTime);
    } 

    if (AmountNumber <= parseInt(MinAmount) && $("#AmountAdvance").val().length > 1 ) {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
           $('#load').fadeIn("slow")
           $("#AmountAdvance").blur()
           if (!$("#load").hasClass("hide")) {
                setTimeout(function () {
                    $('#load').addClass('hide')
                    $("#higherAmount").css('display' , ' none');
                    $("#lowerAmount").fadeIn('slow');
                    errorInputConfirm()
                    resetErrorNumberInput()
                }, showComission);
            }
        }, hopeTime);
    }




    if (AmountNumber <= parseInt(MaxAmount) && AmountNumber >= parseInt(MinAmount) ) {
        if ($("#AmountAdvance").val().length == 2 || $("#AmountAdvance").val().length == 3 || $("#AmountAdvance").val().length == 5) {
            if (timeout !== null) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
               $('#load').fadeIn("slow")
               $("#AmountAdvance").blur()
               if (!$("#load").hasClass("hide")) {
                    setTimeout(function () {
                        $('#load').addClass('hide')
                        $('#com').fadeIn("slow")
                        AmountComission(($("#AmountAdvance").val().replace(",", "")))
                        $("#ConfirmMoney").removeClass("disabled");
                        $("#ConfirmMoney").removeAttr("disabled");
                        $("#ChangeMoney").addClass("btn-light");
                        $("#ChangeMoney").removeAttr("disabled");
                        $("#AmountAdvance").blur()
                        $("#ChangeMoney").removeClass("btn-light-disabled none-box-shadow");
                    }, showComission);
                }
            }, hopeTime);
        }
    }


    if ($("#AmountAdvance").val().length == 1) {

         $("#AmountAdvance").addClass("border-blue")
        //desactivar boton confirmar
        $("#ConfirmMoney").addClass("disabled");
        $("#ConfirmMoney").attr("disabled", "disabled");
        $("#ConfirmMoney").removeClass("activeButtonNew");
        //input
        $("#AmountAdvance").removeClass("error");

        //mensaje error inferior
        $("#higherAmount").css('display' , 'none');
        $("#lowerAmount").css('display' , 'none');
    }
    if ($("#AmountAdvance").val().length == 0) {
        $("#AmountAdvance").removeClass("border-blue")
        //desactivar botones borrar
        $("#ChangeMoney").attr("disabled", "disabled");
        $("#ChangeMoney").removeClass("btn-light");
        $("#ChangeMoney").addClass("btn-light-disabled none-box-shadow");
    }
});





//OPERACION COMISION
function AmountComission(value) {
    let baseComission = 15
    operation = value / 500
    newValue = Math.ceil(operation)
    newComission = newValue * baseComission
    if (newComission < 60 ) {
        $("#comissionPrice").html(newComission)
    } else {
        $("#comissionPrice").html('60')
    }
           
}


$("#AmountAdvance").on("keyup", function () {
    let  ip = $("#AmountAdvance").val();
    let mrspan = $('#textInput')
    mrspan.html(ip)
    let widthText =  Math.ceil(mrspan.width())
    let operationwidth = (410 - widthText) / 2
    $('#SignPen').css('left' , operationwidth )
});


