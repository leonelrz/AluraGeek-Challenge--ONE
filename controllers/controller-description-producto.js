import { productosServices } from "../servicios/productos-servicios";

const productoDescripcion = (imageUrl,alt, name, price, description) =>{

    const info = document.createElement("section");
    const contenido = `
        <div class="imagen-descripcion">
            <img class="img-producto" src = "${imageUrl}" alt="${alt}">
        </div>

        <div class="texto-imagen">
            <h4 class="descripcion-titulo">${name}</h4>
            <span>${price}</span>
            <p class="descripcion-parrafo">${description}</p>
        </div>
    `

    info.innerHTML = contenido;
    info.classList.add ("descripcion-producto");
    return info;
}

/*const producto = document.querySelector("[datos-productos]");

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

render()*/

const getInfo = async () => {
    const url = new URL(window.location);
    console.log(url);
    const id = url.searchParams.get("id");
    console.log(id);

    if( id === null){
        alert("Producto no encontrado")
    }

    try{
        const producto = await productosServices.detalleProducto(id);
        console.log(producto);

        const container = document.querySelector(".producto");
        container.appendChild(productoDescripcion(producto.imageUrl, producto.alt, producto.name, producto.price, producto.description))

        const listaProductos = await productosServices.listaProductos();
        

        listaProductos.forEach(elemento => {
            const similares = document.querySelector(".galeria__productos");

            const productoSimilar = (imagenUrl, nombre, precio, id) =>{

                const card = document.createElement("div");
                const contenido = `<img class="galeria__productos__card__img" src="${imagenUrl}" alt="${nombre}">
                                    <h4 class="galeria__productos__card__nombre">${nombre}</h4>
                                    <p>$ ${precio}</p>
                                    <a class="galeria__productos__card__enlace" href="../screens/producto.html?id=${id}">Ver producto</a>`;
                
                card.innerHTML = contenido;
                card.classList.add("galeria__productos__card");
                card.classList.add("textos");
            
                return card;
            }

            if(elemento.categoria == producto.categoria && elemento.id != producto.id){
                similares.appendChild(productoSimilar(elemento.imagen, elemento.nombreProducto, elemento.precio, elemento.id))
            }
        });
    }
    catch(error){
       alert(error);
    }

};

getInfo();
