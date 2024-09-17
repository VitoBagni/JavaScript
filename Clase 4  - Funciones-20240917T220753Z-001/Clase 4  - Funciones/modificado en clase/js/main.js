

// edad = 10

// let edad

// declaracion de la funcion


// function saludar() {
// 	console.log('Hola Gustavo');

// 	// Lo que queramos que suceda cada vez que llamamos a la fn
// 	// ... 
// 	// ...
// }


// saludar()




// function saludar_gonzalo() {
// 	console.log('Hola Gonzalo');
// }

// function saludar_gustavo() {
// 	console.log('Hola Gustavo');
// }

// function saludar_milena() {
// 	console.log('Hola Milena');
// }


// function saludar(nombre) {
// 	nombre = 'Pepe'
// 	console.log('Hola ' + nombre);
// 	//			 Hola	   123
// }

// saludar('Pepe')

// saludar('Messi')

// saludar(123)

// saludar(true)



// function saludar(nombre, apellido) {
// 	console.log('Hola ' + nombre + ' ' + apellido)
// }

// saludar('Don')

// saludar('Don', 'Pepe')

// saludar(123, true)


// saludar('Messi', 'Lionel')

// function resta(num1, num2) {
// 	console.log(num1 - num2);
// }


// resta(1, 2)

// resta(2, 1)


// function saludar(nombre) {
// 	console.log('Hola ' + nombre);


// 	return 'Hola Pepe'
// }



// function suma(num1, num2) {
// 	let resultado = num1 + num2

// 	return resultado


// }


// console.log( suma(5, 10) );
// // console.log( 5 + 10 )

// suma(2,2)



// Funcion que sirve para aplicar un descuento
// function aplicaDescuento()
function aplica_descuento(precio, descuento) {

	if (descuento < 0 || descuento > 100) {
		alert('Por favor, que el descuento este entre 0 y 100')
		return precio

		console.log('No vere la luz!')
	}

	let precio_descontar = (descuento/100) * precio


	return precio - precio_descontar

	// return precio - (descuento/100) * precio


}


let camisa = aplica_descuento(5000, 20)
let pantalon = aplica_descuento(1000, 30)
let zapatilla = aplica_descuento(3000, 5)

console.log(camisa);
console.log(pantalon);
console.log(zapatilla);


// 1 para comprar coca cola
// 2 para comprar fanta
// 3 para comprar fernet

// Ingrese un num
// pedir_num(texto, 1, 3) -> validar que sea un numero Y que el numero este entre 1 y 3