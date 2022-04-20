
// cuenta origen --> string
let numberAccountOrigin = '9113-456789-9104'

//cuenta destino --> string
let numberAccountDestination = '9113-456789-9199'


//formato a cuenta **** **** ***** 22
function accountNumberFormat(account , etiquete){
    //quitar espacios
    let resetFormat = account.replace(/-/g, "").replace(/ /g, "")
    //ocultar cuenta ****
    let hideAccount = resetFormat.slice(0,-3).replace(/[0123456789]/gi,'*') + "" + resetFormat.slice(-3, resetFormat.length)
    //formato separado
    let numberAcountFormat = hideAccount.slice(0, 4)  + " " + hideAccount.slice(4, -4) + " " + hideAccount.slice(-4, hideAccount.length)
    //mandar dato a etiqueta
    etiquete.html(numberAcountFormat)   
}



//monto de la transferencia --> string
let ammountTransfer = '100'


//formato al monto con la separacion de coma
function formatAmmount(value, etiquete){
  //le quito espacios y comas
  let ammountTransfer = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = ammountTransfer


  if (str.length > 3 && str.indexOf(".") == -1 ) {
    //formato 
    let advanceAmmountFormat =  str.slice(0,1)  + "," + str.slice(1, str.length)
    etiquete.html(advanceAmmountFormat)
  } else {
    //lo mando al html
      etiquete.html(str)
  }
}

formatAmmount(ammountTransfer, $('#ammountTransfer'))
accountNumberFormat( numberAccountOrigin , $('#numberAcountOrigin'))
accountNumberFormat( numberAccountDestination , $('#numberAcountDestination'))





// typeCoin --> tipo de moneda y cuenta origen y cuenta destino
// opcion 1 --> Soles
// opcion 2 --> Dolares

function typeCoin(accountOrigin , accountDestination ,  etiquete, number) {
  switch (number) {
    case 1:
      etiquete.html('S/')
      accountOrigin.html('Ahorro Soles S/')
      accountDestination.html('Corriente Soles S/')
      break;
    case 2:
      etiquete.html('US$')
      accountOrigin.html('Ahorro Soles S/')
      accountDestination.html('Corriente Dólares US$')
      break;
    default:
  }
}


typeCoin( $("#accountOrigin") , $("#accountDestination") ,  $("#typeCoin") , 1 )





//ammountComission --> transferencia con comision o sin comision
//opcion 1 --> con comision
//opcion 2 --> sin comision 

function ammountComission(etiquete, number) {
  switch (number) {
    case 1:
      etiquete.removeClass('hide')
      // $('#contentDetail').addClass('h-496').removeClass('h-456')
      break;
    case 2:
      etiquete.addClass('hide')
      // $('#contentCards').removeClass('margin-top-184').addClass('margin-top-144')
      // $('#contentDetail').removeClass('h-496').addClass('h-456')
      break;
    default:
  }
}


ammountComission( $("#ammountComission") , 1 )



//typeTransfer --> transferencia a mis cuentas o cuentas terceros
//opcion 1 --> entre mis cuentas
//opcion 2 --> cuenta de terceros 

function typeTransfer(number) {
  switch (number) {
    case 1:
      $("#ownAccount").removeClass('hide')
      break;
    case 2:
    $("#otherAccount").removeClass('hide')
    //MARGEN CUANDO ES TRANSFERENCIA TERCEROS
    $("#btnWithVoucher").removeClass('margin-top-58').addClass('margin-top-32')
      break;
    default:
  }
}


typeTransfer(1)