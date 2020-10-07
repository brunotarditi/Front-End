
var dni = prompt('Introduzca su DNI');

if (dni < 0 || dni > 99999999) {
    document.write("<h1>El número proporcionado no es válido.</h1>");
} else {
    var letra = prompt('Introduzca solo la letra correspondiente a su DNI').toUpperCase();
    var posicion = (dni % 23);
    var letraDni = obtenerLetra(posicion);
    console.log(letraDni);

    if (letra != letraDni && (letra === '' || letra.trim())) {
        document.write("<h1>La letra que ha indicado no es correcta.😓</h1>");
    }
    else {
        document.write("<h1>Fabuloso, ¡Coinciden!</h1><br>");
        document.write("<h1>Su DNI completo es: " + dni + "-" + letra + " </h1>");
    }
}

function obtenerLetra(dniN) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[dniN];
}