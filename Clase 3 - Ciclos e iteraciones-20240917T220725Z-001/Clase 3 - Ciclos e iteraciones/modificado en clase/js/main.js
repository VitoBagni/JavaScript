


// ///////////////////////////////////////////////////
// De la clase anterior

// let alumno = prompt('Por favor ingrese el nombre del alumno').toLowerCase()

// let alumno1_nota1 = Number(prompt('Ingrese la primer nota'))
// let alumno1_nota2 = Number(prompt('Ingrese la segunda nota'))
// let nota3 = Number(prompt('Ingrese la tercer nota'))
// let nota4 = Number(prompt('Ingrese la tercer nota'))
// let nota5 = Number(prompt('Ingrese la tercer nota'))
// let nota6 = Number(prompt('Ingrese la tercer nota'))
// let nota7 = Number(prompt('Ingrese la tercer nota'))
// let nota8 = Number(prompt('Ingrese la tercer nota'))
// let nota9 = Number(prompt('Ingrese la tercer nota'))
// let nota10 = Number(prompt('Ingrese la tercer nota'))


// let promedio = (nota1 + nota2 + nota3) / 3

// console.log('El promedio de ' + alumno + ' es ' + promedio)


// num = 5
// let num = Number(prompt('Ingrese un numero'))

// for (let contador = 1 ; contador <= 10; contador++) {

// 	console.log(num + ' X ' + contador + ' = ' + (contador * num));


// }

// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4 = 20



// Ahora se pide la cantidad de notas al usuario
// Calcular el promedio de notas
// Mostrar si el usuario aprueba o no aprueba
// Si el usuario se llama Pepe directamente le ponemos un 10 (uso de toUpper/toLowerCase)


// let cantidad_notas = Number(prompt('Ingrese la cantidad de notas'))
// let suma_notas = 0

// for (let i = 1; i <= cantidad_notas; i++) {

// 	let nota = Number(prompt('Ingrese la nota ' + i))

// 	suma_notas = suma_notas + nota

// 	// console.log('Nota ingresada ' + nota);
// 	// console.log('Suma de notas ' + suma_notas);
// }

// let promedio = suma_notas / cantidad_notas


// console.log('El promedio es de ' + Math.round(promedio));


// Debemos calcular el promedio
// el promedio es la suma de las notas / cantidad de notas

// let nota1 = Number(prompt('Ingrese la primer nota'))
// let nota2 = Number(prompt('Ingrese la segunda nota'))



// Porgrama para adivinar numeros
// let numero_secreto = 8

// // For que se repite 6 veces
// for (let i = 0; i <= 5; i++) {
// 	console.log('Intento N' + i);

// 	let numero = Number(prompt('Intenta adivinar el numero secreto'))


// 	if (numero == numero_secreto) {
// 		console.log('Felicidades acertaste el numero secreto');

// 		// No necesito volver a preguntarle por el numero, termino el programa
// 		break;


// 		console.log('No vere la luz');
// 	}
// }
// aqui viene cuando lee break o deja de cumplirse la condicion


// for (let i = 0; i <= 5; i++) {

// 	console.log('Antes del continue');

// 	if ( confirm('Entrar al continue') ) {

// 		// Fuerza a js a actualizar la variable iteradora
// 		continue

// 		console.log('Soy un console.log otaku');

// 	}

// 	console.log('Despues del continue');
// }

// let condicion = true
// let numero = 0
// while (20 > numero) {

// 	// Cambio el estado de la condicion
// 	console.log('Monton de codigo');
// 	console.log('Monton de codigo');
// 	console.log('Monton de codigo');
// 	console.log('Monton de codigo');
// 	console.log('Monton de codigo');
// 	console.log('Monton de codigo');


// 	if (confirm('Quiere salir del bucle?')) {
// 		// Salimos del bucle actualizando la condicion
// 		numero = 25

// 		// Salimos usando break
// 		// break 
// 	}

// }


// let num = 0
// while (num < 20) {
// 	console.log('Iteracion N' + num);

// 	num++ // de 0 a 1, de 1 a 2, etc
// }


// For se use cuando tienen numeros
// Se sabe exactamente cuantas veces necesito que se repita


// While se usa bajo condicion
// No se sabe exactamente cuantas veces necesito que se repita


// while (true) {

// 	let numero = Number(prompt('Intena adivinar el numero'))

// 	if (numero == 10) {
// 		console.log('Felicidades, adivinaste!');

// 		break
// 	}


// }


// let edad = Number( prompt('Ingrese su edad') )

// // Verificar que evidentemente ingreso un numero
// // Obligar al usuario a que ingrese un numero
// // Mientras no ingrese un dato correcto, le sigo pidiendo el dato
// // Si o si un numero que vaya de 5 a 80


// while ( isNaN(edad) || edad <= 5 || edad >= 80) {
// 	console.log('Ingresa un numero por favor');
// 	edad = Number( prompt('Ingrese su edad que sea numerico!') )
	
// }


// // Menu interactivo
// // Ingrese 1 para esto
// // Ingrese 2 para esto otro
// // Ingrese 3 para esto otro otro



// console.log(edad);


let nombre
const PI = 3.14
let apellido

do {

	nombre = prompt('Ingrese su nombre').toLowerCase()

} while (nombre != 'pepe')


if (true) {
	// ..
}

