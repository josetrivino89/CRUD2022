console.log(`desde admin.js`);
/* importo la clase producto desde la interface*/
 import {Producto} from "../Interface/producto.js";

 /*obtengo los inputs de los arregos*/

 let inputCodigo = document.getElementById(`inputCodigo`);
 let inputProducto = document.getElementById(`inputProducto`);
 let inputPrecio = document.getElementById(`inputPrecio`);
 let inputDescripcion = document.getElementById(`inputDescripcion`);
 let inputUrl = document.getElementById(`inputUrl`);
 let form=document.getElementById(`form`)
 console.log(form);
 /* creamos un array para almacernar los datos de los nuevos productos*/

 let arrayProducto = [];

 /*creamos un evento para el boton guadar*/

 const handleSubmit=(e)=>{
    //*evita actualizr pagina
    e.preventDefault();
    //*crea un nuevo producto a partir de los inputs del usuario
   const nuevoProducto = new Producto(inputCodigo.value , inputProducto.value , inputPrecio.value , inputDescripcion.value, inputUrl.value);
   //*hago console para verque tengo
   console.log(nuevoProducto);
   //*push los datos al array
   arrayProducto.push(nuevoProducto)
   //*consulto que hay en el array
   console.log(arrayProducto);
   //*mando los datos a local storage usando metoso stringify
   localStorage.setItem(`Listado de Productos`,JSON.stringify(arrayProducto))
   //*reseteo formulario para que puedan completar siguiente producto
   form.reset()

 }
/*creamos un evento para que el formulario escuche*/
 form.addEventListener(`submit`,handleSubmit);