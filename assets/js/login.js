const correo = document.getElementById("correo");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
    e.preventDefault();
        if (correo.value == "user@correo.com" && password.value == "12345678"){
            window.location.href = "todos-productos.html";
        } else{
            alert("Usuario o contraseña incorrecta");
        }
});