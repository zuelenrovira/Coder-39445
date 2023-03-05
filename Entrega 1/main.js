
/*let comprar = prompt("¿Quiere comprar un producto?");

while (comprar === "si"){
    
    let producto = prompt("Ingresa el nombre del producto");
    let codDescuento = prompt("Ingresa el codigo de desuento");
    let precio = 0;

    if (producto === "cuchara" || producto === "tenedor"){
        precio = 100;
            precioFinal (precio, codDescuento)
    }

    else if (producto === "tabla"){
        precio = 200;

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

//eliminar seccion
//let header = document.getElementById("header");
//header.remove();

let header = document.getElementById("header");
let nav = document.createElement("nav");
header.append(nav);
let li = document.createElement("li");
li.innerHTML = "Sobre Nosotros";
nav.append(li);


