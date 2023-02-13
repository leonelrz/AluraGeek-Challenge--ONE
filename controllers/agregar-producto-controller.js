import { productosServices } from "../servicios/productos-servicios";

const formulario = document.querySelector("[data-formulario]");

const campos ={
    nombre: false,
    mensaje: false,
    correo: false,
    password: false,
    imagen: false,
    categoria: false,
    nombreProducto: false,
    precio: false,
    descripcion: false,
}


formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const imageUrl = document.querySelector("[data-imagen]").value;
    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcion]").value;
        

    productosServices.crearProducto (imageUrl , section, name, price, description).then(() =>{
        document.querySelector(".formulario__mensaje").classList.remove("formulario__mensaje-activo")
    });
});