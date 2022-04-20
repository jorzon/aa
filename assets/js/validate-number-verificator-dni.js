// validando dni
function validandoDni(getDni) {
    var dni = $("#write-dni-verificator").val();
    if (dni.length == 1 && getDni == true) {
        setTimeout(function () {
            $("#content-verificator-dni").addClass("hide");
            $("#write-dni-verificator").attr("disabled", true).blur();
            $("#NoDni").addClass("hide");
            $("#verificator-image").addClass("hide");
            $("#loading-verificator-dni").fadeIn("slow");
            $("#loading-verificator-dni").addClass("show");
            $("#buttomReturnDni").addClass("hide");
            if ($("#loading-verificator-dni").hasClass("show")) {
                setTimeout(function () {
                    $("#loading-verificator-dni p").html("Está tardando más de lo normal");
                }, 10000);
            }
        }, 500);
    }
    // if (dni.length == 1 && getDni == false) {
    //     setTimeout(function () {
    //         $("#write_dni").val("");
    //         $("#write_dni").addClass("error");
    //         $("#label-error").fadeIn("slow");
    //         $("#label-placeholder-error").removeClass("hide");
    //     }, 100);
    // }
}

$("#write-dni-verificator").on("keyup", function () {
    // $("#label-start").addClass("hide");
    // var dni = $("#write_dni").val();
    // if (dni.length == 1) {
    //     $("#write_dni").removeClass("error");
    //     $("#label-error").fadeOut("fast");
    //     $("#label-placeholder-error").addClass("hide");
    // }

    // TRUE -- PASA NORMAL
    // FALSE -- BOTA ERROR
    validandoDni(true);
});

//el efecto del press para los botones
$(".btn").on("click", function () {
    $(this).addClass("activeButton");
});