function validar() {
    var radio = document.formulario.edad.value;
    if (radio == "") {
        alert("Debe seleccionar una opción")
    } else {
        if (radio == "si") {
            alert("Puede ingresar al sitio")
        } else {
            alert("NO puede ingresar al sitio")
        }
    }
}