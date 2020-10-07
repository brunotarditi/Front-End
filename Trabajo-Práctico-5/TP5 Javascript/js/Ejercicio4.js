var sueldo = parseFloat(prompt("Indique su sueldo"));
var antiguedad = parseInt(prompt("Indique su antigüedad"));
var h = document.getElementById('miH');

if (sueldo < 500 && antiguedad >= 10) {
    sueldo += (sueldo * 0.20);
    h.innerText = 'El sueldo es: ' + sueldo + ' con un aumento del 20%.';
    
}else if (sueldo < 500 && antiguedad < 10) {
    sueldo += (sueldo * 0.05);
    h.innerText = 'El sueldo es: ' + sueldo + ' con un aumento del 5%.';

} else if (sueldo >= 500) {
    h.innerText = 'El sueldo es: ' + sueldo + ' sin descuento.';
}