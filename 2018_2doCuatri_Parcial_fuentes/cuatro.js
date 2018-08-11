function mostrar()
{
	var numeroUno;
	var numeroDos; 
	var numerotres;
	var mayor;
	var menor;

	numeroUno=prompt("ingrese numero:");
	numeroUno= parseInt(numeroUno);

	numeroDos=prompt("ingrese numero:");
	numeroDos= parseInt(numeroDos);

	numeroTres=prompt("ingrese numero:");
	numeroTres= parseInt(numeroTres);

	    if (numeroUno > numeroDos && numeroUno > numerotres)
		{
                 mayor =  numeroUno;
	     } else 
		 {
	           if (numeroDos > numeroUno && numeroDos > numerotres)
	           {
                 mayor =  numeroDos;
		       }else 
	            { mayor = numeroTres;
				} 
		 }
          if (numeroUno < numeroDos && numeroUno < numerotres)
	       {
                    menor = numeroUno;
	       } else 
		   {
	            if (numeroDos < numeroUno && numeroDos < numerotres)
	            {
                    menor = numeroDos;
                }else 
	            {    menor =  numeroTres;
					}
           alert("El mayor es " + mayor);
           alert("El menor es " + menor);
		   }	  
		 
}
