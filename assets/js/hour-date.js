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

//id de etiqueta
dateTime('hour');

// fecha cajero
let months = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
let _Date = new Date();
//id de etiqueta
let day = $('#day')

if (_Date.getDate() < '10') {
    day.html( "0" + _Date.getDate() + " de " + months[_Date.getMonth()] + ", ")
} else {
    day.html( _Date.getDate() + " de " + months[_Date.getMonth()] + ", ")
}
