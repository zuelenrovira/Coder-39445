let comprar = prompt("¿Quiere comprar un producto?").toLowerCase();

while (comprar === "si"){

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
    
    let producto = prompt("Ingresa el nombre del producto").toLowerCase();
    let codDescuento = prompt("Ingresa el codigo de desuento").toUpperCase();

    let buscar = productos.find(item => item.nombre === producto);
    let precio = 0;
    
    if (buscar != undefined){
        precio = buscar.precio;
        precioFinal(precio, codDescuento);
    }


    else{ 
        alert("El producto ingresado no existe");
    } 

    
    let resultado = precioFinal(precio, codDescuento);
    let mensaje = `El precio final de tu producto es ${resultado}`;
    alert(mensaje);
  
    comprar = prompt("¿Quiere comprar otro producto?").toLowerCase();
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


