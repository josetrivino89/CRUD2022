export class Producto {
    constructor (codigo,producto,precio,descripcion,URL){
    this.codigo = codigo;
    this.producto = producto ;
    this.precio = precio ;
    this.descripcion = descripcion ;
    this.URL = URL ;
    
 }
    get getCodigo(){
        return this.codigo
    }
    get getProducto(){
        return this.producto;
    }
    get getPrecio(){
        return this.precio;
    }
    get getDescripcion(){
        return this.descripcion;
    }
    get getURL(){
        return this.URL;
    }
    

    set setCodigo(codigo){
        this.codigo=codigo
    }
    set setProducto(producto){
        this.producto=producto 
    }
    set setPrecio(precio){
        this.precio=precio
    }
    set setDescripcion(descripcion){
        this.descripcion=descripcion
    }
    set setURL(URL){
        this.URL= URL
    }
}