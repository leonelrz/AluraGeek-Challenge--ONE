import { productosServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, id) =>{

    const card = document.createElement("div");
    const contenido = `
    <div class="produto">
        <img class="img-producto" src = "${imageUrl}" alt="">
        <p class="descripcion">${name}</p>
        <p class="precio">${price}</p>
        <a href="/screens/producto.html=${id}">Ver Producto</a>
    
    </div>`

    card.innerHTML = contenido;
    card.classList.add ("prod-holder")
    return card
}

const producto = document.querySelector("[datos-productos]");

const render = async () =>{
    try{
        const listaProductos = await productosServices.listaProductos();
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id))
        });
    }catch(error){
        console.log(error)
    }
}

render()