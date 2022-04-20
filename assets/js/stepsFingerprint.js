// Identificar el dedo correspondiente para escanear la segunda huella
function fingerprintTwoSteps(fingerprint){
    switch (fingerprint) {
        case 1:
            $("#fingerPrintNameTwoSteps").html('pulgar');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-twoSteps #contentPulgarDerecho").removeClass('hide');
            break;
        case 2:
            $("#fingerPrintNameTwoSteps").html('índice');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-twoSteps #contentIndiceDerecho").removeClass('hide');
            break;
        case 3:
            $("#fingerPrintNameTwoSteps").html('medio');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-twoSteps #contentMedioDerecho").removeClass('hide');
            break;
        case 4:
            $("#fingerPrintNameTwoSteps").html('anular');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-twoSteps #contentAnularDerecho").removeClass('hide');
            break;
        case 5:
            $("#fingerPrintNameTwoSteps").html('meñique');
            $("#typehandThreeSteps").html('derecho');
            $("#content-lottie-twoSteps #contentMeniqueDerecho").removeClass('hide');
            break;
        case 6:
            $("#fingerPrintNameTwoSteps").html('pulgar');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-twoSteps #contentPulgarIzquierdo").removeClass('hide');
            break;
        case 7:
            $("#fingerPrintNameTwoSteps").html('índice');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-twoSteps #contentIndiceIzquierdo").removeClass('hide');
            break;
        case 8:
            $("#fingerPrintNameTwoSteps").html('medio');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-twoSteps #contentMedioIzquierdo").removeClass('hide');
            break;
        case 9:
            $("#fingerPrintNameTwoSteps").html('anular');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-twoSteps #contentAnularIzquierdo").removeClass('hide');
            break;
        case 10:
            $("#fingerPrintNameTwoSteps").html('meñique');
            $("#typehandThreeSteps").html('izquierdo');
            $("#content-lottie-twoSteps #contentMeniqueIzquierdo").removeClass('hide');
            break;                    
    
        default:
            break;
    }
};
// Identificar el dedo correspondiente para escanear la segunda huella
fingerprintTwoSteps(10);

// Identificar el dedo correspondiente para escanear
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
// Identificar el dedo correspondiente para escanear
fingerprintThreeSteps(8);
//si esta enrolamiento cobro de giro
setTimeout(function () {
    $("#fingerprintEnrolamiento").fadeOut("slow");
    $("#verificandoEnrolamiento").fadeIn("slow");
    setTimeout(function () {
     $("#verificandoEnrolamiento p").html("Está tardando más de lo normal");
     }, 10000);
 }, 9000);
