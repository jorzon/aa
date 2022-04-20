function dateTime(idHour) {
    date = new Date;
    h = date.getHours();
    m = date.getMinutes();
    ampm = h >= 12 ? 'PM' : 'AM';

    h = h < 10 ? '0' + h : h;
    h = h > 12 ? h - 12 : h;
    m = m < 10 ? '0' + m : m;

    result = h + ':' + m + ' ' + ampm;
    document.getElementById(idHour).innerHTML = result;
    setTimeout('dateTime("' + idHour + '");', '1000');
    return true;
};
$(document).ready(function() {
    dateTime('hora');
});