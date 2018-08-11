/*
7-(2pts.) Realizar un algoritmo que permita el ingreso del nombre, el ancho, el alto y el peso de 5 productos 
.Validar todos los datos, sabiendo que no puede tener más de 10 de ancho y 10 de alto, y su peso no puede superar
los 1000 kilos. Informar: 
a- el peso más pesado
b- la altura más alta
c- el menor ancho.
d- la cantidad que tiene un peso entre 300 y 600 kilos.  
*/
function mostrar()

{
var nombre;
var ancho;
var alto;
var peso;
var contador=0;
var pesomax=0;
var altomax=0;
var anchomenor=0;
var contador300e600=0;
while (contador < 5);

      nombre = prompt("Ingrese nombre del producto");

      ancho = prompt("ingrese ancho del producto");
      ancho = parseInt(ancho);
      while ( ancho < 0 || ancho > 10)
	  {  
		 ancho = prompt("ingrese ancho del producto");
         ancho = parseInt(ancho); 
	  }


      if ( contador == 1)
	  {
		 altomax = alto;
		 pesomax = peso;
		 anchomenor = ancho;
	  }else
	  {
		   if( alto > altomax)
		   {
			   altomax = alto;
		   }if (peso > pesomax)
		   {
			   pesomax = peso;
		   }if (ancho> anchomenor)
		   {
			   anchomenor = ancho;
		   }
		   if( peso > 300 && peso <600)
		   {
			   contador300e600++;
		   }
	  }




{
	
}
}
