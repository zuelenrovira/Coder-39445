let contenedor = document.getElementById("contenedor");

//traer arreglo de objetos utilizando un endpoint & desplegarlos en la página
fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    let section = document.createElement("section");
    section.classList.add(`articulo${item?.id}`);
    section.innerHTML = `
    <img src= "${item.img}">
    <p> ${item?.nombre}</b>
    <p> Precio: $${item?.precio}</p>
    <label>Cantidad deseada:</label>
    <input type="number" id="cantCompra${item?.id}">
    <button id="agregarProd${item?.id}"> Agregar </button>

    `;

    contenedor.append(section);

    let boton = document.getElementById(`agregarProd${item?.id}`);
    boton.addEventListener("click", () => {
        agregarProducto(item?.id); 
    });
  })

 //agregar productos al localStorage 
  const agregarProducto = (id) => {
    let item = data.find((item) => item?.id === id);
    console.log(item);
    localStorage.setItem("productos", JSON.stringify(data));
    precioProducto(item);
  };
});



//revisar si el carrito está lleno
let revisarCarrito= document.getElementById("carrito");

revisarCarrito.addEventListener("click", () => {

   
    let carrito;
    let carritoStorage = JSON.parse(localStorage.getItem("productos"));


    carritoStorage ? (carrito = carritoStorage, Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Carrito lleno',
      showConfirmButton: false,
      timer: 2000
    })) : Swal.fire({
      icon: 'error',
      title: 'El carrito está vacío',
      text: 'No haz agregado productos a tu carrito.',
      confirmButtonText: 'Agregar productos',

    })
    
 
});


//calcular el precio total sin descuento
let precio = 0;
let cantidad = 0;
let precioTotal =  0;
let codDescuento = 0;

const precioProducto = (item) => {
  precio = item.precio,
  console.log(precio);
  localStorage.setItem(`precioProd${item.id}`, precio);
  cantidad = document.getElementById(`cantCompra${item.id}`).value;
  console.log(cantidad);
  localStorage.setItem(`cantProd${item.id}`, cantidad);
 
  let cantidad1 = JSON.parse(localStorage.getItem("cantProd1"));
  let cantidad2 = JSON.parse(localStorage.getItem("cantProd2"));
  let cantidad3 = JSON.parse(localStorage.getItem("cantProd3"));
  let precio1 = JSON.parse(localStorage.getItem("precioProd1"));
  let precio2 = JSON.parse(localStorage.getItem("precioProd2"));
  let precio3 = JSON.parse(localStorage.getItem("precioProd3"));

  precioTotal = cantidad1*precio1 + cantidad2*precio2 + cantidad3*precio3;
  localStorage.setItem("precioTotal", precioTotal);
  
}

//calculo precio final
let calcPrecio = document.getElementById("calcular");
  calcPrecio.addEventListener("click", () => {

    descuentoIngresado = document.getElementById("descuentoIngresado").value;
    console.log(descuentoIngresado);
    localStorage.setItem("codigo", descuentoIngresado);

    
    codDescuento = (localStorage.getItem("codigo"));
    precioTotal = JSON.parse(localStorage.getItem("precioTotal"));

    let resultado = precioFinal(precioTotal, codDescuento);
    let mensaje = `El precio final de tus productos es ${resultado}`;
    
    resultado != null ? swal.fire({
      title: 'Precio Final',
      text: mensaje,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    })
    :  Swal.fire({
      icon: 'error',
      title: 'Productos no agregados',
      text: 'No haz agregado productos para calcular el precio final',
      confirmButtonText: 'Agregar productos',

    })
  
})  


//calculo de descuentos
function precioFinal (precioTotal, codDescuento){

  switch(codDescuento){
    case "ABR10":
        return precioTotal * (1-.10);
        break;
    
    case "ABR20":
        return precioTotal* (1-.20);
        break;
    
    case "ABR30":
        return precioTotal * (1-.30);
        break;
    
    default:
        return precioTotal;
        break;
}
  
}

//borrar todo
let borrarTodo = document.getElementById("borrarTodo");
borrarTodo.addEventListener("click", () => {
localStorage.clear();
location.reload();
});
