/*let comprar = prompt("¿Quiere comprar un producto?");

while (comprar === "si"){

    const cuchara = {
        id: 1,
        nombre: "Cuchara",
        precio: 60,
    
    };
    
    const tenedor = {
        id: 2,
        nombre: "Tenedor",
        precio: 60,
    
    };
    
    const tabla = {
        id: 3,
        nombre: "Tabla",
        precio: 90,
    
    };
    
    const productos = [];
    productos.push(cuchara,tenedor,tabla);
    
    let producto = prompt("Ingresa el nombre del producto");
    let codDescuento = prompt("Ingresa el codigo de desuento");

    let buscar = productos.find(item => item.nombre === producto);
    let precio = 0;

    if (producto === "Cuchara" || producto === "Tenedor"){
        precio = buscar.precio;
            precioFinal (precio, codDescuento)
    }

    else if (producto === "Tabla"){
        precio = buscar.precio;

        precioFinal(precio, codDescuento)
        
        }   
    

    else {
        alert("El producto ingresado no existe");
    }

    let resultado = precioFinal(precio, codDescuento);
    let mensaje = `El precio final de tu producto es ${resultado}`;
    alert(mensaje);
  
    comprar = prompt("¿Quiere comprar otro producto?");
}

function precioFinal (precio, codDescuento){
                
    switch(codDescuento){
        case "FEB10":
            return precio * (1-.10);
            break;
        
        case "FEB20":
            return precio * (1-.20);
            break;
        
        case "FEB30":
            return precio * (1-.30);
            break;
        
        default:
            return precio;
            break;
    }
}

*/


const cuchara = {
    id: 1,
    nombre: "cuchara",
    precio: 60,

};

const tenedor = {
    id: 2,
    nombre: "tenedor",
    precio: 60,

};

const tabla = {
    id: 3,
    nombre: "tabla",
    precio: 90,

};

const productos = [];
productos.push(cuchara,tenedor,tabla);

let producto = "pizza";
//let codDescuento = prompt("Ingresa el codigo de desuento").toUpperCase();

let buscar = productos.find(item => item.nombre === producto);
//let precio = buscar.precio;

console.log(buscar);


//if (buscar = "undefined"){
  //  alert("El producto ingresado no existe");
//}

//else{
  //  precioFinal(precio, codDescuento);
//}