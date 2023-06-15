<h1 align="center"> Challenge 04 - Alura Geek (E-Commerce)</h1>

![220230904-ff71c07e-42de-4ebe-bb62-25ec9bc65745](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/f49c5bdb-c004-49b8-89d8-d976c201753d)


Este es el cuarto reto dentro del programa Oracle Next Education, considero que ha sido el reto mas ambicioso hasta el momento, ya que implica aplicar todos
los conocimientos aprendidos hasta el momento, el reto consiste en crear una E-Commerce

Consto de dos etapas:
- La primera es hacer todas las maquetas en HTML, CSS y JavaScript de todos los aspectos visuales del sitio web
- La segunda consistio en integrar los elementos de forma dinamica, haciendo uso de CRUD mediante el uso de un archivo Json, como base de datos

#### Funcionamiento del protyecto 🛠️

- La pantalla principal consiste en una tienda online, donde puedes visualizar los produtos que hay ordenados dependiendo la tematica de los mismos 

![prncipal](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/d5d5bda2-4db7-47b4-8337-eb28adce5c8c)

- En la parte inferior del producto podras encontrar un boton que dice "Ver producto", al hacer click en el te llevara a la descripcion detallada del articulo


![producto](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/5e8d6f83-d64f-4a5e-8147-ded5900521c5)


- Desde el comienzo, es necesario hacer énfasis en que ya se está utilizando los métodos de CRUD. En este apartado el método en particular que se está ejecutando
  es READ, ya que está trayendo toda la información de un archivo de tipo "json". Conectando con éste "Fake API" es como traemos a la pantalla todo el contenido
  de los productos que estamos visualizando, ya que ninguna información de ellos está en el código HTML de la página.
  
![json](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/0496cc59-b439-4967-ab72-275913b6061c)


- La página no solo permite visualizar los productos como si uno fuera cliente, sino tambien desde la parte del administrador, para ello deberas buscar el boton de login
este te llevara a un formulario en el cual te pedira iniciar sesion, para fines didacticos se usaron las siguientes credenciales 
   - Usuario: user@correo.com
   - Contraseña: 12345678
Ingresamos las credenciales y podemos acceder al modo administrador
  
![iniciar_sesion](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/38ba80f8-7315-4485-966e-0f95b2e43eea)



-Una vez dentro del modo administrador, podremos visualizar todos los productos disponibles, donde podremos hacer modificaciones, como eliminar, editar un producto 
o incluso agregar nuevos produtos, cualquier modificacion afectara el archivo Json que sirve como base de datos.

![todos_productos](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/377a6e03-ebdc-4b9c-be1f-5e914ba687cf)


- Si seleccionas la opcion de "Agregar Producto" este te llevara un formulario, en el cual podremos ingresar datos de los nuevos articulos para agregar a la base de datos

![agregar](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/147a001c-021b-451e-a50d-ff6c7795a072)


- Aqui se muestra como se agrego el nuevo produto al inventario


  
![agregado](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/a9dc52c1-cf0a-4869-ad00-34469e78a2e3)


------------


#### Abre y ejecuta el proyecto  📂

Podras probar el proyecto desde el siguiente enlace:

https://leonelrz.github.io/Challeng-ONE-Portafolio/




Sin embargo, no podrá mostrarse el contenido de los productos ya que está guardado en el archivo db.json dentro de éste repositorio, y hay que hacer una serie de pasos
(los cuales voy a listar a continuación) para poder conectarse a ese Fake API y obtener dicha información, entonces, para poder visualizar el contenido del proyecto
haremos lo siguiente:

- Descargar todo el contenido de éste repositorio y almacenarlo todo junto en una carpeta o directorio nuevo.
- Debemos tener instalado Node.js, si no lo tienes puedes descargarlo del siguiente enlace. Es recomendable instalar la versión LTS que es la mas estable
  hasta el momento:
  
  https://nodejs.org/es/
  
- Después de la instalación, abrimos la terminal y escribimos el siguiente comando:

      node -v
  
  Esto es para confirmar la versión de node que instalamos.
- También debemos tener instalado Node Package Manager, podemos corroborarlo con el siguiente comando:

      npm -v
- Ahora, abrimos en nuestro Visual Studio Code la carpeta donde está todo el proyecto y aquí mismo abrimos una terminal, verificando que sea la ruta correcta
  donde está guardado el proyecto, o también podemos ingresar la ruta de forma manual en una terminal aparte. Ya una vez dentro ejecutamos el comando:
 
      npm install -g json-server
      
  Este comando es para crear esa Fake API, NO creamos el archivo json ni el package porque ya están en el proyecto, de hecho el comando anterior solo es para
  asegurar que se cree esa API en su equipo.
  
- Por último en esa misma terminal ingresamos ahora éste comando:

      json-server --watch db.json

- Si sale en la terminal un mensaje como el siguiente, es que la conexión se realizó de manera correcta:

![json_montar](https://github.com/leonelrz/AluraGeek-Challenge--ONE/assets/112590041/3b83d4d0-af61-40e0-9866-d6b0cebcd6b9)

- Ya solo para visualizar el proyecto, desde tu editor de texto que estés ocupando corre el index.html


#### Tecnologias aplicadas 🤖

- HTML5
- CSS3
- JavaScript
- Node.js
- NPM
- JSON SERVER



## :heavy_check_mark: Tecnologías aplicadas
    
    - HTML5
    - CSS3
    - JavaScript
    - Node.js
    - NPM
    - JSON SERVER
    
    
#### Autores 
  | [<img src="https://avatars.githubusercontent.com/u/112590041?v=4" width=115><br><sub>Leonel Reyes</sub>](https://github.com/leonelrz) |
  | :---: |

