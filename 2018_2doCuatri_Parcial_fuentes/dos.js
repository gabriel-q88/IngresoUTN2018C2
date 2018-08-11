function mostrar()
//2-(0,5pts.) Se ingresa por prompt la edad , el nombre, el apellido y la localidad.
// mostrar el siguiente mensaje “ud es xx xx tiene xx años de edad y vive en xx”
{
	var edad = parseInt(prompt("Ingrese su edad"));
	var nombre = prompt("Ingrese su nombre");
	var apellido = prompt("Ingrese su apellido");
	var localidad = prompt("Ingrese localidad donde vive");

	alert("Usted es " + nombre + " " + apellido + " tiene " + edad + " años de edad y vive en " + localidad);

	
}
