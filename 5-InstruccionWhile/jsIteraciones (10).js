function mostrar()
{  
var numero;
var respuesta;
var positivo = 0;
var negativo = 0;
var contadorp=0;
var contadorn=0;
var contadorc=0;
var pares=0;
var promediop;
var promedion;
var diferencia;
do { 
    numero = parseInt(prompt("Ingrese un numero"));
    
    if (numero<0){
        negativo = negativo + numero;
        contadorn ++;
    }
    if (numero >0)
    {
        positivo = positivo + numero;
        contadorp++;
    }
    if(numero == 0)
    {
        contadorc++;
    }
    if (numero / 2 == 0 || numero / -2 == 0)
    {
       pares++;
    }
    respuesta = prompt("Desea reingresar numero?");
    respuesta = respuesta.toLowerCase();

}while (respuesta == "si");

promedion = negativo / contadorn;
promediop = positivo / contadorp;
diferencia =positivo - negativo;
document.write("La suma de negativos es </br>" + negativo);
document.write("La suma de los positivos es </br> " + positivo );
document.write("La cantidad de positivos es </br> " + contadorp);
document.write("La cantidad de negativos es </br> "  + contadorn);
document.write("La cantidad de ceros es </br> " + contadorc);
document.write("La cantidad de numeros pares es  </br> " + pares);
document.write("El promedio de positivos es </br> " + promediop);
document.write("El promedio de negativos es </br> " + promedion);
document.write("La diferencia entre positivos y negativos es </br> " + diferencia);   
}
//FIN DE LA FUNCIÓN