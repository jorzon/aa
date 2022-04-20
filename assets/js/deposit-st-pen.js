    //input focus activo
    $("#partOneSoles").focus();

    // SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
    // SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
    // SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
    // SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
    $("#ConfirmarSoles").on("click", function () {
        validarAccount(true, 3);
        $("#partThreeSoles").addClass('pointer-events')
    });

    //PRIMER INPUT
    $("#partOneSoles").on("keyup", function () {
        $("#contenedorInputSoles").removeClass("border-error");
        // $(".guion-cuenta").addClass("color-gray")
        $("#messageOneError").addClass("hide")
        $("#infoAccountSoles").removeClass("hide");
        // $(".guion-cuenta").removeClass("hide");
    });


    //BOTON BORRAR DE NUMERO DE CUENTA
    $("#deleteSolesButton").on("click", function () {

        //activar fakeplace
        $('#fakeplaceholder').removeClass('inactiveplace')

        $('.guion-cuenta').removeClass('color-gray').removeClass('opacity-0')


        $("#partTwoSoles").attr('placeholder' , '0000')
        $("#partThreeSoles").attr('placeholder' , '000000')
        
        $("#accountFavoritesPen").removeClass('hide')

        //quitar value inputs
        $("#partOneSoles").val("").removeClass("pointer-events");
        $("#partTwoSoles").val("").addClass('pointer-events');
        $("#partThreeSoles").val("").addClass('pointer-events');
        //focus al primer input
        $("#partOneSoles").focus();

        //ocultar casos cuenta
        $("#contenTrue").fadeOut("fast");
        $("#contentFalse").fadeOut("fast");

        //desahabilitar boton borrar
        $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
        $('#deleteSolesButton').removeClass("btn-light");
        $("#deleteSolesButton").attr("disabled", "true");

        //los guiones se ponen plosmos
        $(".guion-cuenta").removeClass("color-gray")

        //$("#imgAccount img").addClass("hide");
        // $("#cancelDisabledSoles").removeClass("hide");
        $("#contenedorInputSoles").removeClass("border-gray border-blue-ok border-blue-focus");
        
        //boton confirmar desactivar
        $("#ConfirmarSoles").attr("disabled", "true");
        $("#ConfirmarSoles").addClass("disabled");
        $("#ConfirmarSoles").removeClass("hide");
        $("#ConfirmarSoles").removeClass("activeButton");

        //recomendacion numero de cuenta digitos
        $("#infoAccountSoles").removeClass("hide");

    });



    //CORREGIR NUMERO DE CUENTA
    $("#CorrectSolesButton").on("click", function () {
        //ocultar botones para confirmar
        $('#group-btn').addClass('hide')

        $("#partTwoSoles").attr('placeholder' , '0000')
        $("#partThreeSoles").attr('placeholder' , '000000')

        $("#accountFavoritesPen").removeClass('hide')

        $('.guion-cuenta').removeClass('color-gray').removeClass('opacity-0')

        //activar fakeplace
        $('#fakeplaceholder').removeClass('inactiveplace')


        //quita value inputs
        $("#partOneSoles").val("").removeClass("pointer-events");
        $("#partTwoSoles").val("").addClass("pointer-events");
        $("#partThreeSoles").val("").addClass("pointer-events");
        //activa focus primer input
        $("#partOneSoles").focus();

        //oculta opciones cuenta
        $("#contenTrue").addClass("hide");
        $("#contentFalse").addClass("hide");

        //mostrar boton borrar desactivado
        $('#deleteSolesButton').removeClass('hide')
        $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
        $("#deleteSolesButton").attr("disabled", "true");
        $('#deleteSolesButton').removeClass("btn-light");

        //mostrar boton continuar y desactivarlo
        $("#ConfirmarSoles").removeClass("hide");
        $("#ConfirmarSoles").removeClass("activeButton");
        $("#ConfirmarSoles").attr("disabled", "true");
        $("#ConfirmarSoles").addClass("disabled");

        //recomendacion numero cuenta
        $("#infoAccountSoles").removeClass("hide");
     
        //quitar border div contenedor de inputs
        $("#contenedorInputSoles").removeClass("border-gray border-blue-ok border-blue-focus");

   
    });



//opcion del tap soles
// VALIDA LOS DATOS INGRESADOS AL INPUT
function EnterAccount() {
    document.getElementById("partOneSoles").focus();

    valorCuentaUno = $("#partOneSoles");
    cuentaUno = valorCuentaUno.val().split("");
    cuentaUno.push("");
    valorCuentaDos = $("#partTwoSoles");
    valorCuentaTres = $("#partThreeSoles");


    //del input 1 pasa al 2 cuando esta lleno
    if (valorCuentaUno.val().length === 4) {
        valorCuentaDos.focus();
        valorCuentaDos = $("#partTwoSoles");
        valorCuentaUno.addClass('pointer-events')
        valorCuentaDos.removeClass('pointer-events')
        $('#first-dash-pen').removeClass('opacity-0').addClass("color-gray")
        cuentaDos = valorCuentaDos.val().split("");
        cuentaDos.push("");
    } else {
        $('#first-dash-pen').addClass('opacity-0')
        valorCuentaUno.removeClass('pointer-events')
        valorCuentaDos.addClass('pointer-events')
    }

    //del input 2 pasa al 3 cuando esta lleno
    if (valorCuentaDos.val().length === 4) {
        valorCuentaTres.focus();
        cuentaTres = valorCuentaTres.val().split("");
        $('#second-dash-pen').removeClass('opacity-0').addClass("color-gray")
        valorCuentaDos.addClass('pointer-events')
        valorCuentaTres.removeClass('pointer-events')
    } else {
        $('#second-dash-pen').addClass('opacity-0')
        // valorCuentaDos.removeClass('pointer-events')
        valorCuentaTres.addClass('pointer-events')
    }


    if (valorCuentaUno.val().length > 1) {
        //ocultar fakeplaceholder
        $('#fakeplaceholder').addClass('inactiveplace')
    }


    //activar border tipo focus
    if (valorCuentaUno.val().length === 1) {
        $('#contenedorInputSoles').addClass('border-blue-focus')
        //mostrar fakeplaceholder
        $('#fakeplaceholder').addClass('inactiveplace')
        $('.guion-cuenta').addClass('opacity-0')

        $("#partTwoSoles").removeAttr('placeholder')
        $("#partThreeSoles").removeAttr('placeholder')

    }


    //quitar border tipo focus
    if (valorCuentaUno.val().length === 0) {
        $('#contenedorInputSoles').removeClass('border-blue-focus')
        //ocultar fakeplaceholder
        $('#fakeplaceholder').removeClass('inactiveplace')
        //guiones
        $('.guion-cuenta').removeClass('color-gray').removeClass('opacity-0')

        $("#partTwoSoles").attr('placeholder' , '0000')
        $("#partThreeSoles").attr('placeholder' , '000000')

        $("#deleteSolesButton").attr("disabled", "true");
        $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
        $('#deleteSolesButton').removeClass("btn-light");
    }


    //quitar border tipo focus
    if (valorCuentaUno.val().length > 0) {
        //guiones
        // $('.guion-cuenta').addClass('opacity-0')
        $('.guion-cuenta').addClass('color-gray')
        $('#deleteSolesButton').removeAttr("disabled");
        $('#deleteSolesButton').removeClass("btn-light-disabled none-box-shadow");
        $('#deleteSolesButton').addClass("btn-light");
    }



    //se activa los botones
    if (valorCuentaTres.val().length > 4) {
        $("#ConfirmarSoles").removeAttr("disabled");
        $("#ConfirmarSoles").removeClass("disabled");
        $('#contenedorInputSoles').addClass('border-blue-ok')
        // $('#deleteSolesButton').removeAttr("disabled");
        // $('#deleteSolesButton').removeClass("btn-light-disabled none-box-shadow");
        // $('#deleteSolesButton').addClass("btn-light");
        
    } else {
        $("#ConfirmarSoles").attr("disabled", "true");
        $("#ConfirmarSoles").addClass("disabled");
        $('#contenedorInputSoles').removeClass('border-blue-ok');
        // $("#deleteSolesButton").attr("disabled", "true");
        // $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
        // $('#deleteSolesButton').removeClass("btn-light");

    }
}


// SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
// SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
// SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
// SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
function validarAccount(estado, number) {
    function carga() {
        //ocultar recomendaciones tarjeta
        $("#infoAccountSoles").addClass("hide");
        $("#accountFavoritesPen").addClass("hide");
        //ocultar botones
        $("#ConfirmarSoles").addClass("hide");
        $('#deleteSolesButton').addClass('hide')
        //loading mostrar
        $("#MessageIdentificandoSoles").removeClass("hide");
    }
    if (estado == true) {
        carga();
        setTimeout(function () {
            //ocultar el loading
            $("#MessageIdentificandoSoles").addClass("hide");
            //MUESTRA LA CUENTA FUE ENCONTRADA
            $("#contenTrue").removeClass('hide');
            //mostrar botones para confirmar
            $('#group-btn').removeClass('hide')

            $("#ConfirmarTwoSoles").removeClass('w-264').addClass("w-222").html("Continuar")
            $("#CorrectSolesButton").removeClass('w-264').addClass("w-222").html("Borrar")


        }, 4000);
    } else {
        switch (number) {
            case 1:
                carga();
                setTimeout(function () {
                    // agrega border rojo div input 
                    $("#contenedorInputSoles").addClass("border-error");
                    //recomendacion numero ocultar
                    $("#MessageIdentificandoSoles").addClass("hide");
                    //activas focus
                    $("#partOneSoles").focus();
                    //muestras btn continuar y lo desactivas
                    $("#ConfirmarSoles").removeClass("hide");
                    $("#ConfirmarSoles").removeClass("activeButton");
                    $("#ConfirmarSoles").attr("disabled", true);
                    $("#ConfirmarSoles").addClass("disabled");
                    //muestras mensaje
                    $("#messageOneError").removeClass("hide");
                    //mostrar boton borrar y desactivarlo
                    $('#deleteSolesButton').removeClass('hide')
                    $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
                    $('#deleteSolesButton').attr("disabled", true);
                    $('#deleteSolesButton').removeClass("btn-light");
                    //funcion para que al poner el primer valor resetear los inputs
                    resetErrorNumberInputSoles($("#partOneSoles"))
                    $("#accountFavoritesPen").removeClass("hide")
                    $("#partOneSoles").removeClass('pointer-events')

                }, 4000);

                break;
            case 2:
                carga();
                setTimeout(function () {
                     // agrega border rojo div input 
                    $("#contenedorInputSoles").addClass("border-error");
                    //recomendacion numero ocultar
                    $("#MessageIdentificandoSoles").addClass("hide");
                    //activas focus
                    $("#partOneSoles").focus();
                    //muestras btn continuar y lo desactivas
                    $("#ConfirmarSoles").removeClass("hide");
                    $("#ConfirmarSoles").removeClass("activeButton");
                    $("#ConfirmarSoles").attr("disabled", true);
                    $("#ConfirmarSoles").addClass("disabled");
                    //muestras mensaje
                    $("#messageOneError").removeClass("hide");
                    $("#messageOneError p").html("Número de cuenta no permite depósitos, intenta con otra cuenta");
                    $("#accountFavoritesPen").removeClass("hide")
                    //mostrar boton borrar y desactivarlo
                    $('#deleteSolesButton').removeClass('hide')
                    $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
                    $('#deleteSolesButton').attr("disabled", true);
                    $('#deleteSolesButton').removeClass("btn-light");
                    resetErrorNumberInputSoles($("#partOneSoles"))
                    $("#partOneSoles").removeClass('pointer-events')

                }, 4000);
                break;
            case 3:
                carga();
                setTimeout(function () {
                    
                    // $("#deleteSoles").removeClass("hide");
                    $("#MessageIdentificandoSoles").addClass("hide");
                    $("#contentFalse").removeClass("hide");
                    //mostrar botones para confirmar
                    $('#group-btn').removeClass('hide')
                    $("#ConfirmarTwoSoles").removeClass('w-222').addClass("w-264").html("Confirmar")
                    $("#CorrectSolesButton").removeClass('w-222').addClass("w-264").html("Corregir cuenta")
                }, 4000);
                break;
            default:
                break;
        }
    }
}



//AL ESCRIBIR EL PRIMER DATO, RESETEA LOS INPUTS
function resetErrorNumberInputSoles(value){
  $("#partOneSoles").one("keydown", function () {
    $("#partOneSoles").val("");
    $("#partTwoSoles").val("");
    $("#partThreeSoles").val("");
  });
}




//BORRAR DATO 1X1
function DeleteAccountTwoSoles(){
  $("#partTwoSoles").on("keyup", function () {
    let cant = $("#partTwoSoles").val().length
    let calc = 1
    let resultado = cant - calc
    if (resultado === -1) {
        $("#partOneSoles").focus()
    }
  });
}


//BORRAR DATO 1X1
function DeleteAccountThreeSoles(){
  $("#partThreeSoles").on("keyup", function () {
    let cant = $("#partThreeSoles").val().length
    let calc = 1
    let resultado = cant - calc
    if (resultado === -1) {
        $("#partTwoSoles").focus()
    }
  });
}

DeleteAccountThreeSoles()
DeleteAccountTwoSoles()


//efecto boton
$(".btn").on("click", function () {
    $(this).addClass("activeButton");
});


//activar focus en input al cambiar tabs
$("#tablinks-right").on("click", function () {
$('#partOneDolar').focus()
});

$("#tablinks-left").on("click", function () {
 $('#partOneSoles').focus()
});



// agregar y quitar de favoritos
$("#addAccountFavorite").on("click", function () {
    if ($("#addAccountFavorite .text-add-delete img:nth-child(2)").hasClass("hide")) {
        $("#addAccountFavorite .text-add-delete img:nth-child(1)").addClass("hide");
        $("#addAccountFavorite .text-add-delete img:nth-child(2)").removeClass("hide");
        $("#addAccountFavorite .text-add-delete").addClass('hide')
        $("#addAccountFavorite").addClass("pointer-events")
        $("#loadingAdd").removeClass('hide');
        setTimeout(function () {
            $("#loadingAdd").addClass('hide');
            $("#addAccountFavorite .text-add-delete").removeClass('hide')
            $("#addAccountFavorite .text-add-delete span").html('Quitar de favoritos')
            $("#addAccountFavorite").removeClass("pointer-events")
        }, 3000);
    } else {
        $("#addAccountFavorite .text-add-delete img:nth-child(1)").removeClass("hide");
        $("#addAccountFavorite .text-add-delete img:nth-child(2)").addClass("hide");
        $("#addAccountFavorite .text-add-delete span").html("Agregar a favoritos");    
        $("#loadingAdd").addClass('hide');  
    }   
});