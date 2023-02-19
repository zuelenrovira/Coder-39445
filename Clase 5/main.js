/* estructura de un objeto

{clave1: valor1, clave2: valor2, clave3: valor3,....claven: valorn}



const persona = {
    nombre: "camila",
    edad: 18,
    direccion: "AV"
};

console.log(persona.nombre);
console.log(persona.direccion);

let clave = "nombre";
console.log(persona[clave]);
console.log(persona["edad"]);


function Persona (nombrePersona, edad, direccion){
    this.nombre = nombrePersona;
    this.edad = edad;
    this.direccion = direccion;
}


const persona1 = new Persona("camila", 18, "AV");

let nombre = prompt("Ingrese el nombre");
let edad = prompt("Ingrese la edad");
let direccion = prompt("Ingrese la direccion");

const persona2 = new Persona(nombre, edad, direccion);


console.log(persona2.nombre);


function Persona (info){
    this.nombre = info.tuNombre;
    this.edad = info.tuEdad;
    this.direccion = info.tuDireccion;
}



const persona1 = new Persona (
    {
        tuNombre: "Camila",
        tuEdad: 18,
        tuDireccion: "AV",
    }
);


function Producto (nombre, precio, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}

const producto1 = new Producto("Monitor game...", 659900, "http:skaJSKHS" );
console.log(producto1);

Todos los metodos son una funcion y necesitan un objeto pata poder funcionar
el metodo usa parentesis 

*/

// function Producto (nombre, precio, imagen){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.hablar = function(){
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// const producto1 = new Producto("Monitor game...", 659900, "http:skaJSKHS" );
// producto1.hablar();

//CLASES

// class Persona{
//     constructor(nombre, edad, direccion){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;
//     }

//     hablar(){
//         console.log(`Hola soy ${this.nombre}`);
//     }
// }

// class Producto{
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }

//     vender(){
//         this.cantidad -= 1; // this.cantidad = this.cantidad - 1
//     }
// }

// const producto1 = new Producto("Monitor",1000, 5);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);



class Producto{
    constructor (nombre, precio, descripcion, imagen, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    
    vender(){
        if (this.cantidad > 0){
            this.cantidad = this.cantidad -1;
        }
        else{
            console.log("Producto fuera de stock");
        }
    }
    
   
}


const producto1 = new Producto("cuchara", 60, "cuchara de madera para cocina", "https://.....", 10 );


let comprar = prompt("¿Desea comprarlo?");
if (comprar === "si"){
    producto1.vender();
    alert("Gracias por su compra");
}

else {
    alert("Esperamos que vuelva pronto");
}






