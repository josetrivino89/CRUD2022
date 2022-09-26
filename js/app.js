//* controlo que este funcionando bien el Link
console.log(`dede app.js`);
//*declaro las variables del localStorage
let ListaDeProductosLS = JSON.parse(localStorage.getItem(`Listado de Productos`))||[];
//*log para ver el resultado del LocalStorage
console.log(ListaDeProductosLS);
//*tomo el contenedor - tambien podria crear sin llamar el ID pero pasarle la estructura en la arroy funcion: 
let contenedorIndex = document.getElementById("contenedorImagenes");
//*log para ver el contenido del contenedorIndex:
console.log(contenedorIndex);
//*creamos una funcion para ir incorporando los productos:
// const crearCard =(producto)=>{
// contenedorIndex.innerHTML +=
//     `<div class="card" style="width:250px;">
//         <img src="${producto.URL}" class="card-img-top">
//             <div class="card-body">
//                 <h5 class="card-title"> ${producto.producto}</h5>
//                 <p class="card-text">Codigo: ${producto.codigo}</p>
//                 <p class="card-text">Descripcion: ${producto.descripcion}</p>
//                 <p class="card-text">Precio: U$S${producto.precio}</p>
            
//             </div>
//     </div>`;

// };
//*opcion1:creamos un for para que recorra el array y cada vez que encuentre un nuevo producto lo incorpore:
// for (let index = 0; index < ListaDeProductosLS.length; index++) {
//     const element = ListaDeProductosLS[index];
//     crearCard(element)
// }
//*opcion2: otra forma mas simple en lugar de crear un for es usar un foreach
ListaDeProductosLS.forEach(producto => {
    contenedorIndex.innerHTML +=
    `<div class="card" style="width:250px;">
        <img src="${producto.URL}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"> ${producto.producto}</h5>
                <p class="card-text">Codigo: ${producto.codigo}</p>
                <p class="card-text">Descripcion: ${producto.descripcion}</p>
                <p class="card-text">Precio: U$S${producto.precio}</p>
            
            </div>
    </div>`;
    
});