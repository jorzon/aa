//input focus activo
$("#inputOne").focus();

// SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA - validarAccount(true, 1);
// SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE - validarAccount(false, 1);
// SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS  - validarAccount(false, 2);
// SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS - validarAccount(false, 3);
$("#confirmButtonFindAccount").on("click", function () {
    $('#contentButtonsError').addClass('hide')
    validarAccount(false, 2);
});

//PRIMER INPUT
$("#inputOne").on("keyup", function () {
    $("#contentInputs").removeClass("border-error");
    $("#factNumberAccount").removeClass("hide");
    $("#accountNotExist").addClass("hide");
    $("#accountNotPermit").addClass("hide");
});





//Borrar numero de cuenta 
$("#deleteButtonMessageError").on("click", function () {

    // mostrar guion
     $('.dash-account').removeClass('color-gray opacity-0')

    // agregar placeholder
    $("#inputTwo").attr('placeholder' , '0000')
    $("#inputThree").attr('placeholder' , '000000')

    //quitar-agregar  clase a input
    $("#contentInputs input").addClass("pointer-events")
    $("#contentInputs").removeClass("pointer-events")
    $("#contentInputs #inputOne").removeClass("pointer-events")

    //ocultar botones para confirmar
    $('#group-btn').addClass('hide')

    //activar fakeplace
    $('#fakeplaceholder').removeClass('inactiveplace')

    //los guiones se ponen plosmos
    $(".dash-account").removeClass("color-gray")

    //quita value inputs y activar focus
    resetInputs()

    //oculta opciones cuenta
    $("#contenTrue").addClass("hide");
    $("#contentFalse").addClass("hide");

    //desactivar botones borrar y confirmar
    defuseButtonsFindNumberAccount()

    //recomendacion numero cuenta
    $("#factNumberAccount").removeClass("hide");
 
    //quitar border div contenedor de inputs
    $("#contentInputs").removeClass("border-gray border-blue-ok border-blue-focus");


});



//Corregir numero de cuenta
$("#deleteButton").on("click", function () {
    // mostrar guion
     $('.dash-account').removeClass('color-gray opacity-0')

    // agregar placeholder
    $("#inputTwo").attr('placeholder' , '0000')
    $("#inputThree").attr('placeholder' , '000000')

    //quitar-agregar  clase a input
    $("#contentInputs input").addClass("pointer-events")
    $("#contentInputs").removeClass("pointer-events")
    $("#contentInputs #inputOne").removeClass("pointer-events")

    //mostrar botones para buscar
    $("#contentButtonsError").removeClass("hide")

    //ocultar botones para confirmar
    $('#group-btn').addClass('hide')

    //activar fakeplace
    $('#fakeplaceholder').removeClass('inactiveplace')

    //los guiones se ponen plosmos
    $(".dash-account").removeClass("color-gray")

    //quita value inputs y activar focus
    resetInputs()

    //oculta opciones cuenta
    $("#contenTrue").addClass("hide");
    $("#contentFalse").addClass("hide");

    //desactivar botones borrar y confirmar
    defuseButtonsFindNumberAccount()

    //recomendacion numero cuenta
    $("#factNumberAccount").removeClass("hide");
 
    //quitar border div contenedor de inputs
    $("#contentInputs").removeClass("border-gray border-blue-ok border-blue-focus");


});




// VALIDA LOS DATOS INGRESADOS AL INPUT
function EnterAccount() {
    // document.getElementById("inputOne").focus();


    valorCuentaUno = $("#inputOne");
    cuentaUno = valorCuentaUno.val().split("");
    cuentaUno.push("");
    valorCuentaDos = $("#inputTwo");
    valorCuentaTres = $("#inputThree");

    //quitar border tipo focus
    if (valorCuentaUno.val().length > 0) {
        //guiones
        $('.dash-account').addClass('color-gray opacity-0 ')

    }

    //del input 1 pasa al 2 cuando esta lleno
    if (valorCuentaUno.val().length === 4) {
        valorCuentaDos = $("#inputTwo");
        valorCuentaUno.addClass("pointer-events")
        valorCuentaDos.removeClass("pointer-events")
        cuentaDos = valorCuentaDos.val().split("");
        cuentaDos.push("");
        valorCuentaDos.focus();
        $('#firstDash').removeClass('opacity-0')

    } else {
        $('#firstDash').addClass('opacity-0')
        valorCuentaUno.removeClass("pointer-events")
        valorCuentaDos.addClass("pointer-events")
    }


    //del input 2 pasa al 3 cuando esta lleno
    if (valorCuentaDos.val().length === 4) {
        valorCuentaDos.addClass("pointer-events")
        valorCuentaTres.removeClass("pointer-events")
        cuentaTres = valorCuentaTres.val().split("");
        cuentaTres.push("");
        valorCuentaTres.focus();
        $('#secondDash').removeClass('opacity-0')
    } else{
        $('#secondDash').addClass('opacity-0')
        // valorCuentaDos.removeClass("pointer-events")
        valorCuentaTres.addClass("pointer-events")
    }


    if (valorCuentaUno.val().length > 1) {
        //mostrar fakeplaceholder
        $('#fakeplaceholder').addClass('inactiveplace')
        // $("#contentInputs").removeClass("pointer-events")
    }


    //activar border tipo focus
    if (valorCuentaUno.val().length === 1) {

        $('#contentInputs').addClass('border-blue-focus')
        //mostrar fakeplaceholder
        $('#fakeplaceholder').addClass('inactiveplace')
        $("#inputTwo").removeAttr('placeholder')
        $("#inputThree").removeAttr('placeholder')

        //se activa el boton borrar
        $('#deleteButtonMessageError').removeAttr("disabled");
        $('#deleteButtonMessageError').removeClass("btn-light-disabled none-box-shadow");
        $('#deleteButtonMessageError').addClass("btn-light");
    }


    //quitar border tipo focus
    if (valorCuentaUno.val().length === 0) {
        $('#contentInputs').removeClass('border-blue-focus')
        //ocultar fakeplaceholder
        $('#fakeplaceholder').removeClass('inactiveplace')
        //guiones
        $('.dash-account').removeClass('color-gray opacity-0')

        // inputs placeholder
        $("#inputTwo").attr('placeholder' , '0000')
        $("#inputThree").attr('placeholder' , '000000')

        // desactivar btn borrar
        $('#deleteButtonMessageError').addClass("btn-light-disabled none-box-shadow ");
        $('#deleteButtonMessageError').removeClass("btn-light");
        $("#deleteButtonMessageError").attr("disabled", "true");
    }



    //se activa los botones
    if (valorCuentaTres.val().length > 4) {
        $("#confirmButtonFindAccount").removeAttr("disabled");
        $("#confirmButtonFindAccount").removeClass("disabled");
        $('#contentInputs').addClass('border-blue-ok')
        // $('#deleteButtonMessageError').removeAttr("disabled");
        // $('#deleteButtonMessageError').removeClass("btn-light-disabled none-box-shadow");
        // $('#deleteButtonMessageError').addClass("btn-light");
        
    } else {
        $("#confirmButtonFindAccount").attr("disabled", "true");
        $("#confirmButtonFindAccount").addClass("disabled");
        $('#contentInputs').removeClass('border-blue-ok');
        // $("#deleteButtonMessageError").attr("disabled", "true");
        // $('#deleteButtonMessageError').addClass("btn-light-disabled none-box-shadow ");
        // $('#deleteButtonMessageError').removeClass("btn-light");

    }
}


// SI ES TRUE TE MUESTRA QUE LA CUENTA FUE ENCONTRADA
// SI ES FALSE VALOR 1, MUESTRA MENSAJE QUE LA CUENTA NO EXISTE
// SI ES FALSE VALOR 2, MUESTRA MENSAJE LA CUENTA NO PERMITE DEPOSITOS
// SI ES FALSE VALOR 3, MUESTRA CAJA DE DATOS NO ENCONTRADOS
function validarAccount(estado, number) {
    //bloquear inputs
    $("#contentInputs").addClass("pointer-events")
    $("#contentInputs #inputThree").addClass("pointer-events")

    function carga() {
        //ocultar recomendaciones tarjeta
        $("#factNumberAccount").addClass("hide");
        //ocultar botones
        $("#confirmButtonFindAccount").addClass("hide");
        $('#deleteButtonMessageError').addClass('hide')
        //loading mostrar
        $("#checkNumberAccount").removeClass("hide");
    }
    if (estado == true) {
        carga();
        setTimeout(function () {
            //ocultar el loading
            $("#checkNumberAccount").addClass("hide");
            //MUESTRA LA CUENTA FUE ENCONTRADA
            $("#contenTrue").removeClass('hide');
            //mostrar botones para confirmar
            $('#group-btn').removeClass('hide')

            // encuentra cuenta  corregir/confirmar
            $("#confirmButtonAccount").html("Continuar");
            $("#deleteButton").html("Borrar")

            //bloquear inputs
            $("#contentInputs input").addClass("pointer-events")
            $("#contentInputs").removeClass("pointer-events")

        }, 4000);
    } else {
        switch (number) {
            case 1:
                carga();
                setTimeout(function () {
                    // agrega border rojo div input 
                    $("#contentInputs").addClass("border-error");
                    //recomendacion numero ocultar
                    $("#checkNumberAccount").addClass("hide");
                    //cambio color
                    $("#inputOne").addClass('color-gray-dark-force')
                    $("#inputTwo").addClass('color-gray-dark-force')
                    $("#inputThree").addClass('color-gray-dark-force')
                    $("#secondDash").addClass('color-gray-dark-force')
                    $("#firstDash").addClass('color-gray-dark-force')
                    //activas focus
                    $("#inputOne").focus();

                    $('#contentButtonsError').removeClass('hide')
                    
                    //desactiva botones borrar y continuar
                    defuseButtonsFindNumberAccount()

                    //muestra mensaje que la cuenta no exite
                    $("#accountNotExist").removeClass("hide");

                    $('#findNumberAccount').addClass('hide')
                
                    //funcion para que al poner el primer valor resetear los inputs
                    resetErrorNumberAccount($("#inputOne"))

                    //desbloquear inputs
                    $("#contentInputs #inputOne").removeClass("pointer-events")
                    $("#contentInputs").removeClass("pointer-events")


                }, 4000);

                break;
            case 2:
                carga();
                setTimeout(function () {

                     // agrega border rojo div input 
                    $("#contentInputs").addClass("border-error");

                    //recomendacion numero ocultar
                    $("#checkNumberAccount").addClass("hide");

                    //activas focus
                    $("#inputOne").focus();

                    //cambio color
                    $("#inputOne").addClass('color-gray-dark-force')
                    $("#inputTwo").addClass('color-gray-dark-force')
                    $("#inputThree").addClass('color-gray-dark-force')
                    $("#secondDash").addClass('color-gray-dark-force')
                    $("#firstDash").addClass('color-gray-dark-force')


                    $('#contentButtonsError').removeClass('hide')

                    //desactiva botones borrar y continuar
                    defuseButtonsFindNumberAccount()

                    //agregar atributo readlonly
                    inputAttributeRead()

                    //muestra mensaje no permite deposito
                    $("#accountNotPermit").removeClass("hide");

                    //mostrar boton borrar y desactivarlo
                    resetErrorNumberAccount($("#inputOne"))

                    //desbloquear inputs
                    $("#contentInputs #inputOne").removeClass("pointer-events")
                    $("#contentInputs").removeClass("pointer-events")

                }, 4000);
                break;
            case 3:
                carga();
                setTimeout(function () {
                    // encuentra cuenta  corregir/confirmar
                    $("#confirmButtonAccount").html("Confirmar");
                    $("#deleteButton").html("Corregir")

                    $("#checkNumberAccount").addClass("hide");
                    $("#contentFalse").removeClass("hide");
                    //mostrar botones para confirmar
                    $('#group-btn').removeClass('hide')

                    //bloquear inputs
                    $("#contentInputs input").addClass("pointer-events")
                }, 4000);
                break;
            default:
                break;
        }
    }
}


//desactivar botones y limpiar inputs - buscar numero de cuenta
function defuseButtonsFindNumberAccount(){
    $('#deleteButtonMessageError').removeClass('hide')
    $('#deleteButtonMessageError').addClass("btn-light-disabled none-box-shadow ");
    $("#deleteButtonMessageError").attr("disabled", "true");
    $('#deleteButtonMessageError').removeClass("btn-light");
    $("#confirmButtonFindAccount").removeClass("hide");
    $("#confirmButtonFindAccount").removeClass("activeButton");
    $("#confirmButtonFindAccount").attr("disabled", "true");
    $("#confirmButtonFindAccount").addClass("disabled");
}


// reset input btn borrar o corregir
function resetInputs(){
    $("#inputOne").val("").focus();
    $("#inputTwo").val("");
    $("#inputThree").val("");
    //cambio color
    $("#inputOne").removeClass('color-gray-dark-force')
    $("#inputTwo").removeClass('color-gray-dark-force')
    $("#inputThree").removeClass('color-gray-dark-force')
    $("#secondDash").removeClass('color-gray-dark-force')
    $("#firstDash").removeClass('color-gray-dark-force')
}



//resetear los inputs con mensaje de error
function resetErrorNumberAccount(etiquete){
  $("#inputOne").one("keydown", function () {
    $("#inputOne").val("");
    $("#inputTwo").val("");
    $("#inputThree").val("");
    //cambio color
    $("#inputOne").removeClass('color-gray-dark-force')
    $("#inputTwo").removeClass('color-gray-dark-force')
    $("#inputThree").removeClass('color-gray-dark-force')
    $("#secondDash").removeClass('color-gray-dark-force')
    $("#firstDash").removeClass('color-gray-dark-force')
  });
}


//borrar entre inputs
function resetnumberAccount(etiquete, after){
  etiquete.on("keyup", function () {
    let cant = etiquete.val().length
    let calc = 1
    let resultado = cant - calc
    if (resultado === -1) {
        after.focus()
    }
  });
}

resetnumberAccount($("#inputTwo") , $("#inputOne") )
resetnumberAccount($("#inputThree") , $("#inputTwo") )


//resetear los inputs con mensaje de error
function inputAttributeRead(){
    $("#inputTwo").addClass("pointer-events")
    $("#inputThree").addClass("pointer-events")
}



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


//efecto boton
$(".btn").on("click", function () {
    $(this).addClass("activeButton");
});



