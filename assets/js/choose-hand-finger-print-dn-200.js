// Identificar el dedo y la mano correspondiente para escanear
function fingerprintThreeSteps(fingerprint){
    switch (fingerprint) {
        case 1:
            $("#fingerPrintNameThreeSteps").html('pulgar');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-threeSteps #contentPulgarDerecho").removeClass('hide');
            break;
        case 2:
            $("#fingerPrintNameThreeSteps").html('índice');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-threeSteps #contentIndiceDerecho").removeClass('hide');
            break;
        case 3:
            $("#fingerPrintNameThreeSteps").html('medio');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-threeSteps #contentMedioDerecho").removeClass('hide');
            break;
        case 4:
            $("#fingerPrintNameThreeSteps").html('anular');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-threeSteps #contentAnularDerecho").removeClass('hide');
            break;
        case 5:
            $("#fingerPrintNameThreeSteps").html('meñique');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-threeSteps #contentMeniqueDerecho").removeClass('hide');
            break;
        case 6:
            $("#fingerPrintNameThreeSteps").html('pulgar');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-threeSteps #contentPulgarIzquierdo").removeClass('hide');
            break;
        case 7:
            $("#fingerPrintNameThreeSteps").html('índice');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-threeSteps #contentIndiceIzquierdo").removeClass('hide');
            break;
        case 8:
            $("#fingerPrintNameThreeSteps").html('medio');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-threeSteps #contentMedioIzquierdo").removeClass('hide');
            break;
        case 9:
            $("#fingerPrintNameThreeSteps").html('anular');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-threeSteps #contentAnularIzquierdo").removeClass('hide');
            break;
        case 10:
            $("#fingerPrintNameThreeSteps").html('meñique');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-threeSteps #contentMeniqueIzquierdo").removeClass('hide');
            break;                    
    
        default:
            break;
    }
};

fingerprintThreeSteps(2);


//el efecto del press para los botones
$(".btn").on("click", function () {
    $(this).addClass("activeButton");
});
