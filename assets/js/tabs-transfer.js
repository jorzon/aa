function openTabTransfer(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



// elegir transferir soles o dolares -- tab activo segun la opcion
// la opcion 1 soles
// la opcion 2 dolares
function tabOpen(number) {
    switch (number) {
        case 1:
            document.getElementById("tablinks-left").click();
            break;
        case 2:
            document.getElementById("tablinks-right").click();
            break;
        default:
    }
}
tabOpen(1)



