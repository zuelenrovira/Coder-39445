/*estructura del condicional if

if (condicion) {
    codigo a ejecutar en caso de que la ejecucicon sea verdadera
}

= asignacion
== comparacion solo de valor
=== comparacion de valor y de tipo de dato



let nombre = "";

if (nombre){
    console.log("hola entramos al if");
} 

estructura del if else

if (condicion) {

    codigo a ejecutar en caso de que la condicion sea verdadera

    else{
        codigo a ejecutar en caso de que la condicion sea falsa
    }
}



let respuesta = prompt("Terminaste la tarea?");
if (respuesta === "si"){
    alert("puedes salir a jugar");
}
    else{
        alert("no puedes salir a jugar");
    }



let edad = parseInt(prompt("Ingrese la edad"));

    if (edad < 14){
        alert("No puedes entrar a la fiesta");
    }

    else if (edad < 18){
        alert("Puedes entrar a la fiesta con un adulto");
    }

    else {
        alert("puedes entrar a la fiesta");
    }

    let numero = 5;
    let valor = numero >10;

    console.log(valor);


 valor1 && valor 2   es verdadero siempre y cuando ambos valores sean verdaderos, de lo contrario es falso.

 valor1 || valor2 es verdadero siempre y cuando al menos uno de ambos valotres es verdadero, de lo contrario es falso



let nombre = "";

if(nombre != "" && nombre === "andres"){
    console.log("Hola andres");
}

else {
    console.log("nombre incorrecto");
}



let apellido = "ruiz";

if (apellido.toLocaleLowerCase() === "ruiz" || apellido === "RUIZ"){
    console.log("Hola Don Ruiz");
}
else{
    console.log("apellido incorrecto");
}



let numero = parseInt(prompt("Ingresa un numero"));

if (numero % 2 === 0){
    alert("Es numero par");
}
else {
    alert("es numero impar");
}



let palabra = prompt("Ingrese una palabra");
if (palabra.includes("o")){
    alert("La palabra contiene la letra o");
}
else{
    alert("La palabra no contiene la letra o");
}

*/

let numero1 = parseInt(prompt("Ingresa un primer numero"));

let numero2 = parseInt(prompt("Ingresa un segundo numero"));

if (numero1 > numero2){
    alert("El primer numero es mayor que el segundo numero");
}

else if (numero1 === numero2){
    alert("los dos numeros que ingresaste son iguales");
}

else{
    alert("El segundo numero que ingresaste es mayor al primero");
}

