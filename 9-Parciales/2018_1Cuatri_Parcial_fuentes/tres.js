function mostrar()
{
var precio;
var descuento;
var preciofinal;

precio = parseInt(prompt("Ingrese el precio:"));
descuento = parseInt(prompt("Ingrese el descuento:"));

descuento = precio * descuento / 100;
preciofinal = precio - descuento;
document.getElementById("elPrecioFinal").value = preciofinal;
}
