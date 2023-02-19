/* estructura de bucle flor

for (desde; hasta; actualizacion){
    codigo a repetir
}
i++ === i = i + 1;


for (let i= 0; i < 100; i++ ){
    console.log("hola", i);
}


let numero = parseInt(prompt("Ingrese el numero"));

for(let i = 1; i<=10; i++){
    let resultado = numero*i;
    alert(`${numero} * ${i} = ${resultado}`)
}






for (let i = 1; i<=7; i++){
    let nombre = prompt("Hola indica tu nombre para darte tu numero");
    alert(`Eres el numero de paciente ${i}`);
}
    alert("El maximo de pacientes que podemos atender por día es 7, por favor vuelve mañana");
    


for (let i = 0; i < 10; i++){
    if (i === 5){
        console.log("Numero del break", i);
        break;
    }

    console.log(i);
}
 

for (let i = 0; i < 10; i++){
    if (i === 5){
        continue;
    }

    console.log(i);
}

estructura del while

while (condicion){
    codigo a repetir siempre que la condicion sea verdadera
}

CUIDADO BUCKLE ININITOO!!!!!
let repetir = true;
while (repetir){
    console.log("Hola")
}



let usuario = prompt("Ingrese el usuario");

while(usuario != "camila"){
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese el usuario");

}

alert("Bienvenida");

let repetir = false;

do{
    console.log("entramos");
}
while (repetir);


estructura del switch
switch(valor){
    case valor 1:
        codigo a ejecutar eb caso de que el valor sea igual a valor1
        break;

    case valoir 2:
        codigo a ejecutar en caso de que valor sea ihual a valor2
        break;

    default: 
    codigo a ejecutar en caso de que valor no se aninguno de los anteriores
    break;
}



let entrada = prompt("Ingrese un nombre");

while(entrada != "ESC"){
    switch(entrada){
        case "ANA":
            alert("Hola ANA");
            break;

        case "JUAN":
            alert("Hola Juan");
            break;

        default:
            alert("quien eres?");
            break;
    }

    entrada = prompt("Ingrese un nombre");
}

*/

let numero = parseInt(prompt("Ingresa un numero"));

for(let i = 0; i < 5; i++){
    respuesta = numero + i;
    alert(`Este es tu numero ${respuesta}`);
}

