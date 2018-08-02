function mostrar()
{var numero;
    var divisores=0;

    numero = parseInt(prompt("ingrese un numero"));

    for(var i=1; i<= numero ;i++ ){

        if (numero % i == 0){
         divisores++;
        }
    }
    if (divisores ==2) {
    console.log(numero + " es primo");

    }
     else {
         console.log(numero + " no es primo");
    }


}//FIN DE LA FUNCIÓN