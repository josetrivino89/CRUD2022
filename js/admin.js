class Producto {
    constructor (codigo,producto,precio,descripcion,URL){
    this.codigo = codigo;
    this.producto = producto ;
    this.precio = precio ;
    this.descripcion = descripcion ;
    this.URL = URL ;    
 }
}

console.log(`desde admin.js`);
/* importo la clase producto desde la interface*/
//* import {Producto} from "../Interface/producto.js";



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
   //*utilizo window.location.reload para actualizar la pagina
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
    return tBodyListaProducto.innerHTML +=
    `<tr>
        <th class="text-center">${producto.codigo}</th>
        <th class="text-center">${producto.producto}</th>
        <th class="text-center">${producto.descripcion}</th>
        <th class="text-center">u$s:${producto.precio}</th>
        <th class="text-center">${producto.URL}</th>
        <th class="text-center">
            <button class="btn btn-primary text-center" onclick="borrarProducto(${producto.codigo})">Borrar</button>
            <button class="btn btn-danger text-center">Editar</button>
            
        </th>
    </tr>`
 });
 //*tengo q pasarle si o si al evento onclick el parametro para que la funcion se asocie al codigo, solo asi sabra a que codigo hace referencia cada producto*//

//*creamos una funcion para borrar un producto:*//
 const borrarProducto = (codigo) => {
    console.log(codigo);
    //*para borrar un producto debo filtar el array y devolverlo sin el producto, para ello necesito el codigo para vincularlo, para eso usamos el metodo filter:
    const arrayFiltrado = arrayProducto.filter(producto =>{
        //*utilizamos el metodo toString ya que el array esta en formato string , el metodo tostring transforma un numero en string y lo vuelve comparable:
        return producto.codigo !== codigo.toString()
    })
    console.log(arrayFiltrado);
    //* ahora cambio mi arrayproducto por el nuevo arrayfiltrado, es decir lo reemplazo:*//
    arrayProducto = arrayFiltrado;
    //* ahora necesito enviar el nuevo array a JSON:*//
    localStorage.setItem(`Listado de Productos`,JSON.stringify(arrayProducto))
    //*actualizo la pagina para cargar los cambios
    window.location.reload()

 }