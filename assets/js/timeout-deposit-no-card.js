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
	
	var $htmlPopup = '<div id="moretimeModal" class="kiosko-modal popup-exit modal-timeout kiosko-modal-w-560 kiosko-modal-h-360" style="display:none;"> <header></header> <div class="content h-264 kiosko-modal-padding-top"> <p class="title vertical-middle"> <span>Tiempo de inactividad superado</span></p> <p class="subtitle vertical-middle kiosko-modal-margin-bottom-40 kiosko-modal-margin-top-32  "> Si sales, retira los billetes de la ranura, <br/ >¿Quieres continuar? </p></div><footer class="modal-buttons kiosko-modal-h-56"> <buttom id="timeout_close-session" class="continue-session btnBack kiosko-modal-bottom-57">No, salir </buttom> <buttom id="timeout_continue-session" class="btnCloseSession kiosko-modal-bottom-57"> Sí, continuar</buttom></footer></div>';
	
    $('body').append($htmlPopup);

    $('#timeout_continue-session').on("click", function() {		
		$('.backdrop').removeClass('visible active');
		$('#moretimeModal').hide();
    });


});
