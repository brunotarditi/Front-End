function contador(){

    var captura = document.getElementById("mih1");
    var valor = parseInt(captura.innerHTML);
    valor++;
    captura.childNodes[0].nodeValue = valor;
    
}