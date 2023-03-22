const productos = [
    {id: 1, nombre: "cuchara", precio: 60},
    {id: 2, nombre: "tenedor", precio: 60},
    {id: 3, nombre: "tabla", precio: 90},  
];

localStorage.setItem("arrObjeto", JSON.stringify(productos));
let arrObjeto = JSON.parse(localStorage.getItem("arrObjeto"));


let contenedor = document.getElementById("contenedor");

productos.forEach(item  => {
    let div = document.createElement("div");
    div.innerHTML =`
    <b> Nombre: ${item.nombre}</b>
    <p> Precio: $${item.precio}</p>
    <label>Ingresa la cantidad deseada:</label>
    <input type="number" id="cantCompra${item.id}">
    `;

    contenedor.append(div);
});


let agregar = document.getElementById("agregar");
agregar.addEventListener("click", () =>{
    let cantidad1 = document.getElementById("cantCompra1").value;
    localStorage.setItem("cantidad cuchara", cantidad1);
    let cantidad2 = document.getElementById("cantCompra2").value;
    localStorage.setItem("cantidad tenedor", cantidad2);
    let cantidad3 = document.getElementById("cantCompra3").value;
    localStorage.setItem("cantidad tabla", cantidad3);
});



//function saveInput(){
 //   let codDescuento = document.getElementById("descuento").value;
//    sessionStorage.setItem("codigo descuento", codDescuento);
//}

//let aplicar = document.getElementById("aplicar");
//aplicar.onclick = () => saveInput();

//let borrarDescuento = document.getElementById("borrarDescuento");
//borrarDescuento.onclick = () => sessionStorage.clear();

let botonPrecio = document.getElementById("agregar");
agregar.addEventListener("click", () => {

   

    //let buscar = productos.find(item => item.cantCompra[1,2,3] === storage);
    //let precio = 0;
    //let precioCuchara = 0;

    let cantidadCuchara = localStorage.getItem("cantidad cuchara");
    let cantidadTenedor = localStorage.getItem("cantidad tenedor");
    let cantidadTabla = localStorage.getItem("cantidad tabla");

    //let codDescuento = sessionStorage.getItem("codigo descuento");
    let resultado = document.getElementById("resultado");

    //como identificar el precio de cada producto basado en la cantidad ingresada
    if (cantidadCuchara > 0 || cantidadTenedor > 0 || cantidadTabla > 0){
        let carrito = document.createElement("p");
        carrito.innerHTML= "Haz agregado productos a tu carrito";
        resultado.append(carrito);
        alert("hola");

    }

        /*if(cantidadCuchara > 0){
            let buscar = productos.find(item => item.nombre === "cuchara");
            precio = buscar.precio;
            let precioCuchara = cantidadCuchara*precio;
            
        }  

        else if(cantidadTenedor > 0){
            let buscar = productos.find(item => item.nombre === "tenedor");
            precio = buscar.precio;
            let precioTenedor = cantidadTenedor*precio;
        } 
        else if(cantidadTabla > 0){
            let buscar = productos.find(item => item.nombre === "tabla");
            precio = buscar.precio;
            let precioTabla = cantidadTabla*precio;
        }        

        /*for(let i = 0; i < productos.length; i++){

            let clave = localStorage.key(i);
            let valor = $.parseJSON(localStorage.getItem(clave));
    
            let precio1 = productos[0].precio;
            var nombre_estudiante = estudiante[0].nombre;
    
                     
    
        }*/
    
    

        //precio = buscar.precio;
        //llamar a funcion que calcule cantidad * precio.
        //precioFinal(precioTotal, codDescuento);
    
    

    else{ 
        let vacio = document.createElement("p");
        vacio.innerHTML= "No haz agregado productos a tu carrito. El carrito está vacío";
        resultado.append(vacio);
    } 
/*
    alert(precioCuchara);
    let precioTotal = precioCuchara + precioTenedor + precioTabla;    
    let resultado = precioFinal(precioTotal, codDescuento);
   

    let parrafo = document.createElement("p");
    parrafo.innerHTML= `El precio final de tu producto es ${resultado}`;
    calcPrecio.append(parrafo); */
    //let mensaje = El precio final de tu producto es ${resultado}`;// desplegarlo en la pagina, no en alert
    //alert(mensaje);
});

/*function precioFinal (precioTotal, codDescuento){
                
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

let borrarTodo = document.getElementById("borrarTodo");
borrarTodo.addEventListener("click", () => {
localStorage.clear();
location.reload();
});
//el codigo anterior da el precio final del producto con descuento.
//este se puede utilizar en el paso final del carrito
//pero necesito hacer el codigo anterior donde el usuario agrega sus productos al carrito



