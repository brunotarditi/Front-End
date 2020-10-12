function dobleClick() {
    var captura = document.getElementById("numero");
    var num = parseInt(captura.innerHTML);
    num *= 2;
    captura.innerHTML = num;

}