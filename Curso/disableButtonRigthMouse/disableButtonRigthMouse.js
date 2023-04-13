function boton_derecho(e) {
    console.log("entro",window.navigator.deviceMemory)
    if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2)) {

        return false;
    }
    else if (window.navigator.cookieEnabled == true && (e.button == 2 || e.button == 3)) {
        alert("Lo sentimos, el botón derecho del ratón está deshabilitado.");
    }
    console.log("entro 1")
    return true;
}
window.onmousedown = boton_derecho;