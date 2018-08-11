function mostrar()
{
var num1;
var num2;
var resultado;
num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese otro numero"));

if (num1 == num2){

    alert("Los numeros son iguales :" + num1 + num2);
}
else if (num1 > num2){
    resultado = num1 - num2;
    alert("El primer numero es mayor que el segundo : " + resultado);
}
else 
{
    resultado = num1 + num2;
    alert("El segundo numero es mayor que el primero y su suma es: " + resultado);
}

if(resultado > 10)
{
    alert("La suma es " + resultado + " y supero el 10");
}
}
