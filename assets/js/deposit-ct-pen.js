    //input focus activo
    $("#partOneSoles").focus();

    // SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
    // SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
    // SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
    // SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
    $("#ConfirmarSoles").on("click", function() {
        validarAccount(true, 3);
    });

    //PRIMER INPUT
    $("#partOneSoles").on("keyup", function() {
        $("#contenedorInputSoles").removeClass("border-error");
        // $(".guion-cuenta").addClass("color-gray")
        $("#messageOneError").addClass("hide")
        $("#infoAccountSoles").removeClass("hide");
        // $(".guion-cuenta").removeClass("hide");
    });


    //BOTON AGREGAR CUENTA A FAVORITOS
    $("#agregarAccountSoles").on("click", function() {
        if ($("#agregarAccountSoles img:nth-child(2)").hasClass("hide")) {
            $("#agregarAccountSoles img:nth-child(1)").addClass("hide");
            $("#agregarAccountSoles img:nth-child(2)").removeClass("hide");
            // $("#agregarAccountSoles span").html("Cuenta guardada");
            $("#agregarAccountSoles span").html("Quitar cuenta");
            // setTimeout(function () {
            //     $("#agregarAccountSoles span").html("Quitar cuenta");
            // }, 2000);
        } else {
            $("#agregarAccountSoles img:nth-child(1)").removeClass("hide");
            $("#agregarAccountSoles img:nth-child(2)").addClass("hide");
            $("#agregarAccountSoles span").html("Guardar cuenta");
        }
    });

    //BOTON BORRAR DE NUMERO DE CUENTA
    $("#deleteSolesButton").on("click", function() {

        //activar fakeplace
        $('#fakeplaceholder').removeClass('inactiveplace')


        //quitar value inputs
        $("#partOneSoles").val("");
        $("#partTwoSoles").val("");
        $("#partThreeSoles").val("");
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
    $("#CorrectSolesButton").on("click", function() {
        //ocultar botones para confirmar
        $('#group-btn').addClass('hide')

        //activar fakeplace
        $('#fakeplaceholder').removeClass('inactiveplace')

        //los guiones se ponen plosmos
        $(".guion-cuenta").removeClass("color-gray")

        //quita value inputs
        $("#partOneSoles").val("");
        $("#partTwoSoles").val("");
        $("#partThreeSoles").val("");
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



    //opcion del tap dolares
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
            cuentaDos = valorCuentaDos.val().split("");
            cuentaDos.push("");
        }

        //del input 2 pasa al 3 cuando esta lleno
        if (valorCuentaDos.val().length === 4) {
            valorCuentaTres.focus();
            cuentaTres = valorCuentaTres.val().split("");
        }


        if (valorCuentaUno.val().length > 1) {
            //mostrar fakeplaceholder
            $('#fakeplaceholder').addClass('inactiveplace')
        }


        //activar border tipo focus
        if (valorCuentaUno.val().length === 1) {
            // $("#imgAccount img").addClass("hide");
            // $("#cancelSoles").removeClass("hide");
            $('#contenedorInputSoles').addClass('border-blue-focus')
                //mostrar fakeplaceholder
            $('#fakeplaceholder').addClass('inactiveplace')
        }


        //quitar border tipo focus
        if (valorCuentaUno.val().length === 0) {
            $('#contenedorInputSoles').removeClass('border-blue-focus')
                //ocultar fakeplaceholder
            $('#fakeplaceholder').removeClass('inactiveplace')
                //guiones
            $('.guion-cuenta').removeClass('color-gray')
        }


        //quitar border tipo focus
        if (valorCuentaUno.val().length > 0) {
            //guiones
            $('.guion-cuenta').addClass('color-gray')
        }



        //se activa los botones
        if (valorCuentaTres.val().length > 4) {
            $("#ConfirmarSoles").removeAttr("disabled");
            $("#ConfirmarSoles").removeClass("disabled");
            $('#contenedorInputSoles').addClass('border-blue-ok')
            $('#deleteSolesButton').removeAttr("disabled");
            $('#deleteSolesButton').removeClass("btn-light-disabled none-box-shadow");
            $('#deleteSolesButton').addClass("btn-light");

        } else {
            $("#ConfirmarSoles").attr("disabled", "true");
            $("#ConfirmarSoles").addClass("disabled");
            $('#contenedorInputSoles').removeClass('border-blue-ok');
            $("#deleteSolesButton").attr("disabled", "true");
            $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
            $('#deleteSolesButton').removeClass("btn-light");

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
            //ocultar botones
            $("#ConfirmarSoles").addClass("hide");
            $('#deleteSolesButton').addClass('hide')
                //loading mostrar
            $("#MessageIdentificandoSoles").removeClass("hide");
        }
        if (estado == true) {
            carga();
            setTimeout(function() {
                //ocultar el loading
                $("#MessageIdentificandoSoles").addClass("hide");
                //MUESTRA LA CUENTA FUE ENCONTRADA
                $("#contenTrue").removeClass('hide');
                //mostrar botones para confirmar
                $('#group-btn').removeClass('hide')
            }, 4000);
        } else {
            switch (number) {
                case 1:
                    carga();
                    setTimeout(function() {
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
                    }, 4000);

                    break;
                case 2:
                    carga();
                    setTimeout(function() {
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

                        //mostrar boton borrar y desactivarlo
                        $('#deleteSolesButton').removeClass('hide')
                        $('#deleteSolesButton').addClass("btn-light-disabled none-box-shadow ");
                        $('#deleteSolesButton').attr("disabled", true);
                        $('#deleteSolesButton').removeClass("btn-light");
                        resetErrorNumberInputSoles($("#partOneSoles"))

                    }, 4000);
                    break;
                case 3:
                    carga();
                    setTimeout(function() {

                        // $("#deleteSoles").removeClass("hide");
                        $("#MessageIdentificandoSoles").addClass("hide");
                        $("#contentFalse").removeClass("hide");
                        //mostrar botones para confirmar
                        $('#group-btn').removeClass('hide')
                    }, 4000);
                    break;
                default:
                    break;
            }
        }
    }



    //AL ESCRIBIR EL PRIMER DATO, RESETEA LOS INPUTS
    function resetErrorNumberInputSoles(value) {
        $("#partOneSoles").one("keydown", function() {
            $("#partOneSoles").val("");
            $("#partTwoSoles").val("");
            $("#partThreeSoles").val("");
        });
    }




    // //BORRAR DATO 1X1
    function DeleteAccountTwoSoles() {
        $("#partTwoSoles").on("keyup", function() {
            let cant = $("#partTwoSoles").val().length
            let calc = 1
            let resultado = cant - calc
            if (resultado === -1) {
                $("#partOneSoles").focus()
            }
        });
    }


    // //BORRAR DATO 1X1
    function DeleteAccountThreeSoles() {
        $("#partThreeSoles").on("keyup", function() {
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
    $(".btn").on("click", function() {
        $(this).addClass("activeButton");
    });


    //activar focus en input al cambiar tabs
    $("#tablinks-right").on("click", function() {
        $('#partOneDolar').focus()
    });

    $("#tablinks-left").on("click", function() {
        $('#partOneSoles').focus()
    });



    //OPCION 1 SI LA CUENTA LA ESCRIBIMOS NOSOTROS
    //OPCION 2 SI LA CUENTA VIENE DE FAVORITOS 
    function originAccount(number) {
        switch (number) {
            case 1:
                console.log('ingresamos la cuenta')
                break;
            case 2:
                console.log('elegimos una cuenta favortia')
                $('#partOneSoles').val('9589').blur()
                $('#partTwoSoles').val('9589').blur()
                $('#partThreeSoles').val('987589').blur()
                $('#fakeplaceholder').addClass('inactiveplace')
                $('#contenedorInputSoles').addClass('border-blue-ok')
                $('.guion-cuenta').addClass('color-gray')
                $('#infoAccountSoles').addClass('hide')
                $('#deleteSolesButton').addClass('hide')
                $('#ConfirmarSoles').addClass('hide')
                $('#contenTrue').removeClass('hide')
                $('#group-btn').removeClass('hide')
                $('#CorrectSolesButton').addClass('hide')
                $('#ConfirmarTwoSoles').addClass('w-304').html('Continuar')
                $("#agregarAccountSoles span").html("Quitar cuenta");
                $("#agregarAccountSoles img:nth-child(1)").addClass("hide");
                $("#agregarAccountSoles img:nth-child(2)").removeClass("hide");
                break;
            default:
        }
    }

    //OPCION 1 SI LA CUENTA LA ESCRIBIMOS NOSOTROS
    //OPCION 2 SI LA CUENTA VIENE DE FAVORITOS 
    originAccount(2)