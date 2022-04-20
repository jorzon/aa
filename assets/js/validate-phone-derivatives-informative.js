
      function validationNumber(numberPhone, phoneIcon, placeHolderMessage) {
        var numberInput = numberPhone.val();
        if (numberInput.length < 1) {
          //muestro placeholder 9 números
          $(placeHolderMessage).removeClass("hide");
        } else {
          //quita el placeholder
          $(placeHolderMessage).addClass("hide");
        }

        //separacion de digitos ingresados cuarta posicion
        if (numberInput.length === 4) {
          spaceBetweenNumber =
            numberInput.slice(0, -1) + " " + numberInput.slice(-1);
          numberPhone.val(spaceBetweenNumber);
        }

        // console.log($("#inputPhone").val().length , $("#inputPhone").val() , $("#inputPhone").val()[4])

        if ($("#inputPhone").val()[4] == ' ') {
          spaceBetweenNumber =
            numberInput.slice(0, -1) + "";
          numberPhone.val(spaceBetweenNumber);
        }


        //separacion de digitos ingresados octava posicion
        if (numberInput.length === 8) {
          spaceBetweenNumber =
            numberInput.slice(0, -1) + " " + numberInput.slice(-1);
          numberPhone.val(spaceBetweenNumber);
        }

        if ($("#inputPhone").val()[8] == ' ') {
          spaceBetweenNumber =
            numberInput.slice(0, -1) + "";
          numberPhone.val(spaceBetweenNumber);
        }


      }

      $("#inputPhone").on("keyup", function () {
        validationNumber(
          $("#inputPhone"),
          $("#phoneIcon"),
          $("#placeHolderNumber")
        );




        if ($("#inputPhone").val().length >= 1) {
          // se activa el boton de borrar numero cuando se digita el primer numero
          $("#deletePhone").addClass("btn-light");
          $("#deletePhone").removeClass(
            "btn-light-disabled none-box-shadow"
          );
          $("#deletePhone").removeAttr("disabled");
          //input border cambia de color focus
          $("#inputPhone").addClass("border-blue-happy");
          $("#inputPhone").removeClass("error");
          $("#label-error-soles").fadeOut("fast");

          //cambio de icono celular focus
          $("#phoneIcon img").addClass("hide");
          $("#phoneIcon img:nth-child(2)").removeClass("hide");
        }

        //cuando esta vacio
        if ($("#inputPhone").val().length == 0) {
          // boton borrar
          $("#deletePhone").removeClass("btn-light");
          $("#deletePhone").addClass(
            "btn-light-disabled none-box-shadow"
          );
          $("#deletePhone").attr("disabled", "true");

          //input border cambia de color
          $("#inputPhone").removeClass("border-blue-happy");
          $("#confirmPhone").addClass("disabled");
          $("#confirmPhone").attr("disabled", "true");

          //cambio de icono celular disabled
          $("#phoneIcon img").addClass("hide");
          $("#phoneIcon img:nth-child(1)").removeClass("hide");
        }


        //cuando no esta completo se desactiva el confirmar
        if ($("#inputPhone").val().length < 11) {
          $("#confirmPhone").addClass("disabled");
          $("#confirmPhone").attr("disabled", "true");

          //input border cambia de color completed
          $("#inputPhone").removeClass("border-blue-completed");
        }

        //cuando se completa OK se activa el confirmar
        if ($("#inputPhone").val().length >= 11) {
          $("#confirmPhone").removeClass("disabled");
          $("#confirmPhone").removeAttr("disabled");

          //cambio de icono celular completed
          $("#phoneIcon img").addClass("hide");
          $("#phoneIcon img:nth-child(4)").removeClass("hide");

          //input border cambia de color completed
          $("#inputPhone").addClass("border-blue-completed");
        }
      });


      // **********************
      //  click boton borrar
      //**********************

      $("#deletePhone").on("click", function () {
        //quitar estilos input
        $("#inputPhone").removeClass(
          "btn-light border-blue-completed border-blue-happy border-error"
        );

        //desactivar btn confirmar
        $("#confirmPhone").addClass("disabled");
        $("#confirmPhone").attr("disabled", "true");

        //quitar mensaje de error
        // $("#messageNumberError").addClass("hide");
        $("#messagePhoneInvalid").addClass("hide");

        //agregar placeholder
        $("#placeHolderNumber").removeClass("hide");

        //quitar value input
        $("#inputPhone").val("");
        $("#inputPhone").focus()

        //quitar estilos boton borrar
        $("#deletePhone").addClass(
          "btn-light-disabled none-box-shadow"
        );
        $("#deletePhone").attr("disabled", "true");

        //cambio icono telefono
        $("#phoneIcon img").addClass("hide");
        $("#phoneIcon img:nth-child(1)").removeClass("hide");
      });



      // **********************
      //  click boton confirmar
      // 1 numero incorrecto ejm --> 000 000 000
      // 2 todo ok
      //**********************

      function CaseButtonConfirm(number) {
        switch (number) {
          case 1:
            $("#inputPhone").addClass("border-error");
            $("#phoneIcon img").addClass("hide");
            $("#phoneIcon img:nth-child(3)").removeClass("hide");
            $("#messagePhoneInvalid").removeClass("hide");
            $("#confirmPhone").addClass("disabled");
            $("#confirmPhone").attr("disabled", "true");

            // boton borrar
            $("#deletePhone").removeClass("btn-light");
            $("#deletePhone").addClass(
              "btn-light-disabled none-box-shadow"
            );
            $("#deletePhone").attr("disabled", "true");
            $("#inputPhone").focus()
            resetErrorNumberInput($("#inputPhone").val().length)
            break;
          case 2:
            $("#NumberConfirmModal").addClass("show");
            $("#NumberConfirmModal .modal-backdrop").addClass("visible active");
            console.log('TODO OK')
            break;
          default:
        }
      }




      function resetErrorNumberInput(value){
          $("#inputPhone").one("keydown", function () {
            $("#inputPhone").val("");

            //quitar mensaje de error
            $("#messagePhoneInvalid").addClass("hide");

            // quitar clase error
            $("#inputPhone").removeClass("border-error");
          });
      }


      // **********************
      //  click boton confirmar
      // 1 numero incorrecto ejm --> 000 000 000
      // 2 todo OK
      //**********************
      
      $("#confirmPhone").on("click", function () {
        CaseButtonConfirm(1);
      });
