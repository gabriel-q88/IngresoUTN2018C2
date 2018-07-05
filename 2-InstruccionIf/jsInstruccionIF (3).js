function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if (edad >= 18)
{alert(" La Persona es Mayor de edad")}
else
alert(" La Persona es menor de edad")
}//FIN DE LA FUNCIÓN