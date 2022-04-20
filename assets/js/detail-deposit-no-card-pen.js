// resultAmount
// opcion 1 --> muestra el detalle de los billetes con opcion para ingresar mas billetes
// opcion 2 --> muestra mensaje de error 0.00
// opcion 3 --> muestra el detalle de los billetes con opcion confirmar

function resultAmount(number) {
  switch (number) {
    case 1:
      $("#confirmsAmoutSoles").removeClass('hide') 
      $("#finalAmount").html('S/ 4,650')
      $("#confirmBills").removeClass('hide')
      $("#addBills").removeClass('hide')
      break;
    case 2:
      $("#menssageConfirmsAmoutSoles").removeClass('hide')
      $("#finalAmount").html('S/ 0,00')
      $("#confirmBills").removeClass('hide')
      break;
    case 3:
      $("#confirmsAmoutSoles").removeClass('hide')
      $("#finalAmount").html('S/ 7,150')
      $("#confirmBills").removeClass('hide')
      break;
    default:
  }
}

resultAmount(1)


//el efecto del press para los botones
$(".btn").on("click", function () {
  $(this).addClass("activeButton");
});