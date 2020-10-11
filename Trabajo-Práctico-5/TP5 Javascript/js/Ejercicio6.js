function abrirVentanaModal() {
    var w = 600;
    var h = 300;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var ventana = open('','','status=yes,width='+w+',height='+h+',menubar=yes,top='+top+',left='+left+'');
    ventana.document.write("<h3>Ventana de 600 de ancho x 300 de alto!</h3>");
}