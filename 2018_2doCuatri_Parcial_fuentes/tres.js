function mostrar()
//3-(0,5pts.) 
//Pedir por prompt el importe del producto, la cantidad y el nombre, mostrar un solo mensaje con el
 //siguiente texto : “compró la cantidad xx del producto xx , a un precio de xx, pagando el precio de xx
  //con iva incluido”.

{
 var importe = parseInt(prompt("Ingrese importe"));
 var cantidad = parseInt(prompt("Ingrese la cantidad"));
 var nombre = prompt("Ingrese nombre del producto");
 var iva;
 var preciofinal;
 
iva = importe * 21 / 100;
preciofinal =  importe + iva;

alert("Compro la cantidad de " + cantidad + " del producto " + nombre + " , a un precio de " + importe + " ,pagando el precio final de " + preciofinal + " con iva incluido" );
}
