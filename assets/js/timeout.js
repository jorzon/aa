$(document).idle({
    onIdle: function() {
        $('.backdrop').removeClass('top-48');
        $('.backdrop').addClass('visible active');
        $('#moretimeModal').show();
        $('input').blur();

    },
    idle: 30000

});
$(function() {

    var $htmlPopup = '<div id="moretimeModal" class="kiosko-modal popup-exit modal-timeout" style="display:none;"> <header></header> <div class="content h-264"> <p class="title vertical-middle"> <span>Tiempo de inactividad </span><br><span>superado</span></p> <p class="subtitle vertical-middle">¿Quieres continuar? </p></div><footer class="modal-buttons"> <buttom id="timeout_close-session" class="continue-session btnBack">No, salir </buttom> <buttom id="timeout_continue-session" class="btnCloseSession"> Sí, continuar</buttom></footer></div>';

    $('body').append($htmlPopup);

    $('#timeout_continue-session').on("click", function() {
        $('.backdrop').removeClass('visible active');
        $('#moretimeModal').hide();
    });

    $("#timeout_continue-session").on("click", function() {
        $("#contentModalInfo").removeClass("hide");
    });

});