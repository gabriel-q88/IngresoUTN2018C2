function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if(edad >= 18)
{alert ("la Persona es mayor de edad")}

 else { 
     if (edad <=17 && edad >=13)
      {alert("la persona es adolecente") }
              
     if (edad <13)         
       alert("la persona es menor de edad")}
                               
         
                    
                  
}//FIN DE LA FUNCIÓN