$(document).ready(function () {
    // el la vista elige el monto el contenido del porcentaje de la tasa
    $(".tasaDeInteres").attr("data-content", "Tasa más baja: 8.92%");
    //tipo de clave
    //tipePin(5);
    //tipo de retirar efectivo
    // getMoney(1);
    //evento del dni
    $("#write_dni").on("keyup", function () {
        $("#label-start").addClass("hide");
        var dni = $("#write_dni").val();
        if (dni.length == 1) {
            $("#write_dni").removeClass("error");
            $("#label-error").fadeOut("fast");
            $("#label-placeholder-error").addClass("hide");
        }
        // function obfuscateDNI() {
        //     var obfuscatedDNI = "";
        //     for (var i = 0; i < dni.length; i++) {
        //         if (i + 1 == dni.length) {
        //             obfuscatedDNI += dni.substring(i, i + 1);
        //         } else {
        //             obfuscatedDNI += "⚫";
        //         }
        //     }
        //     return obfuscatedDNI;
        // }
        // $("#write_dni").val(obfuscateDNI());
        validandoDni(false);
    });
    //evento de la clave
    $("#write_pin").on("keyup", function () {
        $("#label-start").addClass("hide");
        var clave = $("#write_pin").val();
        if (clave.length == 1) {
            $("#write_pin").removeClass("error");
            $("#label-error").fadeOut("fast");
            $("#padlock").fadeIn("slow");
            $("#label-placeholder-error").addClass("hide");
        }

        validandoPin(true);
    });

    // colocar true al valor de la funcion cuando es el primer  unhappy de la vista de confirmacion de clave
    unhappyPin(false);
    //nueva clave
    $("#new_pin").on("keyup", function () {
        $("#label-start-newPin").addClass("hide");
        var clave = $("#new_pin").val();
        if (clave.length == 1) {
            $("#new_pin").removeClass("error");
            $("#label-error-newPin").fadeOut("fast");
            $("#padlock").fadeIn("slow");
            $("#label-placeholder-error").addClass("hide");
        }
        validandoNewPin(3);
    });
    //confirmar clave
    $("#confirm_pin").on("keyup", function () {
        $("#label-start").addClass("hide");
        validandoConfirmPin(true);
    });
    $("#MontoSoles").on("keyup", function () {
        otroMonto($("#MontoSoles"), $("#SimboloSoles"), $("#PlaceholderSoles"));
        $("#confirmarSoles").removeClass("activeButton");
        if ($("#MontoSoles").val().length == 1) {
            $("#MontoSoles").removeClass("error");
            $("#label-error-soles").fadeOut("fast");
            $("#confirmarSoles").removeClass("disabled");
            $("#confirmarSoles").removeAttr("disabled");
            $("#error-placeholder-soles").addClass("hide");
            $("#confirmarSolesOtros").removeClass("disabled");
            $("#confirmarSolesOtros").removeAttr("disabled");
        }
        if ($("#MontoSoles").val().length == 0) {
            $("#confirmarSoles").addClass("disabled");
            $("#confirmarSoles").attr("disabled", "true");
            $("#confirmarSolesOtros").addClass("disabled");
            $("#confirmarSolesOtros").attr("disabled", "true");
        }
    });
    $("#confirmarSoles").on("click", function () {
        validarMultiploBilletes($("#MontoSoles"), $("#SimboloSoles"), $("#label-error-soles"), $("#confirmarSoles"), $("#error-placeholder-soles"));
    });
    $("#MontoDolar").on("keyup", function () {
        otroMonto($("#MontoDolar"), $("#SimboloDolar"), $("#PlaceholderDolar"));
        $("#confirmarDolar").removeClass("activeButton");
        if ($("#MontoDolar").val().length == 1) {
            $("#MontoDolar").removeClass("error");
            $("#label-error-dolar").fadeOut("fast");
            $("#confirmarDolar").removeClass("disabled");
            $("#confirmarDolar").removeAttr("disabled");
            $("#error-placeholder-dolar").addClass("hide");
            $("#confirmarDolarOtros").removeClass("disabled");
            $("#confirmarDolarOtros").removeAttr("disabled");
        }
        if ($("#MontoDolar").val().length == 0) {
            $("#confirmarDolar").addClass("disabled");
            $("#confirmarDolar").attr("disabled", "true");
            $("#confirmarDolarOtros").addClass("disabled");
            $("#confirmarDolarOtros").attr("disabled", "true");
        }
    });
    $("#confirmarDolar").on("click", function () {
        validarMultiploBilletes($("#MontoDolar"), $("#SimboloDolar"), $("#label-error-dolar"), $("#confirmarDolar"), $("#error-placeholder-dolar"));
    });
    $("#ButtonVerSoles").on("click", function () {
        verSaldo($("#VerSaldoSoles"), $("#ButtonVerSoles"));
    });
    $("#ButtonVerDolar").on("click", function () {
        verSaldo($("#VerSaldoDolar"), $("#ButtonVerDolar"));
    });
    $("#ButtonVer").on("click", function () {
        verSaldo($("#VerSaldo"), $("#ButtonVer"));
    });
    $("#tablinks-right").on("click", function () {
        $("#infoModal").addClass("show");
        $("#infoModal .modal-backdrop").addClass("active visible");
        $("#partOneDolar").focus();
    });
    $("#closeInfoModal").on("click", function () {
        $(".modal-backdrop").removeClass("active visible");
        $("#infoModal").removeClass("show");
        $("#MontoDolar").focus();
    });

    //eventos del flujo de deposito
    //evento para el conteo de 24 segundos
    startTimer(24, $("#time"));

    // opciones detalle de deposito con tarjeta
    depositDetail(7);

    $("#timeRanura").on("click", function () {
        $("#content-lottie-inserteBilletesMultifuncion").addClass("hide");
        $("#content-lottie-inserteBilletesReciclador").addClass("hide");
        $("#Cancel").addClass("hide");
        $(this).addClass("hide");
        $("#messageRanura").fadeIn("slow");
    });

    //conteo de multifuncion y reciclador
    startTimerRanura(45, $("#timeClose"));
    startTimerRanura(30, $("#timeCloseSecond"));

    //retirar tarjeta
    // la opcion 1 es para mostrar  la animacion de la tarjeta desde el inicio
    // la opcion 2 es para primero mostrar el mensaje inferior de deposito con tarjeta y para cambio de clave
    // la opcion 3 es para primero mostrar el mensaje inferior de consulta de saldo
    getCard(2);


    //input de numero de cuenta en deposito en soles
    $("#cancelSoles").on("click", function () {
        CancelSoles();
    });
    $("#ConfirmarSoles").on("click", function () {
        validarAccount(true, 3);
    });

    $("#partOneSoles").on("keyup", function () {
        $("#contenedorInputSoles").removeClass("border-error");
        $("#contenedorInputSoles").addClass("border-blue");
        $("#messageOneError").addClass("hide");
        $("#infoAccountSoles").removeClass("hide");
        $(".guion-cuenta").removeClass("hide");
        $("#contenedorInputSoles input").removeClass("color-gray");
        $("#contenedorInputSoles input").addClass("color-primary-dark");
    });
    $("#agregarAccountSoles").on("click", function () {
        if ($("#agregarAccountSoles img:nth-child(2)").hasClass("hide")) {
            $("#agregarAccountSoles img:nth-child(1)").addClass("hide");
            $("#agregarAccountSoles img:nth-child(2)").removeClass("hide");
            $("#agregarAccountSoles span").html("Cuenta guardada");
            setTimeout(function () {
                $("#agregarAccountSoles span").html("Quitar cuenta");
            }, 2000);
        } else {
            $("#agregarAccountSoles img:nth-child(1)").removeClass("hide");
            $("#agregarAccountSoles img:nth-child(2)").addClass("hide");
            $("#agregarAccountSoles span").html("Guardar cuenta");
        }
    });
    $("#deleteSoles").on("click", function () {
        // location.reload();
        $("#partOneSoles").val("");
        $("#partTwoSoles").val("");
        $("#partThreeSoles").val("");
        $("#partOneSoles").focus();
        $("#contenTrue").fadeOut("fast");
        $("#contentFalse").fadeOut("fast");
        setTimeout(function () {
            $("#ConfirmarSoles").removeClass("hide");
            $("#ConfirmarSoles").removeClass("activeButton");
            $("#infoAccountSoles").removeClass("hide");
        }, 200);
        $("#imgAccount img").addClass("hide");
        $("#cancelDisabledSoles").removeClass("hide");
        $("#contenedorInputSoles").removeClass("border-gray");
        $("#contenedorInputSoles").addClass("border-blue");
        if ($("#partOneSoles").val().length == 0) {
            $("#ConfirmarSoles").attr("disabled", "true");
            $("#ConfirmarSoles").addClass("disabled");
        }
    });

    //input de numero de cuenta en deposito en dolares
    $("#cancelDolar").on("click", function () {
        CancelDolar();
    });
    $("#ConfirmarDolar").on("click", function () {
        validarAccountDolar(true, 1);
    });
    $("#partOneDolar").on("keyup", function () {
        $("#contenedorInputDolar").removeClass("border-error");
        $("#contenedorInputDolar").addClass("border-blue");
        $("#messageOneErrorDolar").addClass("hide");
        $("#infoAccountDolar").removeClass("hide");
        $(".guion-cuenta-dolar").removeClass("hide");
        $("#contenedorInputDolar input").removeClass("color-gray");
        $("#contenedorInputDolar input").addClass("color-primary-dark");
    });
    $("#agregarAccountDolar").on("click", function () {
        if ($("#agregarAccountDolar img:nth-child(2)").hasClass("hide")) {
            $("#agregarAccountDolar img:nth-child(1)").addClass("hide");
            $("#agregarAccountDolar img:nth-child(2)").removeClass("hide");
            $("#agregarAccountDolar span").html("Cuenta guardada");
            setTimeout(function () {
                $("#agregarAccountDolar  span").html("Quitar cuenta");
            }, 2000);
        } else {
            $("#agregarAccountDolar img:nth-child(1)").removeClass("hide");
            $("#agregarAccountDolar img:nth-child(2)").addClass("hide");
            $("#agregarAccountDolar span").html("Guardar cuenta");
        }
    });
    $("#deleteDolar").on("click", function () {
        // location.reload();
        $("#partOneDolar").val("");
        $("#partTwoDolar").val("");
        $("#partThreeDolar").val("");
        $("#partOneDolar").focus();
        $("#contenTrueDolar").fadeOut("fast");
        $("#contentFalseDolar").fadeOut("fast");
        setTimeout(function () {
            $("#infoAccountDolar").removeClass("hide");
            $("#ConfirmarDolar").removeClass("activeButton");
            $("#ConfirmarDolar").removeClass("hide");
        }, 200);
        $("#imgAccountDolar img").addClass("hide");
        $("#cancelDisabledDolar").removeClass("hide");
        $("#contenedorInputDolar").removeClass("border-gray");
        $("#contenedorInputDolar").addClass("border-blue");
        if ($("#partOneDolar").val().length == 0) {
            $("#ConfirmarDolar").attr("disabled", "true");
            $("#ConfirmarDolar").addClass("disabled");
        }
    });

    $("#tablinks-right").on("click", function () {
        $("#partOneDolar").focus;
    });

    //el efecto del press para los botones
    $(".btn").on("click", function () {
        $(this).addClass("activeButton");
    });
    $(".card").on("click", function () {
        $(this).addClass("activeCard");
    });
    $(".swiper-container-slide").on("click", function () {
        $(this).addClass("activeSlider");
    });

    // Identificar el dedo correspondiente
    IdentificarFingerprint(2);

    // progesso de la barra para el credito de tarjeta
    var progressCreditCard = $("#progressCreditCard");
    progressCreditCard.css("width", "38%");

    //evento de la clave de giro
    $("#write_pinGiro").on("keyup", function () {
        $("#label-start").addClass("hide");
        var clave = $("#write_pinGiro").val();
        if (clave.length == 1) {
            $("#write_pinGiro").removeClass("error");
            $("#label-error").fadeOut("fast");
            $("#label-placeholder-error").addClass("hide");
        }
        if (clave.length >= 4) {
            $("#nextPinGiro").attr("disabled", false);
            $("#nextPinGiro").removeClass("disabledOpacity");
        } else {
            $("#nextPinGiro").attr("disabled", true);
            $("#nextPinGiro").addClass("disabledOpacity");
            $("#nextPinGiro").removeClass("activeButton");
        }
    });

    $("#nextPinGiro").on("click", function () {
        $("#write_pinGiro").focus();
        validandoPinGiro(true);
    });
    //evento del input ingresa monto del giro
    $("#amountGiro").on("keyup", function () {
        var text = $("#amountGiro");
        var textTotal = text.val();

        if (text.val().length == 1) {
            $("#labelAmountGiro").addClass("hide");
            text.val("S/ " + text.val());
            $("#buttonAmountGiro").removeClass("disabledOpacity");
            $("#buttonAmountGiro").removeAttr("disabled");
        }
        if (text.val().length == 7) {
            total = textTotal.slice(0, -3) + "," + textTotal.slice(-3);
            text.val(total);
        }
    });
    
});

//otro monto para retir
function otroMonto(monto, simbolo, placeholder) {
    var MontoSolesTotal = monto.val();
    if (MontoSolesTotal.length == 0) {
        $(simbolo).addClass("hide");
        $(placeholder).removeClass("hide");
    }
    if (MontoSolesTotal.length == 1) {
        $(simbolo).removeClass("hide");
        $(placeholder).addClass("hide");
    }
    if (MontoSolesTotal > 999) {
        total = MontoSolesTotal.slice(0, -3) + "," + MontoSolesTotal.slice(-3);
        monto.val(total);
    }
    var posicion = MontoSolesTotal.indexOf(",");
    if (posicion == 1 && MontoSolesTotal.length <= 4) {
        var total2 = MontoSolesTotal.replace(",", "");
        monto.val(total2);
    }
}
function validarMultiploBilletes(monto, simbolo, labelError, button, errorPlaceholder) {
    var numero = monto.val();
    var resto1 = numero % 20;
    var resto2 = numero % 50;
    if (numero != "" && numero != 0) {
        if (resto1 == 0 || resto2 == 0) {
            console.log("multiplo");
        } else {
            if (numero.length == 5) {
                var newNumero = numero.replace(",", "");
                var newResto1 = newNumero % 20;
                var newresto2 = newNumero % 50;
                if (newResto1 == 0 || newresto2 == 0) {
                    console.log("multiplo");
                } else {
                    noMultiplo();
                }
            } else {
                noMultiplo();
            }
        }
    } else {
        noMultiplo();
    }
    function noMultiplo() {
        monto.val("");
        $(monto).addClass("error");
        $(labelError).fadeIn("slow");
        $(simbolo).addClass("hide");
        $(monto).focus();
        $(button).addClass("disabled");
        $(button).attr("disabled", "true");
        $(errorPlaceholder).removeClass("hide");
    }
}
//ver saldo
function verSaldo(verSaldo, button) {
    var button = button.attr("id");
    var tipo = verSaldo;
    if (tipo.attr("type") == "password") {
        tipo.attr("type", "text");
        $(verSaldo).addClass("font-size-18");
        $("#" + button + " .tbn-icon-eye").addClass("hide");
        $("#" + button + " .tbn-icon-slash").removeClass("hide");
        $("#" + button + " .tbn-text-eye").html("Ocultar");
    } else {
        tipo.attr("type", "password");
        $(verSaldo).removeClass("font-size-18");
        $("#" + button + " .tbn-icon-eye").removeClass("hide");
        $("#" + button + " .tbn-icon-slash").addClass("hide");
        $("#" + button + " .tbn-text-eye").html("Ver saldo");
    }
}
// validando dni
function validandoDni(getDni) {
    var dni = $("#write_dni").val();
    if (dni.length == 8 && getDni == true) {
        setTimeout(function () {
            $("#contentDni").addClass("hide");
            $("#write_dni").attr("disabled", true);
            $("#NoDni").addClass("hide");
            $("#imgDni").addClass("hide");
            $("#verificandoDni").fadeIn("slow");
            $("#verificandoDni").addClass("show");
            $("#buttomReturnDni").addClass("hide");
            if ($("#verificandoDni").hasClass("show")) {
                setTimeout(function () {
                    $("#verificandoDni p").html("Está tardando más de lo normal");
                }, 10000);
            }
        }, 50);
    }
    if (dni.length == 8 && getDni == false) {
        setTimeout(function () {
            $("#write_dni").val("");
            $("#write_dni").addClass("error");
            $("#label-error").fadeIn("slow");
            $("#label-placeholder-error").removeClass("hide");
        }, 50);
    }
}
//validando pin -- >
function validandoPin(getPin) {
    var clave = $("#write_pin").val();
    if (clave.length == 4 && getPin == true) {
        setTimeout(function () {
            $("#contentPin").addClass("hide");
            $("#write_pin").attr("disabled", true);
            $("#textPin").addClass("hide");
            $("#imgPin").addClass("hide");
            $("#verificandoPin").fadeIn("slow");
            $("#verificandoPin").addClass("show");
            $("#buttomReturn").addClass("hide");
            if ($("#verificandoPin").hasClass("show")) {
                setTimeout(function () {
                    $("#verificandoPin p").html("Está tardando más de lo normal");
                }, 10000);
            }
        }, 50);
    }
    if (clave.length == 4 && getPin == false) {
        setTimeout(function () {
            $("#write_pin").val("");
            $("#write_pin").addClass("error");
            $("#label-error").fadeIn("slow");
            $("#label-placeholder-error").removeClass("hide");
        }, 50);
    }
}
//tipo de pin 0 es retiro / 1 es ver saldo / 2 confirmar deposito / 3 es para prestamo / 4 retiro rapido NFC / 5 efectivo preferente
function tipePin(tipePin) {
    switch (tipePin) {
        case 0:
            $("#subTitlePin").html("para confirmar tu retiro");
            break;
        case 1:
            $("#subTitlePin").html("para ver tu saldo");
            $("#textPin").addClass("hide");
            $("#buttomReturn").removeClass("hide");
            break;
        case 2:
            $("#subTitlePin").html("para confirmar tu depósito");
            $("#textPin").html("Por seguridad, cubre tu clave");
            break;
        case 3:
            $("#subTitlePin").html("para confirmar tu préstamo");
            $("#textPin").addClass("hide");
            $("#buttomReturn").addClass("hide");
            break;
        case 4:
            $("#subTitlePin").html("para retirar S/ 100");
            $("#textPin").addClass("hide");
            $("#buttomReturn").addClass("hide");
            break;
        case 5:
            $("#subTitlePin").html("para confirmar tu Efectivo Preferente");
            $("#textPin").addClass("hide");
            $("#buttomReturn").addClass("hide");
            break;

        default:
    }
}

// swiper cuentas en soles
var swiper = new Swiper(".swiper-container-soles", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 3,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
         type: "progressbar",
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

    return direction;
}
// swiper cuentas en dolar
var swiper = new Swiper(".swiper-container-dolar", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 3,
    direction: getDirection(),
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

//eventos del flujo de deposito
//evento del cronometro regresivo
function startTimer(count, time) {
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
            return;
        }

        if (count !== 1) {
            time.text(count);
        } else {
            time.text(count);
            $("#timeText").html("segundo");
        }
    }
}
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
            $("#content-lottie-inserteBilletesMultifuncion").addClass("hide");
            $("#content-lottie-inserteBilletesReciclador").addClass("hide");
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

// swiper cuentas favoritas
var swiper = new Swiper(".swiper-container-favoritas", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 3,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

// detalle de deposito, elegir segun la opcion a mostrar
function depositDetail(number) {
    switch (number) {
        case 1:
            $("#depositAmount p:nth-child(1)").removeClass("hide");
            $("#amount p:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(3)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(4)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(3)").removeClass("hide");
            break;
        case 2:
            $("#depositDetail").removeClass("h-352");
            $("#depositDetail").addClass("h-304");
            $("#depositDetail").addClass("margin-top-24");
            $("#depositAmount p:nth-child(2)").removeClass("hide");
            $("#amount p:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(3)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(4)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(3)").removeClass("hide");
            break;

        case 3:
            $("#depositDetail").removeClass("h-352");
            $("#depositDetail").addClass("h-304");
            $("#depositDetail").addClass("margin-top-24");
            $("#depositAmount p:nth-child(1)").removeClass("hide");
            $("#amount p:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(4)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(2)").removeClass("hide");
            break;
        case 4:
            $("#depositDetail").removeClass("h-352");
            $("#depositDetail").addClass("h-304");
            $("#depositDetail").addClass("margin-top-24");
            $("#depositAmount p:nth-child(2)").removeClass("hide");
            $("#amount p:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(4)").removeClass("hide");
            break;
        case 5:
            $("#depositAmount p:nth-child(1)").removeClass("hide");
            $("#amount p:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(3)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(3)").removeClass("hide");
            break;
        case 6:
            $("#depositDetail").removeClass("h-352");
            $("#depositDetail").addClass("h-304");
            $("#depositDetail").addClass("margin-top-24");
            $("#depositAmount p:nth-child(2)").removeClass("hide");
            $("#amount p:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(4)").removeClass("hide");
            break;
        case 7:
            $("#depositAmount p:nth-child(1)").removeClass("hide");
            $("#amount p:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(2)").removeClass("hide");
            $("#depositItem div:nth-child(1) div:nth-child(3)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(1)").removeClass("hide");
            $("#depositItem div:nth-child(2) div:nth-child(2)").removeClass("hide");
            break;

        default:
            break;
    }
}

// evento de la transicion retirar tarjeta
// la opcion 1 es para mostrar  la animacion de la tarjeta desde el inicio
// la opcion 2 es para primero mostrar el mensaje inferior de deposito con tarjeta y para cambio de clave
// la opcion 3 es para primero mostrar el mensaje inferior de consulta de saldo
function getCard(number) {
    switch (number) {
        case 1:
            $("#getCard").fadeIn("fast");
            break;
        case 2:
            $("#voucher").fadeIn("fast");
            setTimeout(function () {
                $("#getCard").fadeIn("slow");
            }, 2000);
            break;
        case 3:
            $("#voucher p:nth-child(1)").html("Saldo impreso:");
            $("#voucher").fadeIn("fast");
            setTimeout(function () {
                $("#getCard").fadeIn("slow");
            }, 2000);
            break;
        default:
            break;
    }
}

//opcion del tap soles
// funcion del input al ingresar el numero de cuenta en deposito en soles
function EnterAccount() {
    document.getElementById("partOneSoles").focus();

    valorCuentaUno = $("#partOneSoles");
    cuentaUno = valorCuentaUno.val().split("");
    cuentaUno.push("");
    valorCuentaDos = $("#partTwoSoles");
    valorCuentaTres = $("#partThreeSoles");

    if (valorCuentaUno.val().length === 4) {
        valorCuentaDos.focus();
        console.log('next')
        valorCuentaDos = $("#partTwoSoles");
        cuentaDos = valorCuentaDos.val().split("");
        cuentaDos.push("");
    }
    if (valorCuentaDos.val().length === 4) {
        valorCuentaTres.focus();
        cuentaTres = valorCuentaTres.val().split("");
    }
    if (valorCuentaUno.val().length === 1) {
        $("#imgAccount img").addClass("hide");
        $("#cancelSoles").removeClass("hide");
    }
    if (valorCuentaTres.val().length > 4) {
        $("#ConfirmarSoles").removeAttr("disabled");
        $("#ConfirmarSoles").removeClass("disabled");
    } else {
        $("#ConfirmarSoles").attr("disabled", "true");
        $("#ConfirmarSoles").addClass("disabled");
    }
}

EnterAccount()

//eliminar digito por digito a la cuenta en soles
function CancelSoles() {
    if (document.getElementById("partThreeSoles").value.length != 0) {
        cuentaTres.pop();
        document.getElementById("partThreeSoles").focus();
        inputNombrTres = document.getElementById("partThreeSoles");
        inputNombrTres.value = cuentaTres.join("");

        if (document.getElementById("partThreeSoles").value.length === 0) {
            document.getElementById("partTwoSoles").focus();
            cuentaDos.pop();
            inputNombreDos = document.getElementById("partTwoSoles");
            inputNombreDos.value = cuentaDos.join("");
            if (document.getElementById("partTwoSoles").value.length === 0) {
                document.getElementById("partOneSoles").focus();
                cuentaUno.pop();
                inputNombreUno = document.getElementById("partOneSoles");
                inputNombreUno.value = cuentaUno.join("");
            }
        }
    } else {
        if (document.getElementById("partTwoSoles").value.length != 0) {
            document.getElementById("partTwoSoles").focus();
            cuentaDos.pop();
            inputNombreDos = document.getElementById("partTwoSoles");
            inputNombreDos.value = cuentaDos.join("");
            if (document.getElementById("partTwoSoles").value.length === 0) {
                document.getElementById("partOneSoles").focus();
                cuentaUno.pop();
                inputNombreUno = document.getElementById("partOneSoles");
                inputNombreUno.value = cuentaUno.join("");
            }
        } else {
            document.getElementById("partOneSoles").focus();
            cuentaUno.pop();
            inputNombreUno = document.getElementById("partOneSoles");
            inputNombreUno.value = cuentaUno.join("");
        }
    }

    if ($("#partThreeSoles").val().length > 4) {
        $("#ConfirmarSoles").removeAttr("disabled");
        $("#ConfirmarSoles").removeClass("disabled");
    } else {
        $("#ConfirmarSoles").attr("disabled", "true");
        $("#ConfirmarSoles").addClass("disabled");
    }
    if ($("#partOneSoles").val().length == 0) {
        $("#imgAccount img").addClass("hide");
        $("#cancelDisabledSoles").removeClass("hide");
    }
}
// validar numero de cuenta deposito en soles
function validarAccount(estado, number) {
    function carga() {
        $("#imgAccount img").addClass("hide");
        $("#deleteDisabledSoles").removeClass("hide");
        $("#infoAccountSoles").addClass("hide");
        $("#contenedorInputSoles").removeClass("border-blue");
        $("#contenedorInputSoles").addClass("border-gray");
        $("#contenedorInputSoles input").removeClass("color-primary-dark");
        $("#contenedorInputSoles input").addClass("color-gray");
        $("#ConfirmarSoles").addClass("hide");
        $("#MessageIdentificandoSoles").removeClass("hide");
    }
    if (estado == true) {
        carga();
        setTimeout(function () {
            $("#imgAccount img").addClass("hide");
            $("#deleteSoles").removeClass("hide");
            $("#MessageIdentificandoSoles").addClass("hide");
            $("#contenTrue").fadeIn("slow");
        }, 4000);
    } else {
        switch (number) {
            case 1:
                carga();
                setTimeout(function () {
                    $("#contenedorInputSoles").removeClass("border-gray");
                    $("#contenedorInputSoles").addClass("border-error");
                    $("#MessageIdentificandoSoles").addClass("hide");
                    $("#imgAccount img").addClass("hide");
                    $("#cancelDisabledSoles").removeClass("hide");
                    $(".guion-cuenta").addClass("hide");
                    $("#partOneSoles").val("");
                    $("#partTwoSoles").val("");
                    $("#partThreeSoles").val("");
                    $("#partOneSoles").focus();
                    $("#ConfirmarSoles").removeClass("hide");
                    $("#ConfirmarSoles").removeClass("activeButton");
                    $("#ConfirmarSoles").attr("disabled", true);
                    $("#ConfirmarSoles").addClass("disabled");
                    $("#messageOneError").removeClass("hide");
                }, 4000);

                break;
            case 2:
                carga();
                setTimeout(function () {
                    $("#contenedorInputSoles").removeClass("border-gray");
                    $("#contenedorInputSoles").addClass("border-error");
                    $("#MessageIdentificandoSoles").addClass("hide");
                    $("#imgAccount img").addClass("hide");
                    $("#cancelDisabledSoles").removeClass("hide");
                    $(".guion-cuenta").addClass("hide");
                    $("#partOneSoles").val("");
                    $("#partTwoSoles").val("");
                    $("#partThreeSoles").val("");
                    $("#partOneSoles").focus();
                    $("#ConfirmarSoles").removeClass("hide");
                    $("#ConfirmarSoles").removeClass("activeButton");
                    $("#ConfirmarSoles").attr("disabled", true);
                    $("#ConfirmarSoles").addClass("disabled");
                    $("#messageOneError").removeClass("hide");
                    $("#messageOneError p").html("Número de cuenta no permite depósitos, intenta con otra cuenta");
                }, 4000);
                break;
            case 3:
                carga();
                setTimeout(function () {
                    $("#imgAccount img").addClass("hide");
                    $("#deleteSoles").removeClass("hide");
                    $("#MessageIdentificandoSoles").addClass("hide");
                    $("#contentFalse").fadeIn("slow");
                }, 4000);
                break;
            default:
                break;
        }
    }
}

//opcion del tap dolar
// funcion del input al ingresar el numero de cuenta en deposito en dolar
function EnterAccountDolar() {
    document.getElementById("partOneDolar").focus();

    valorCuentaUno = $("#partOneDolar");
    cuentaUno = valorCuentaUno.val().split("");
    cuentaUno.push("");
    valorCuentaDos = $("#partTwoDolar");
    valorCuentaTres = $("#partThreeDolar");

    if (valorCuentaUno.val().length === 4) {
        valorCuentaDos.focus();
        valorCuentaDos = $("#partTwoDolar");
        cuentaDos = valorCuentaDos.val().split("");
        cuentaDos.push("");
    }
    if (valorCuentaDos.val().length === 4) {
        valorCuentaTres.focus();
        cuentaTres = valorCuentaTres.val().split("");
    }
    if (valorCuentaUno.val().length === 1) {
        $("#imgAccountDolar img").addClass("hide");
        $("#cancelDolar").removeClass("hide");
    }
    if (valorCuentaTres.val().length > 4) {
        $("#ConfirmarDolar").removeAttr("disabled");
        $("#ConfirmarDolar").removeClass("disabled");
    } else {
        $("#ConfirmarDolar").attr("disabled", "true");
        $("#ConfirmarDolar").addClass("disabled");
    }
}
//eliminar digito por digito a la cuenta en Dolar
function CancelDolar() {
    if (document.getElementById("partThreeDolar").value.length != 0) {
        cuentaTres.pop();
        document.getElementById("partThreeDolar").focus();
        inputNombrTres = document.getElementById("partThreeDolar");
        inputNombrTres.value = cuentaTres.join("");

        if (document.getElementById("partThreeDolar").value.length === 0) {
            document.getElementById("partTwoDolar").focus();
            cuentaDos.pop();
            inputNombreDos = document.getElementById("partTwoDolar");
            inputNombreDos.value = cuentaDos.join("");
            if (document.getElementById("partTwoDolar").value.length === 0) {
                document.getElementById("partOneDolar").focus();
                cuentaUno.pop();
                inputNombreUno = document.getElementById("partOneDolar");
                inputNombreUno.value = cuentaUno.join("");
            }
        }
    } else {
        if (document.getElementById("partTwoDolar").value.length != 0) {
            document.getElementById("partTwoDolar").focus();
            cuentaDos.pop();
            inputNombreDos = document.getElementById("partTwoDolar");
            inputNombreDos.value = cuentaDos.join("");
            if (document.getElementById("partTwoDolar").value.length === 0) {
                document.getElementById("partOneDolar").focus();
                cuentaUno.pop();
                inputNombreUno = document.getElementById("partOneDolar");
                inputNombreUno.value = cuentaUno.join("");
            }
        } else {
            document.getElementById("partOneDolar").focus();
            cuentaUno.pop();
            inputNombreUno = document.getElementById("partOneDolar");
            inputNombreUno.value = cuentaUno.join("");
        }
    }

    if ($("#partThreeDolar").val().length > 4) {
        $("#ConfirmarDolar").removeAttr("disabled");
        $("#ConfirmarDolar").removeClass("disabled");
    } else {
        $("#ConfirmarDolar").attr("disabled", "true");
        $("#ConfirmarDolar").addClass("disabled");
    }
    if ($("#partOneDolar").val().length == 0) {
        $("#imgAccountDolar img").addClass("hide");
        $("#cancelDisabledDolar").removeClass("hide");
    }
}
// validar numero de cuenta deposito en Dolar
function validarAccountDolar(estado, number) {
    function carga() {
        $("#imgAccountDolar img").addClass("hide");
        $("#deleteDisabledDolar").removeClass("hide");
        $("#infoAccountDolar").addClass("hide");
        $("#contenedorInputDolar").removeClass("border-blue");
        $("#contenedorInputDolar").addClass("border-gray");
        $("#contenedorInputDolar input").removeClass("color-primary-dark");
        $("#contenedorInputDolar input").addClass("color-gray");
        $("#ConfirmarDolar").addClass("hide");
        $("#MessageIdentificandoDolar").removeClass("hide");
    }
    if (estado == true) {
        carga();
        setTimeout(function () {
            $("#imgAccountDolar img").addClass("hide");
            $("#deleteDolar").removeClass("hide");
            $("#MessageIdentificandoDolar").addClass("hide");
            $("#contenTrueDolar").fadeIn("slow");
        }, 4000);
    } else {
        switch (number) {
            case 1:
                carga();
                setTimeout(function () {
                    $("#contenedorInputDolar").removeClass("border-gray");
                    $("#contenedorInputDolar").addClass("border-error");
                    $("#MessageIdentificandoDolar").addClass("hide");
                    $("#imgAccountDolar img").addClass("hide");
                    $("#cancelDisabledDolar").removeClass("hide");
                    $(".guion-cuenta-dolar").addClass("hide");
                    $("#partOneDolar").val("");
                    $("#partTwoDolar").val("");
                    $("#partThreeDolar").val("");
                    $("#partOneDolar").focus();
                    $("#ConfirmarDolar").removeClass("hide");
                    $("#ConfirmarDolar").removeClass("activeButton");
                    $("#ConfirmarDolar").attr("disabled", true);
                    $("#ConfirmarDolar").addClass("disabled");
                    $("#messageOneErrorDolar").removeClass("hide");
                }, 4000);

                break;
            case 2:
                carga();
                setTimeout(function () {
                    $("#contenedorInputDolar").removeClass("border-gray");
                    $("#contenedorInputDolar").addClass("border-error");
                    $("#MessageIdentificandoDolar").addClass("hide");
                    $("#imgAccountDolar img").addClass("hide");
                    $("#cancelDisabledDolar").removeClass("hide");
                    $(".guion-cuenta").addClass("hide");
                    $("#partOneDolar").val("");
                    $("#partTwoDolar").val("");
                    $("#partThreeDolar").val("");
                    $("#partOneDolar").focus();
                    $("#ConfirmarDolar").removeClass("hide");
                    $("#ConfirmarDolar").removeClass("activeButton");
                    $("#ConfirmarDolar").attr("disabled", true);
                    $("#ConfirmarDolar").addClass("disabled");
                    $("#messageOneErrorDolar").removeClass("hide");
                    $("#messageOneErrorDolar p").html("Número de cuenta no permite depósitos, intenta con otra cuenta");
                }, 4000);
                break;
            case 3:
                carga();
                setTimeout(function () {
                    $("#imgAccountDolar img").addClass("hide");
                    $("#deleteDolar").removeClass("hide");
                    $("#MessageIdentificandoDolar").addClass("hide");
                    $("#contentFalseDolar").fadeIn("slow");
                }, 4000);
                break;
            default:
                break;
        }
    }
}




// Identificar el dedo correspondiente
function IdentificarFingerprint(fingerprint) {
    switch (fingerprint) {
        case 1:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #pulgar-derecho").removeClass("hide");
            break;
        case 2:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #indice-derecho").removeClass("hide");
            break;
        case 3:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #medio-derecho").removeClass("hide");
            break;
        case 4:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #anular-derecho").removeClass("hide");
            break;
        case 5:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #menique-derecho").removeClass("hide");
            break;
        case 6:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #pulgar-izquierdo").removeClass("hide");
            break;
        case 7:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #indice-izquierdo").removeClass("hide");
            break;
        case 8:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #medio-izquierdo").removeClass("hide");
            break;
        case 9:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #anular-izquierdo").removeClass("hide");
            break;
        case 10:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #menique-izquierdo").removeClass("hide");
            break;

        default:
            break;
    }
}
// validando confirmación de clave
function validandoConfirmPin(getPin) {
    var clave = $("#confirm_pin").val();
    if (clave.length == 4 && getPin == true) {
        setTimeout(function () {
            $("#contentPin").addClass("hide");
            $("#confirm_pin").attr("disabled", true);
            $("#imgPin").addClass("hide");
            $("#verificandoConfirmPin").fadeIn("slow");
        }, 50);
    }
}
//el primer unhappy de la clave
function unhappyPin(getUnhappy) {
    if (getUnhappy == true) {
        $("#new_pin").val("");
        $("#new_pin").addClass("error");
        $("#label-start-newPin").html("Claves no coinciden");
        $("#label-error-newPin").css("display", "block");
        $("#label-error-newPin").html("La confirmación debe coincidir con la nueva clave");
    }
}

//validando la nueva clave
//opcion 1 no sucede nada es el flujo happy
//opcion 2  muestra el mensaje esta tardando mas de lo normal es el primer unhappy de la vista
//opcion 3 el input en error muestra el mensaje ingrese nuevamente
function validandoNewPin(getPin) {
    var clave = $("#new_pin").val();
    switch (getPin) {
        case 1:
            break;
        case 2:
            if (clave.length == 4 && getPin == 2) {
                setTimeout(function () {
                    $("#contentNewPin").addClass("hide");
                    $("#new_pin").attr("disabled", true);
                    $("#imgPin").addClass("hide");
                    $("#verificandoNewPin").fadeIn("slow");
                }, 50);
            }
            break;
        case 3:
            if (clave.length == 4 && getPin == 3) {
                setTimeout(function () {
                    $("#new_pin").val("");
                    $("#new_pin").addClass("error");
                    $("#label-error-newPin").fadeIn("slow");
                    $("#label-placeholder-error").removeClass("hide");
                }, 50);
            }
            break;
        default:
            break;
    }
}
//validando pin de cobro de giro
function validandoPinGiro(getPin) {
    if (getPin == true) {
        setTimeout(function () {
            $("#contentPinGiro").addClass("hide");
            $("#write_pinGiro").attr("disabled", true);
            $("#imgPinGiro").fadeOut("slow");
            $("#verificandoPinGiro").fadeIn("slow");
            $("#verificandoPinGiro").addClass("show");
            $("#buttomReturnGiro").addClass("hide");
            $("#nextPinGiro").addClass("hide");
            if ($("#verificandoPinGiro").hasClass("show")) {
                setTimeout(function () {
                    $("#verificandoPinGiro p").html("Está tardando más de lo normal");
                }, 10000);
            }
        }, 50);
    }
    if (getPin == false) {
        $("#nextPinGiro").attr("disabled", true);
        $("#nextPinGiro").addClass("disabledOpacity");
        $("#nextPinGiro").removeClass("activeButton");
        setTimeout(function () {
            $("#write_pinGiro").val("");
            $("#write_pinGiro").addClass("error");
            $("#label-error").fadeIn("slow");
            $("#label-placeholder-error").removeClass("hide");
        }, 50);
    }
}
// opcion 1 cajero sin papel
// opcion 2 cajero con papel
function getMoney(number) {
    switch (number) {
        case 1:
            $("#getMoney").fadeIn("fast");
            break;
        case 2:
            $("#voucher").fadeIn("fast");
            setTimeout(function () {
                $("#getMoney").fadeIn("slow");
            }, 2000);
            break;
        default:
            break;
    }
}
