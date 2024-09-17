




// // Programa para validar si el alumno aprueba o no aprueba



// // Un condicional para evaluar si aprueba
// // const NUM_GANADOR = 59985
// // let num_usuario = prompt('Ingrese su numero de la loteria')

// // // Que condicion evaluo?
// // if (NUM_GANADOR == num_usuario) {
	
// // 	console.log('Ganaste la loteria');
	
// // }


// // console.log('Fin del programa');


// // Case sensitive


// // Se declara una constante que es el número ganador
// // Se pide al usuario su número de ticket
// // El programa debe decirle al usuario a través de un alert si es ganador
// // Si encima el ganador se llama Pepe le regalamos un jamon
// // Si no es ganador también debe mostrarse un mensaje


// const NUM_GANADOR = 59985
// let num_usuario = Number(prompt('Ingrese su numero de la loteria'))

// if (NUM_GANADOR == num_usuario) {
// 	// En caso de cumplirse le mostramos el alert
// 	alert('Ganaste la loteria')

// 	// nombre = 'pepe'
// 	let nombre = prompt('Ingrese su nombre')

// 	//  'pepe' == 'Pepe' --> false 
// 	if (nombre == 'Pepe') {
// 		alert('PEPEEEE, ademas te ganaste un jamon')
// 		// ... 
// 		// ... 
// 		// ... 
// 		// ...
// 	} else {
// 		alert(nombre + ' solo pepe gana jamones')
// 	}


// } else {
// 	alert('No ganaste la loteria, alpiste (con else)')
// }

// // if (NUM_GANADOR != num_usuario) {
// // 	alert('No ganaste la loteria, alpiste')
// // }


// console.log('Fin del programa');


// Llega el fin de semana pero . . . 
// let saldo = 10000; // usd

// if (saldo < 1) {
//     alert("Modo ermitaño on");
// } else if (saldo < 10) {
//     alert("Me permito una birra una noche");
// } else if (saldo < 50) {
//     alert("Que antojo de pizza que me dio");
// } else if (saldo < 200) {
//     alert("Este finde no vuelvo a casa");
// } else {
//     alert("💀");
// }

// console.log('Fin del programa');

// true && true => true
// true && false => false
// false && true => false
// false && false => false


// true || true => true
// true || false => true
// false || true => true
// false || false => false

// Si no ingresa nada, nombre = ''
// let nombre  = prompt("Ingresar nombre");

// if ((nombre != "") && ((nombre == "Pepe") || (nombre == "pepe"))) {
//     alert("Hola Pepeeeeeeee"); 
// } else{
//     alert("Error: Ingresar nombre válido");
// }


// propmt => cuadro de dialogo para escribir
// alert => cuadro de dialogo que informa
// confirm => cuadro de dialogo con dos opc

// Los valores de mayor son o true o false
// let mayor = confirm('Acepta usted ir a terrafuria con Juan Deporte?')

// // Si acepta, entonces lo mandamos a escuchar a mariano mellino
// // Si no, lo mandamos a escalar

// if (!mayor) {
// 	console.log('A escalar');
// } else {
// 	console.log('Vamos a terrafirme');
// }


// Pepe
// pepe
// PePe
// PEPE
// pepE
// ...

// Tenemos una forma de convertir los caracteres a min o mayus
// usando el .toLowerCase() -> pasar todo a min
// o el 	 .toUpperCase() -> pasar todo a mayus
// 				
//					         'Pepe'.toLowerCase()
let nombre = prompt('Ingrese su nombre por favor').toLowerCase()
// nombre = nombre.toLowerCase()

if (nombre == 'pepe') {
	console.log('Te ganaste un jamon, grande pepe');
} else {
	console.log('No te llamas pepe, lo siento, anda a terrafirme');
}