
//numero de cuenta -->  string
let accountNumberString = '9113-456789-9104'
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

if (typeof accountNumberString === 'string') {
    accountNumberFormat( accountNumberString , $('#numberAcount') )
} else{
      console.log('no cumple')
}


//esta variable guarda el monto del adelanto sueldo final --> string
let ammountFinal = '1600'

//darle formato al monto con la separacion de coma
function formatAmmount(value, etiquete){
  //le quito espacios y comas
  let ammountFinal = value.toString().replace(/,/g, "").replace(/ /g, "")
  let str = ammountFinal

  if (str.length > 3) {
    //formato 
    let advanceAmmountFormat =  str.slice(0,1)  + "," + str.slice(1, str.length)
    //lo mando al html
    etiquete.html(advanceAmmountFormat)
  } else {
    //lo mando al html
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
        etiquete.html(newComission)
    } else {
        etiquete.html('60')
    }        
}


AmountComission(ammountFinal , $('#comissionFinal') )
formatAmmount(ammountFinal, $('#ammountFinal'))


//hora cajero
function dateTime(idHour) {
    date = new Date;
    h = date.getHours();
    m = date.getMinutes();
    ampm = h >= 12 ? 'pm' : 'am';

    h = h < 10 ? '0' + h : h;
    h = h > 21 ? h - 12  : h;
    h = h > 12 ? '0' + (h - 12 )  : h;
    m = m < 10 ? '0' + m : m;

    result = h + ':' + m + ' ' + ampm;
    document.getElementById(idHour).innerHTML = result;
    setTimeout('dateTime("' + idHour + '");', '1000');
    return true;
};

dateTime('hour');

// fecha cajero
let months = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
let _Date = new Date();
let day = $('#day')
day.html( _Date.getDate() + " de " + months[_Date.getMonth()] + ", ")