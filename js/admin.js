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
 /* creamos un array para almacernar los datos de los nuevos productos, ademas incorporo consulta en JSON para ver que tengo almacenado en LocalStorage*/

 let arrayProducto = JSON.parse(localStorage.getItem(`Listado de Productos`))||[];

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
   window.location.reload()
   //*reseteo formulario para que puedan completar siguiente producto
   form.reset()

 }
/*creamos un evento para que el formulario escuche*/
 form.addEventListener(`submit`,handleSubmit);

 //*Traigo el tbody del html:

 let tBodyListaProducto = document.getElementById("bodyListaProductosAdmin")
 console.log(tBodyListaProducto);
 //*recorro el arrayProducto para ir agregando los nuevos productos:
 arrayProducto.forEach(producto => {
    tBodyListaProducto.innerHTML +=
    `<tr>
        <th class="text-center">${producto.codigo}</th>
        <th class="text-center">${producto.producto}</th>
        <th class="text-center">${producto.descripcion}</th>
        <th class="text-center">u$s:${producto.precio}</th>
        <th class="text-center">${producto.URL}</th>
        <th class="text-center">
            <button class="btn btn-primary text-center">Borrar</button>
            <button class="btn btn-danger text-center">Editar</button>
            
        </th>
    </tr>`
 });