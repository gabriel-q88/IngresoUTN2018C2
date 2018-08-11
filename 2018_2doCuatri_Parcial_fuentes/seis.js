function mostrar()
//Si es otoño con 15 grados mostrar “esta lindo”, si está por debajo de esa temperatura mostrar
// “se vino el frío” y si la supera los 15 pero no pasa de 21 “esta re bueno!”. Si supera el último valor mostrar
//  “mucho calor para el otoño”.
{
var estacion;
var temperatura;

estacion = prompt("ingrese una estacion");

temperatura = prompt("ingrese temperatura");
temperatura = parseInt(temperatura);

switch (estacion)
{
	case "otoño":
		if (temperatura === 15)
		{	
			alert("esta lindo");
		}else if (temperatura < 15)
		{
			alert("se vino el frio");
		}
		if (temperatura > 15 && temperatura < 21)
		{
			alert("esta re bueno");
		}
		if (temperatura > 21)
		{
			alert("mucho calor para otoño");
		}
		break;
} 
}
