const numeros = document.getElementsByName('numero');
const operadores = document.getElementsByName('operacion');
const opIgual = document.getElementsByName('igual')[0];
const opBorrar = document.getElementsByName('borrar')[0];

var resultado = document.getElementById('resultado');
var opActual = '';
var opAnterior = '';
var operacion = undefined;

for (let num of numeros) {
    num.addEventListener('click', function () {
        agregarNumero(num.innerText);
    })
}

for (let op of operadores) {
    op.addEventListener('click', function () {
        seleccionarOperacion(op.innerText);
    })
}

opIgual.addEventListener('click', function(){
    calcular();
    actualizarPantalla();
});

opBorrar.addEventListener('click',function(){
    limpiar();
    actualizarPantalla();

});

function seleccionarOperacion(op) {
    if (opActual === '') {
        return;
    }
    if (opAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    //IsNaN permite proteger a la aplicación de posibles valores numéricos no
    if (isNaN(anterior) || isNaN(actual)) {

        return;
    }
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;

        case '-':
            calculo = anterior - actual;
            break;

        case 'x':
            calculo = anterior * actual;
            break;

        case '/':
            
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    opActual = calculo;
    operacion = undefined;
    opAnterior = '';

}

function agregarNumero(num) {
    opActual = opActual.toString() + num.toString();
    actualizarPantalla();
}

function limpiar() {
    opActual = '';
    opAnterior = '';
    operacion = '';
}

function actualizarPantalla() {
    resultado.value = opActual;
}

limpiar();