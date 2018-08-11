
function mostrar()
//1-(0,5pts.)Se piden por prompt el ancho y largo de una cancha de futbol y 
//sabiendo que con un litro de pintura blanca se pintan 3 mts lineales, informar el 
//perímetro y la cantidad de litros de pintura se deben comprar para pintar todo el perímetro.
{
	var ancho = parseInt(prompt("Ingrese ancho de la cancha"));
	var largo = parseInt(prompt("Ingrese el largo de la cancha"));
	var resultado;
	var perimetro;

	perimetro = ancho * largo;
	resultado = perimetro / 3;

	alert("El perimetro de la cancha es " + perimetro + " y la cantidad de litros necesaria es " + resultado);


	
}
