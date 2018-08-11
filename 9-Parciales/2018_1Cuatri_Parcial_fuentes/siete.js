function mostrar()
{
var nota;
var sexo;
var acumuladordenotas= 0;
var promedio;
var notamasbaja;
var sexomasbaja;
var contadorvarones = 0;
var flag = 0;


for (var i =0; i < 5 ; i++)
{
    nota = parseInt(prompt("Ingrese nota"))
while (nota <0 || nota >10 || isNaN(nota))
{
nota = parseInt(prompt("Nota invalida,Reingrese la nota"))

}
sexo = prompt("Ingrese sexo")
while (sexo != "f" && sexo != "m")
{
sexo = prompt("Error, reingrese sexo")

}
acumuladordenotas = acumuladordenotas + nota;
if (nota < notamasbaja || flag==0)
{
    notamasbaja = nota;
    sexomasbaja = sexo;
    flag ++;

}
if (sexo == "m" && nota >= 6 )
{
    contadorvarones++;
}
}
 
promedio = acumuladordenotas / 5;

alert("El promedio es " + promedio + "\n La nota mas baja es  " + notamasbaja + " y el sexo es " +sexomasbaja+ "\n La cantidad de varones con nota mayor a 6 es "+ contadorvarones )


}

