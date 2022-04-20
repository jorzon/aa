// resultAmount
// opcion 1 --> muestra el detalle de los billetes con opcion para ingresar mas billetes
// opcion 2 --> muestra mensaje de error
// opcion 3 --> muestra el detalle de los billetes con opcion confirmar
function resultAmount(number) {
  switch (number) {
    case 1:
      $("#menssageConfirmsAmoutSoles").addClass('hide')
      $("#confirmsAmoutSoles").removeClass('hide') 
      $("#finalAmount").html('S/ 4,650')
      $("#confirmBills").removeClass('hide')
      $("#addBills").removeClass('hide')
      break;
    case 2:
      $("#menssageConfirmsAmoutSoles").removeClass('hide')
      $("#confirmsAmoutSoles").addClass('hide')
      $("#finalAmount").html('S/ 0,00')
      $("#confirmBills").removeClass('hide')
      $("#addBills").removeClass('hide')
      break;
    case 3:
      $("#confirmBills").removeClass('hide')
      $("#addBills").addClass('hide')
      $("#finalAmount").html('S/ 7,150')
      break;
    default:
  }
}

resultAmount(1)