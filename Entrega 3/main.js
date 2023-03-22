const productos = [
    {id: 1, nombre: "cuchara", precio: 60},
    {id: 2, nombre: "tenedor", precio: 60},
    {id: 3, nombre: "tabla", precio: 90},  
];

let contenedor = document.getElementById("contenedor");

productos.forEach(item  => {
    let div = document.createElement("div");
    div.innerHTML =`
    <b> Nombre: ${item.nombre}</b>
    <p> Precio: $${item.precio} </p>
    
    `;

    contenedor.append(div);
});


let agregar = document.getElementById("agregar");

agregar.addEventListener("click", () =>{
    localStorage.setItem("productos", JSON.stringify(productos));
});

let revisar= document.getElementById("revisar");

revisar.addEventListener("click", () => {

    let resultado = document.getElementById("resultado");
    let carrito;
    let carritoStorage = JSON.parse(localStorage.getItem("productos"));
    
    if (carritoStorage){
        carrito = carritoStorage;
        let carritoAgregado = document.createElement("p");
        carritoAgregado.innerHTML= "¡Haz agregado productos a tu carrito!";
        resultado.append(carritoAgregado);
    

    }
    

    else{ 
        let vacio = document.createElement("p");
        vacio.innerHTML= "No haz agregado productos a tu carrito. El carrito está vacío.";
        resultado.append(vacio);
    } 
});


let borrarTodo = document.getElementById("borrarTodo");
borrarTodo.addEventListener("click", () => {
localStorage.clear();
location.reload();
});
