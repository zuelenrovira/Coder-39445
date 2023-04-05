const productos = [
    {id: 1, nombre: "cuchara", precio: 60},
    {id: 2, nombre: "tenedor", precio: 60},
    {id: 3, nombre: "tabla", precio: 90},  
];

let contenedor = document.getElementById("contenedor");

const agregarProducto = (id) => {
    let item = productos.find((item) => item?.id === id);
    console.log(item);
    localStorage.setItem("productos", JSON.stringify(productos));
    //let cantidad = document.getElementById("cantCompra${item.id}").value;
    //localStorage.setItem("cantidad", cantidad);
  };

productos.forEach(item  => {
    let div = document.createElement("div");
    div.innerHTML =`
    <b> Nombre: ${item?.nombre}</b>
    <p> Precio: $${item?.precio}</p>
    <label>Ingresa la cantidad deseada:</label>
    <input type="number" id="cantCompra${item?.id}">
    <button id="agregarProd${item?.id}"> Agregar </button>
    
    `;

    contenedor.append(div);

    let boton = document.getElementById(`agregarProd${item?.id}`);
    boton.addEventListener("click", () => {
        agregarProducto(item?.id);
   
})});

/*
    let cantidad1 = document.getElementById("cantCompra1").value;
    localStorage.setItem("cantidad cuchara", cantidad1);
    let cantidad2 = document.getElementById("cantCompra2").value;
    localStorage.setItem("cantidad tenedor", cantidad2);
    let cantidad3 = document.getElementById("cantCompra3").value;
    localStorage.setItem("cantidad tabla", cantidad3);
*/

let revisar= document.getElementById("revisar");

revisar.addEventListener("click", () => {

    let resultado = document.getElementById("resultado");
    let carrito;
    let carritoStorage = JSON.parse(localStorage.getItem("productos"));
    
    if (carritoStorage){
        carrito = carritoStorage;
        //let carritoAgregado = document.createElement("p");
        //carritoAgregado.innerHTML= "¡Haz agregado productos a tu carrito!";
        //resultado.append(carritoAgregado);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Haz agregado productos al carrito',
            showConfirmButton: false,
            timer: 2000
          })
    

    }
    

    else{ 
       // let vacio = document.createElement("p");
        //vacio.innerHTML= "No haz agregado productos a tu carrito. El carrito está vacío.";
        //resultado.append(vacio);

        Swal.fire({
            icon: 'error',
            title: 'El carrito está vacío',
            text: 'No haz agregado productos a tu carrito.',
            confirmButtonText: 'Agregar productos',
    
          })
    } 
});


let borrarTodo = document.getElementById("borrarTodo");
borrarTodo.addEventListener("click", () => {
localStorage.clear();
location.reload();
});
