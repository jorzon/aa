    //input focus activo
    $("#partOneDolar").focus();

    // SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
    // SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
    // SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
    // SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
    $("#ConfirmarDolar").on("click", function () {
        validarAccountDolar(false, 3);
    });

    //PRIMER INPUT
    $("#partOneDolar").on("keyup", function () {
        $("#contenedorInputDolar").removeClass("border-error");
        // $(".guion-cuenta-dolar").addClass("color-gray")
        $("#messageOneErrorDolar").addClass("hide")
        $("#infoAccountDolar").removeClass("hide");
        // $(".guion-cuenta-dolar").removeClass("hide");
    });


    //BOTON AGREGAR CUENTA A FAVORITOS
    $("#agregarAccountDolar").on("click", function () {
        if ($("#agregarAccountDolar img:nth-child(2)").hasClass("hide")) {
            $("#agregarAccountDolar img:nth-child(1)").addClass("hide");
            $("#agregarAccountDolar img:nth-child(2)").removeClass("hide");
            // $("#agregarAccountDolar span").html("Cuenta guardada");
            $("#agregarAccountDolar span").html("Quitar cuenta");
            // setTimeout(function () {
            //     $("#agregarAccountDolar span").html("Quitar cuenta");
            // }, 2000);
        } else {
            $("#agregarAccountDolar img:nth-child(1)").removeClass("hide");
            $("#agregarAccountDolar img:nth-child(2)").addClass("hide");
            $("#agregarAccountDolar span").html("Guardar cuenta");
        }
    });

    //BOTON BORRAR DE NUMERO DE CUENTA
    $("#deleteDolaresButton").on("click", function () {

        //activar fakeplace
        $('#fakeplaceholderDolar').removeClass('inactiveplace')


        //quitar value inputs
        $("#partOneDolar").val("");
        $("#partTwoDolar").val("");
        $("#partThreeDolar").val("");
        //focus al primer input
        $("#partOneDolar").focus();

        //ocultar casos cuenta
        $("#contenTrueDolar").fadeOut("fast");
        $("#contentFalseDolar").fadeOut("fast");

        //desahabilitar boton borrar
        $('#deleteDolaresButton').addClass("btn-light-disabled none-box-shadow ");
        $('#deleteDolaresButton').removeClass("btn-light");
        $("#deleteDolaresButton").attr("disabled", "true");

        //los guiones se ponen plosmos
        $(".guion-cuenta-dolar").removeClass("color-gray")

        //$("#imgAccount img").addClass("hide");
        // $("#cancelDisabledSoles").removeClass("hide");
        $("#contenedorInputDolar").removeClass("border-gray border-blue-ok border-blue-focus");
        
        //boton confirmar desactivar
        $("#ConfirmarDolar").attr("disabled", "true");
        $("#ConfirmarDolar").addClass("disabled");
        $("#ConfirmarDolar").removeClass("hide");
        $("#ConfirmarDolar").removeClass("activeButton");

        //recomendacion numero de cuenta digitos
        $("#infoAccountDolar").removeClass("hide");

    });



    //CORREGIR NUMERO DE CUENTA
    $("#CorrectDolarButton").on("click", function () {
        //ocultar botones para confirmar
        $('#group-btn-dolar').addClass('hide')

        //activar fakeplace
        $('#fakeplaceholderDolar').removeClass('inactiveplace')

        //los guiones se ponen plosmos
        $(".guion-cuenta-dolar").removeClass("color-gray")

        //quita value inputs
        $("#partOneDolar").val("");
        $("#partTwoDolar").val("");
        $("#partThreeDolar").val("");
        //activa focus primer input
        $("#partOneDolar").focus();

        //oculta opciones cuenta
        $("#contenTrueDolar").addClass("hide");
        $("#contentFalseDolar").addClass("hide");

        //mostrar boton borrar desactivado
        $('#deleteDolaresButton').removeClass('hide')
        $('#deleteDolaresButton').addClass("btn-light-disabled none-box-shadow ");
        $("#deleteDolaresButton").attr("disabled", "true");
        $('#deleteDolaresButton').removeClass("btn-light");

        //mostrar boton continuar y desactivarlo
        $("#ConfirmarDolar").removeClass("hide");
        $("#ConfirmarDolar").removeClass("activeButton");
        $("#ConfirmarDolar").attr("disabled", "true");
        $("#ConfirmarDolar").addClass("disabled");

        //recomendacion numero cuenta
        $("#infoAccountDolar").removeClass("hide");
     
        //quitar border div contenedor de inputs
        $("#contenedorInputDolar").removeClass("border-gray border-blue-ok border-blue-focus");

   
    });



//opcion del tap soles
// VALIDA LOS DATOS INGRESADOS AL INPUT
function EnterAccountDolar() {
    document.getElementById("partOneDolar").focus();

    valorCuentaUno = $("#partOneDolar");
    cuentaUno = valorCuentaUno.val().split("");
    cuentaUno.push("");
    valorCuentaDos = $("#partTwoDolar");
    valorCuentaTres = $("#partThreeDolar");


    //del input 1 pasa al 2 cuando esta lleno
    if (valorCuentaUno.val().length === 4) {
        valorCuentaDos.focus();
        valorCuentaDos = $("#partTwoDolar");
        cuentaDos = valorCuentaDos.val().split("");
        cuentaDos.push("");
    }

    //del input 2 pasa al 3 cuando esta lleno
    if (valorCuentaDos.val().length === 4) {
        valorCuentaTres.focus();
        cuentaTres = valorCuentaTres.val().split("");
    }


    if (valorCuentaUno.val().length > 1) {
        //mostrar fakeplaceholderDolar
        $('#fakeplaceholderDolar').addClass('inactiveplace')
    }


    //activar border tipo focus
    if (valorCuentaUno.val().length === 1) {
        // $("#imgAccount img").addClass("hide");
        // $("#cancelSoles").removeClass("hide");
        $('#contenedorInputDolar').addClass('border-blue-focus')
        //mostrar fakeplaceholderDolar
        $('#fakeplaceholderDolar').addClass('inactiveplace')
    }


    //quitar border tipo focus
    if (valorCuentaUno.val().length === 0) {
        $('#contenedorInputDolar').removeClass('border-blue-focus')
        //ocultar fakeplaceholderDolar
        $('#fakeplaceholderDolar').removeClass('inactiveplace')
        //guiones
        $('.guion-cuenta-dolar').removeClass('color-gray')
    }


    //quitar border tipo focus
    if (valorCuentaUno.val().length > 0) {
        //guiones
        $('.guion-cuenta-dolar').addClass('color-gray')
    }



    //se activa los botones
    if (valorCuentaTres.val().length > 4) {
        $("#ConfirmarDolar").removeAttr("disabled");
        $("#ConfirmarDolar").removeClass("disabled");
        $('#contenedorInputDolar').addClass('border-blue-ok')
        $('#deleteDolaresButton').removeAttr("disabled");
        $('#deleteDolaresButton').removeClass("btn-light-disabled none-box-shadow");
        $('#deleteDolaresButton').addClass("btn-light");
        
    } else {
        $("#ConfirmarDolar").attr("disabled", "true");
        $("#ConfirmarDolar").addClass("disabled");
        $('#contenedorInputDolar').removeClass('border-blue-ok');
        $("#deleteDolaresButton").attr("disabled", "true");
        $('#deleteDolaresButton').addClass("btn-light-disabled none-box-shadow ");
        $('#deleteDolaresButton').removeClass("btn-light");

    }
}


// SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
// SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
// SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
// SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
function validarAccountDolar(estado, number) {
    function cargaDolar() {
        //ocultar recomendaciones tarjeta
        $("#infoAccountDolar").addClass("hide");
        //ocultar botones
        $("#ConfirmarDolar").addClass("hide");
        $('#deleteDolaresButton').addClass('hide')
        //loading mostrar
        $("#MessageIdentificandoDolar").removeClass("hide");
    }
    if (estado == true) {
        cargaDolar();
        setTimeout(function () {
            //ocultar el loading
            $("#MessageIdentificandoDolar").addClass("hide");
            //MUESTRA LA CUENTA FUE ENCONTRADA
            $("#contenTrueDolar").removeClass('hide');
            //mostrar botones para confirmar
            $('#group-btn-dolar').removeClass('hide')
        }, 4000);
    } else {
        switch (number) {
            case 1:
                cargaDolar();
                setTimeout(function () {
                    // agrega border rojo div input 
                    $("#contenedorInputDolar").addClass("border-error");
                    //recomendacion numero ocultar
                    $("#MessageIdentificandoDolar").addClass("hide");
                    //activas focus
                    $("#partOneDolar").focus();
                    //muestras btn continuar y lo desactivas
                    $("#ConfirmarDolar").removeClass("hide");
                    $("#ConfirmarDolar").removeClass("activeButton");
                    $("#ConfirmarDolar").attr("disabled", true);
                    $("#ConfirmarDolar").addClass("disabled");
                    //muestras mensaje
                    $("#messageOneErrorDolar").removeClass("hide");
                    //mostrar boton borrar y desactivarlo
                    $('#deleteDolaresButton').removeClass('hide')
                    $('#deleteDolaresButton').addClass("btn-light-disabled none-box-shadow ");
                    $('#deleteDolaresButton').attr("disabled", true);
                    $('#deleteDolaresButton').removeClass("btn-light");
                    //funcion para que al poner el primer valor resetear los inputs
                    resetErrorNumberInputDolares($("#partOneDolar"))
                }, 4000);

                break;
            case 2:
                cargaDolar();
                setTimeout(function () {
                     // agrega border rojo div input 
                    $("#contenedorInputDolar").addClass("border-error");
                    //recomendacion numero ocultar
                    $("#MessageIdentificandoDolar").addClass("hide");
                    //activas focus
                    $("#partOneDolar").focus();
                    //muestras btn continuar y lo desactivas
                    $("#ConfirmarDolar").removeClass("hide");
                    $("#ConfirmarDolar").removeClass("activeButton");
                    $("#ConfirmarDolar").attr("disabled", true);
                    $("#ConfirmarDolar").addClass("disabled");
                    //muestras mensaje
                    $("#messageOneErrorDolar").removeClass("hide");
                    $("#messageOneErrorDolar p").html("Número de cuenta no permite depósitos, intenta con otra cuenta");

                    //mostrar boton borrar y desactivarlo
                    $('#deleteDolaresButton').removeClass('hide')
                    $('#deleteDolaresButton').addClass("btn-light-disabled none-box-shadow ");
                    $('#deleteDolaresButton').attr("disabled", true);
                    $('#deleteDolaresButton').removeClass("btn-light");

                    resetErrorNumberInputDolares($("#partOneDolar"))

                }, 4000);
                break;
            case 3:
                cargaDolar();
                setTimeout(function () {
                    
                    // $("#deleteSoles").removeClass("hide");
                    $("#MessageIdentificandoDolar").addClass("hide");
                    $("#contentFalseDolar").removeClass("hide");
                    //mostrar botones para confirmar
                    $('#group-btn-dolar').removeClass('hide')
                }, 4000);
                break;
            default:
                break;
        }
    }
}



//AL ESCRIBIR EL PRIMER DATO, RESETEA LOS INPUTS
function resetErrorNumberInputDolares(value){
  $("#partOneDolar").one("keydown", function () {
    $("#partOneDolar").val("");
    $("#partTwoDolar").val("");
    $("#partThreeDolar").val("");
  });
}




// //BORRAR DATO 1X1
function DeleteAccountTwoDolares(){
  $("#partTwoDolar").on("keyup", function () {
    let cant = $("#partTwoDolar").val().length
    let calc = 1
    let resultado = cant - calc
    if (resultado === -1) {
        $("#partOneDolar").focus()
    }
  });
}


// //BORRAR DATO 1X1
function DeleteAccountThreeDolares(){
  $("#partThreeDolar").on("keyup", function () {
    let cant = $("#partThreeDolar").val().length
    let calc = 1
    let resultado = cant - calc
    if (resultado === -1) {
        $("#partTwoDolar").focus()
    }
  });
}

DeleteAccountThreeDolares()
DeleteAccountTwoDolares()


//boton
// $(".btn").on("click", function () {
//     $(this).addClass("activeButton");
// });

// let longitud = false
// function validarOnlyNumber (inputValue) {
//     let inpVal = inputValue
//     if(!(/^(?!.*\s)([0-9])+$/g.test(inpVal.val()))){
//        inpVal.val('')
//     } else {
//         longitud = true
//     }
// }

// $("#partOneDolar").on("keyup", function () {
//     validarOnlyNumber($('#partOneDolar'))
//     if (longitud == true) {
//         $('#fakeplaceholderDolar').addClass('inactiveplace')  
//     }else {
//         $('#fakeplaceholderDolar').removeClass('inactiveplace')  
//     }
//   });

// $("#partTwoDolar").on("keyup", function () {
//     validarOnlyNumber($('#partTwoDolar'))
//   });

// $("#partThreeDolar").on("keyup", function () {
//     validarOnlyNumber($('#partThreeDolar'))
//   });