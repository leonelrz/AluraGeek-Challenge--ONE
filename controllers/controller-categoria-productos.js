import { productosServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, id) =>{

    const card = document.createElement("div");
    const contenido = `
    <div class="produto">
        <img class="img-producto" src = "${imageUrl}" alt="">
        <p class="descripcion">${name}</p>
        <p class="precio">${price}</p>
        <a href="screens/producto.html?id=${id}">Ver Producto</a>
        
    
    </div>`

    card.innerHTML = contenido;
    card.classList.add ("prod-holder")
    return card
}

const secctionStarwars = document.querySelector("[data-starwars]");
const secctionConsolas = document.querySelector("[data-consolas]");
const secctionDiversos = document.querySelector("[data-diversos]");

const render = async () =>{
    try{
        const listaProductos = await productosServices.listaProductos();
        listaProductos.forEach(elemento => {
            if(elemento.section == "Star Wars"){
                secctionStarwars.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            }else if(elemento.section == "Consolas"){
                secctionConsolas.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            }else if(elemento.section == "Diversos"){
                secctionDiversos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            }
            
        });
    }catch(error){
        console.log(error)
    }
}

render()