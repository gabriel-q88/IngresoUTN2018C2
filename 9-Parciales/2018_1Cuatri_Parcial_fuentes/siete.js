function mostrar()
{
var notas;
var sexo;
var acumuladornotas=0;
var notamasbaja;
var sexonotamasbaja;
var contadordenotasmas6=0;
var promedio;
var flag=0;


for ( var i =0; i<5 ; i++ ){

notas = parseInt(prompt("Ingrese la Nota"));

while (notas <0 || notas > 10 || isNaN(notas)){

    notas = parseInt(prompt("Reingrese la Nota"));

}
sexo = prompt("Ingrese el Sexo");

while (sexo != "f" && sexo != "m")
    sexo = prompt("reingrese el sexo");

}

acumuladornotas = acumuladornotas + notas;

if (notas < notamasbaja || flag==0){

    notamasbaja = notas;
    sexonotamasbaja = sexo;

    flag=1;
}

if ( sexo == " m" && notas >=6){

    contadordenotasmas6++;
}

promedio = acumuladornotas /5;

alert("El promedio de las notas es: "+ promedio + "\n La nota mas baja es: " + notamasbaja +
"\n El sexo de esa persona es: " + sexonotamasbaja + "\n La cantidad de varones con nota mayor o igual a seis es: "
+ contadordenotasmas6 );
}

