// resultAmountDolar
// opcion 1 --> muestra el detalle de los billetes con opcion para ingresar mas billetes
// opcion 2 --> muestra mensaje de error 0.00
// opcion 3 --> muestra el detalle de los billetes con opcion confirmar

function resultAmountDolar(number) {
    switch (number) {
      case 1:
        $("#confirmsAmoutDolar").removeClass('hide') 
        $("#finalAmountDolar").html('US$ 2,250')
        $("#confirmBillsDolar").removeClass('hide')
        $("#addBillsDolar").removeClass('hide')
        break;
      case 2:
        $("#menssageConfirmsAmoutDolar").removeClass('hide')
        $("#finalAmountDolar").html('US$ 0,00')
        $("#confirmBillsDolar").removeClass('hide')
        break;
      case 3:
        $("#confirmsAmoutDolar").removeClass('hide')
        $("#finalAmountDolar").html('US$ 3,250')
        $("#confirmBillsDolar").removeClass('hide')
        break;
      default:
    }
  }
  
  resultAmountDolar(1)

  
//el efecto del press para los botones
$(".btn").on("click", function () {
  $(this).addClass("activeButton");
});