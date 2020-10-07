let array = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
document.write("Meses iterados en un 'for'.<br>")
for(let i = 0; i < array.length; i++){
    document.write(array[i] + "<br>");
}
document.write("<br>Meses iterados en un 'while'.<br>")
let i = 0;
while(i < array.length){
    document.write(array[i] + "<br>");
    i++; 
}
