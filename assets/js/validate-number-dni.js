// validando dni
function validandoDni(getDni) {
    var dni = $("#write_dni").val();
    if (dni.length == 8 && getDni == true) {
        setTimeout(function () {
            $("#contentDni").addClass("hide");
            $("#write_dni").attr("disabled", true);
            $("#NoDni").addClass("hide");
            $("#imgDni").addClass("hide");
            $("#verificandoDni").fadeIn("slow");
            $("#verificandoDni").addClass("show");
            $("#buttomReturnDni").addClass("hide");
            if ($("#verificandoDni").hasClass("show")) {
                setTimeout(function () {
                    $("#verificandoDni p").html("Está tardando más de lo normal");
                }, 10000);
            }
        }, 50);
    }
    if (dni.length == 8 && getDni == false) {
        setTimeout(function () {
            $("#write_dni").val("");
            $("#write_dni").addClass("error");
            $("#label-error").fadeIn("slow");
            $("#label-placeholder-error").removeClass("hide");
        }, 50);
    }
}

$("#write_dni").on("keyup", function () {
    $("#label-start").addClass("hide");
    var dni = $("#write_dni").val();
    if (dni.length == 1) {
        $("#write_dni").removeClass("error");
        $("#label-error").fadeOut("fast");
        $("#label-placeholder-error").addClass("hide");
    }

    // TRUE -- PASA NORMAL
    // FALSE -- BOTA ERROR
    validandoDni(false);
});

//el efecto del press para los botones
$(".btn").on("click", function () {
    $(this).addClass("activeButton");
});