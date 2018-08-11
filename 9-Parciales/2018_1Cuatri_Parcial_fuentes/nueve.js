function mostrar()
{

var peso;
var temp;
var marca;
var acumpeso=0;
var temppar=0;
var marcamaspesada;
var contadormenoscero=0;
var promedio;
var contadorpeso = 0;
var pesomax;
var pesomin;
var flag=0;
var respuesta = "si";

do {
    marca = prompt("Ingrese marca");
    peso = parseInt(prompt("Ingrese peso"));
    while (peso< 1 || peso > 100 || isNaN(peso))
    {
        peso = parseInt(prompt("Error, reingrese peso"));

    }
    acumpeso = acumpeso + peso;
    contadorpeso++;


    temp = parseInt(prompt("Ingrese temperatura"));
    while(temp <-30 || temp >30|| isNaN(temp))
    {
        temp= parseInt(prompt("Error, reingrese temperatura"));
      
    }
    if (temp < 0)
    {
        contadormenoscero++;
    }
    if (temp % 2 ==0)
    {
        temppar++;
    }
     if (peso > pesomax || flag==0)
     {
         pesomax = peso;
         marcamaspesada = marca;
     }
  if (peso < pesomin || flag ==0)
  {
      pesomin = peso;
      flag++;
  }
     promedio= acumpeso / contadorpeso;
respuesta = prompt("Desea seguir ingresando datos?")
}while(respuesta == "si");
document.write("La cantidad de temperaturas pares es " + temppar + "<br>");
document.write("La marca del producto mas pesado es " + marcamaspesada +"<br>");
document.write("La cantidad de productos a -0 "+ contadormenoscero +"<br>");
document.write("El promedio de peso es " + promedio+ "<br>");
document.write("El peso maximo es " + pesomax +"<br>");
document.write("El peso minimo es " + pesomin +  "<br>");
}
