/*
9-(2pts.) En una tienda se ingresan los datos de los cliente (nombre , sexo, estado civil{soltero, casado,viudo},cantidad de productos e importe total de la compra)
Necesitamos saber:
a- el nombre de la persona que más cantidad de productos compró.
b- de los solteros, el  sexo del que más gasto y el que menos gasto.
c-el importe  y nombre de la primer mujer en comprar.
d- el promedio de gasto de los viudos.

*/
function mostrar()
{
var nombre;
var sexo;
var estadocivil;
var cantidad;
var importetotal;
var respuesta = "no";
var mayorcantidad;
var mayorcantidadnombre;
var flagyapaso = "no";
var flagsoltero ="no"
var masgasto;
var menosgasto;
var masgastosexo;
var menosgastosexo;
var primermujerimporte=0;
var primermujernombre=0;
var primermujerflag=0;
var cantidadviudos=0;
var acumuladorviudos=0;
var promediototal;

while (respuesta != "no")

{
   nombre = prompt("introducir nombre");
   sexo = prompt("ingrese sexo");
   while (sexo != "f" && sexo != "m")
   {
	   sexo = prompt("Reingrese sexo");
   }
     estadocivil = prompt("ingrese estadocivil");
   while (estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo")
   {
	   estadocivil = prompt("Reingrese estado civil");
}
   cantidad = prompt("ingrese cantidad");
   cantidad = parseInt(cantidad);
   while (cantidad < 0 && isNaN (cantidad))
   {
	   cantidad = prompt("Reingrese cantidad");
	   cantidad = parseInt(importe);
   
}
    //analisis
    if (flagyapaso == "no")
	{
		flagyapaso= "si";
		mayorcantidad = cantidad;
		mayorcantidadnombre = nombre;
	}else {
		if (cantidad > mayorcantidad)
		{
			mayorcantidad = cantidad;
		    mayorcantidadnombre = nombre;
		}
	}if ( estadocivil== "soltero")
	{
		if(flagsoltero == "no")
		{
			flagsoltero = "si";
			masgasto = inportetotal;
			menosgasto = importetotal;
			masgastosexo = sexo;
			menosgastosexo = sxo
		}else
		{
			if ( importetotal > masgasto)
			{
				masgasto = importetotal
				masgastosexo = sexo;
			}if ( importetotal < menosgasto)
			{
				menosgasto = importetotal;
				menosgastosexo = sexo;
			}
		}
	}
	if ( sexo= "f" && primermujerflag ==0)
	{
		primermujerflag = 1;
		primermujernombre = nmombre;
		primermujerimporte = importetotal;
	}
}   if (estadocivil =="viudo")
{
	cantidadviudos++;
	acumuladorviudos = acumuladorviudos + importetotal;
}
promediototal = cantidadviudos / acumuladorviudos;
}