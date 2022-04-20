
//cuenta destino --> string
let numberAccountDestination = '9113-45678990-99'

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



//monto por depositar --> string
let ammountDepositOutCard = '1200'

  
//tipo de cambio --> string
let typeChange = '3.76'


//mandar tipo de cambio a html
$("#typeChange").html(typeChange)



//operacion para obtener el monto en dolares
let operation = ammountDepositOutCard/typeChange



if (operation % 1 == 0) {
  //si es entero
  $("#ammountDollar").html(operation)
}else{
  // si es con decimal, solo los 2 primeros
  $("#ammountDollar").html(operation.toFixed(2))
}



//formato al monto con la separacion de coma al monto por depositar
function formatAmmount(value, etiquete){
  //le quito espacios y comas
  let ammountDepositOutCard = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = ammountDepositOutCard

  if (str.length > 3 && str.indexOf(".") == -1 ) {
    //formato 
    let advanceAmmountFormat =  str.slice(0,1)  + "," + str.slice(1, str.length)
    etiquete.html(advanceAmmountFormat)
  } else {
    //lo mando al html
      etiquete.html(str)
  }
}

formatAmmount(ammountDepositOutCard, $('#ammountDepositOutCard'))
accountNumberFormat( numberAccountDestination , $('#numberAcountDestination'))



