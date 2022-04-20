//esta variable guarda el monto del adelanto sueldo --> string 
let advanceAmmount = '2500'

//darle formato al monto con la separacion de coma
function formatAmmount(value, etiquete){
  //le quito espacios y comas
  let advanceAmmountStr = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = advanceAmmountStr

  if (str.length > 3) {
    //formato coma
    let advanceAmmountFormat =  str.slice(0,1)  + "," + str.slice(1, str.length)
    //lo mando al html
    etiquete.html(advanceAmmountFormat)
  } else {
      etiquete.html(str)
  }
}

//tabla niveles
// 50 a 500 -> 15
// 501 a 1000 -> 30
// 1001 a 1500 -> 45
// 1501 a 2500 -> 60

//comision en base al monto de adelanto de sueldo
function AmountComission(value , etiquete) {
    let ammountComissionFinal = value.toString().replace(/,/g, "").replace(/ /g, "")
    let str = ammountComissionFinal

    let baseComission = 15
    operation = str / 500
    newValue = Math.ceil(operation)
    newComission = newValue * baseComission
    if (newComission < 60 ) {
        etiquete.html(newComission + '.00')
    } else {
        etiquete.html('60.00')
    }        
}

AmountComission(advanceAmmount,$('#advanceAmmountComission'))
formatAmmount(advanceAmmount, $('#advanceAmmount'))