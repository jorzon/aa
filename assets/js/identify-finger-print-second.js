// Identificar el dedo correspondiente
function IdentificarFingerprint(fingerprint) {
    switch (fingerprint) {
        case 1:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #pulgar-derecho").removeClass("hide");
            break;
        case 2:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #indice-derecho").removeClass("hide");
            break;
        case 3:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #medio-derecho").removeClass("hide");
            break;
        case 4:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #anular-derecho").removeClass("hide");
            break;
        case 5:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #menique-derecho").removeClass("hide");
            break;
        case 6:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #pulgar-izquierdo").removeClass("hide");
            break;
        case 7:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #indice-izquierdo").removeClass("hide");
            break;
        case 8:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #medio-izquierdo").removeClass("hide");
            break;
        case 9:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #anular-izquierdo").removeClass("hide");
            break;
        case 10:
            $("#content-lottie-selecciona-dedo div").addClass("hide");
            $("#content-lottie-selecciona-dedo #menique-izquierdo").removeClass("hide");
            break;

        default:
            break;
    }
}
// Identificar el dedo correspondiente
IdentificarFingerprint(8);