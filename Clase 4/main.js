/* estructura de una funcion

function nombre(){
    codigo de la funcion
}



function saludar(){
    console.log("Hola");
}

saludar(); 



function pedirDatos(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

perdirDaros();


estructura de una funcion con parametros

function nombre (param1, param2, ....paramN){
    codigo de la funcion
}





function sumar (numero1, numero2){
    let mensaje = `El resultado de la operacion es ${numero1 + numero2}`;
    alert(mensaje);

}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundi numero"));
sumar(numero1, numero2);



function sumar (numero1, numero2){
    let mensaje = `El resultado de la operacion es ${numero1 + numero2}`;
    alert(mensaje);

}


function saludar (saludo, nombre){
  
    console.log(`${saludo} ${nombre}`);

}

saludar("hola", "andres");
saludar("bienvenida", "camila");



function sumar(num1, num2){
    return num1 + num2;
}

let resultado = sumar(4,5);
console.log(resultado);



function calculadora(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        
        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2;
            break;
        
        default:
            return "Operacion no idenfificada"
            
    }
}

let operacion = prompt("Ingrese la opreacion");
let num1 = parseInt(prompt("Ingresa un primer numero"));
let num2 = parseInt(prompt("Ingresa un segund0 numero"));

let resultado = calculadora(num1, num2, operacion);
let mensaje = `El resultado de la operacoon es ${resultado}`;

alert(mensaje);


const suma = function(a,b){
    return a + b;
}


console.log(suma(3,4));

*/

const suma = (a,b) => a + b;

console.log(suma(4,5));