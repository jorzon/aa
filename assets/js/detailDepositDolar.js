// resultAmount
// opcion 1 --> muestra el detalle de los billetes con opcion para ingresar mas billetes
// opcion 2 --> muestra mensaje de error
// opcion 3 --> muestra el detalle de los billetes con opcion confirmar
function resultAmountDolar(number) {
  switch (number) {
    case 1:
      $("#menssageConfirmsAmoutDolar").addClass('hide')
      $("#confirmsAmoutDolar").removeClass('hide') 
      $("#finalAmountDolar").html('US$ 2,250')
      $("#confirmBillsDolar").removeClass('hide')
      $("#addBillsDolar").removeClass('hide')
      break;
    case 2:
      $("#menssageConfirmsAmoutDolar").removeClass('hide')
      $("#confirmsAmoutDolar").addClass('hide')
      $("#finalAmountDolar").html('US$ 0,00')
      $("#confirmBillsDolar").removeClass('hide')
      $("#addBillsDolar").removeClass('hide')
      break;
    case 3:
      $("#confirmBillsDolar").removeClass('hide')
      $("#addBillsDolar").addClass('hide')
      $("#finalAmountDolar").html('US$ 3,250')
      break;
    default:
  }
}

resultAmountDolar(1)