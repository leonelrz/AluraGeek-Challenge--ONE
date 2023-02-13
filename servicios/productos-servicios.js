//GET

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json())
}

const crearProducto = (imageUrl , section, name, price, description) => {
    //El fetch por defecto trabajo con el metodo GET, por eso lo definimos aqui nosotros
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imageUrl , section, name, price, description}) //HTTP trabaja con texto
    })
}

export const productosServices = {
    listaProductos,
    detalleProducto,
    crearProducto
}