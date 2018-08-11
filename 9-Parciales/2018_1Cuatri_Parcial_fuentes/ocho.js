function mostrar()
{
var letra;
var num;
var acumpos=0;
var contadorpos=0;
var acumneg =0;
var pares =0;
var impares=0;
var ceros=0;
var promediopos;
var letramax;
var nummax;
var letramin;
var nummin;
var respuesta ="si";
var flag=0;
do
{
num = parseInt(prompt("Ingrese un numero"));
 while (num < -100 || num >100|| isNaN(num))
 {
     num = parseInt(prompt("Error reingrese numero"));
 }
letra = prompt("Ingrese una letra");
 if (num % 2 == 0)
 {
     pares++;
 }
else 
{
    impares++;
}
if (num >0)
{
    acumpos = acumpos + num;
    contadorpos++;
}
else if (num <0)
{
    acumneg = acumneg + num;
}
else 
{
ceros++;
}
 
 if (num > nummax || flag==0)
 {
     nummax = num;
     letramax = letra;
  
 }
 if( num < nummin || flag==0){
   nummin =num;
   letramin = letra;
   flag=1;
 }
respuesta = prompt("Desea continuar?")
}while (respuesta == "si");

if (contadorpos !=0)
{
    promediopos = acumpos / contadorpos;
}
document.write("La cantidad de numeros pares es: " + pares + "<br>");
document.write("La cantidad de numeros impares es: " + impares + "<br>");
document.write("La cantidad de ceros es : " + ceros + "<br>");
document.write("El promedio de los positivos es: " + promediopos + "<br>");
document.write("La sumna de los negativos es : " + acumneg + "<br>");
document.write("El numero maximo es: " + nummax + " y la letra es: " + letramax + "<br>");
document.write("El numero minimo es: " + nummin + " y la letra es: " + letramin + "<br>");
}
