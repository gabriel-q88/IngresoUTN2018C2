function mostrar()
{  
var numero;
var respuesta;
var positivo = 0;
var negativo = 0;
var contadorpos=0;
var contadorneg=0;
var contadorceros=0;
var pares=0;
var promediopos;
var promedioneg;
var diferencia;

do { 
    numero = parseInt(prompt("Ingrese un numero"));
   if ( numero >0){

    contadorpos++;
    positivo = positivo + numero;

   }else if (numero<0){

    contadorneg++;
    negativo = negativo + numero;
   }else { 
       numero == 0
       contadorceros++;
    }
     if (numero% 2 ==0){

        pares++;
     }
    respuesta = prompt("Desea reingresar numero?");
    respuesta = respuesta.toLowerCase();
}
while (respuesta == "si");

 if (contadorneg !=0){
     promedioneg =negativo / contadorneg;

 }
   if (contadorpos != 0){

    promediopos = positivo /contadorpos;
   }
   else {
       promediopos = 0
   }
   diferencia = contadorpos - contadorneg;



document.write("La suma de los negativos es " + negativo + "<br>");
document.write("La suma de los positivos es " + positivo + "<br>");
document.write("La cantidad de positivos es " + contadorpos + "<br>");
document.write("La cantidad de negativos es " + contadorneg + "<br>");
document.write("La cantidad de ceros es " + contadorceros + "<br>");
document.write("La cantidad de numeros pares es " + pares + "<br>");
document.write("El promedio de positivos es " + promediopos + "<br>");
document.write("El promedio de negativos es " + promedioneg + "<br>");
document.write("La diferencia entre positivos y negativos es " + diferencia + "<br>");   
}
//FIN DE LA FUNCIÓN