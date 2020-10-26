var solucion = 1
function mostrarSoluciones(){
    
    if (solucion <= 2) {
        var  item = document.createTextNode('Solución ' + solucion);
        var lista = document.getElementById("lista");
        lista.appendChild(item);
        lista.appendChild(document.createElement("br"));
        solucion++;
    }
    
    
}