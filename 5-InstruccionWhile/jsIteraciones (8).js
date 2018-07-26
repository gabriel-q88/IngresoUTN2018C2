function mostrar()
{   var contador=0;
	var numero;
	var respuesta='si';  // <---plantea las variables
	var positivo=0;
	var negativo=1;

   do { //<--- hacer...
	   numero = parseInt (prompt("Ingrese un numero: "));
	   if (numero >=0 ) { // <--- si la variable "numero" es mayor o igual a "0"
         positivo = positivo + numero;// <---ejecuto la suma de la variable de los positivos 
    
	  }
	  else { //<--- ademas...
      negativo = negativo * numero;//<---- ejecuto la multiplicacion de la variable
	 contador++;//<---- es lo mismo que decir "contador = contador + 1"
	 }

	  
	respuesta = prompt("Desea reingresar numero?: ");
	respuesta = respuesta.toLowerCase();
      }
      while (respuesta == "si");
   
document.getElementById('suma').value=positivo;
if (contador == 0)
	{negativo = 0;}

document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN