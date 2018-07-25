function mostrar()
{

	var numero;
     numero = parseInt(prompt (" Ingrese un numero entre 0 y 9"))
     while ( numero < 0 || numero >=10 || isNaN(numero))
	 { 
		 numero = prompt(" Error. Reingrese numero entre 0 y 9")
	 }
document.getElementById("Numero").value = numero;



}//FIN DE LA FUNCIÓN