
let id = 0

// Tenemos la siguiente clase Producto para instanciar objetos del tipo Producto
// Recordemos que es mucho mas comodo tener una class cuando tratamos con varios objetos
// que van a tener las mismas caracteristicas 
class Producto {
    constructor(nombre,precio,stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock

        this.id = id++
    }
}

// Armar el array productos con objetos de la class Producto
let productos = []


// Verificar si los productos tienen stock





// Redondear los precios de los productos




// Agregar X productos nuevos al sistema (el usuario elige cuando deja de agregar productos)
