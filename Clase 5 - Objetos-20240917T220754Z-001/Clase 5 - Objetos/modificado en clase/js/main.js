



// let auto = {
// 	marca: 'BMW',   // propiedad marca -> BMW
// 	modelo: '330i',	
// 	precio: 140000,
// 	funciona: true,
// 	conductor: {
// 		nombre: 'Pepe',
// 		dni: 1234567,
// 		viajes: 300
// 	}
// }

// let auto1_marca = 'BMW'
// let auto1_modelo = 'BMW'
// let auto1_precio = 'BMW'
// let auto1_funciona = 'BMW'
// let auto1_conductor_nombre = 'BMW'


// let auto2 = {
// 	marca: 'fiat',   // propiedad marca -> BMW
// 	modelo: '600',	
// 	precio: 14000,
// 	funciona: false
// }

// console.log(auto);
// console.log(auto2);


// let alumno = {
// 	nombre: 'Pepe',
// 	promedio: 11,
// 	edad: 100,
// 	cursando: true,
// 	materias : {
// 		materia1: 'Matematica',
// 		materia2: 'Algebra'
// 	}
// }


// let auto = {
// 	marca: 'BMW',   // propiedad marca -> BMW
// 	modelo: '330i',	
// 	precio: 140000,
// 	funciona: true,
// 	conductor: {
// 		nombre: 'Pepe',
// 		dni: 1234567,
// 		viajes: 300
// 	}
// }

// console.log(auto)
// // Accesor punto
// console.log(auto.precio)
// console.log(auto.marca)
// console.log(auto.km)
// console.log(auto.conductor.nombre);

// // Accesor corchetes []
// console.log(auto['precio'])
// console.log(auto['funciona'])
// console.log(auto['km'])
// //			(auto.conductor)['nombre']
// console.log(auto['conductor']['nombre'])

// // Mezclando
// console.log(auto['conductor'].nombre)



// console.table(auto)


// let auto = {
// 	marca: 'BMW',   // propiedad marca -> BMW
// 	modelo: '330i',
// 	precio: 140000,
// 	funciona: true,
// 	conductor: {
// 		nombre: 'Pepe',
// 		dni: 1234567,
// 		viajes: 300
// 	}
// }


// console.log('marca' in auto);
// console.log('motor' in auto);

// for (let i = 0; i < 5; i ++)
// i no toma un valor numerico -> toma el nombre de las propiedades del objeto

//   let propiedad en el objeto
// for (let propiedad in auto) {

// 	// console.log(propiedad);
// 	// 1a iteracion => propiedad = 'marca'
// 	// 2a iteracion => propiedad = 'modelo'
// 	// 3a iteracion => propiedad ='precio'
// 	// 4a iteracion => propiedad ='funciona'
	
// 	console.log(propiedad + ' = ' + auto[propiedad]);
// 	//								auto['marca']
// 	//								auto['modelo']
// 	//								auto['precio']
// 	//								auto['funciona']
	

// }


// const persona = {
// 	nombre: 'Pepe',
// 	edad: 100
// }

// console.log(persona);

// persona.nombre = 'Jose'
// persona.vive = true
// // persona = 123


// console.log(persona)

// let notebook1 = {
//     marca: 'Lenovo',
//     color: 'negro',
//     OS: 'Windows 10',
//     funciona: true,
//     procesador: 'Intel I7'
// };

// let notebook2 = {
//     marca: 'Lenovo',
//     color: 'negro',
//     OS: 'Windows 10',
//     funciona: true,
//     procesador: 'Intel I7'
// };

// let notebook3 = {
//     marca: 'Lenovo',
//     color: 'negro',
//     OS: 'Windows 10',
//     funciona: true,
//     procesador: 'Intel I7'
// }

let auto

// Nombre de la class siempre con Mayus inicial y en singular
class Auto {
	constructor(marca, modelo, precio, color) {
		this.marca = marca
		this.modelo = modelo
		this.precio = precio

		// ... ?
		// if?
		if (color.toLowerCase() == 'rojo') {
			this.estilo = 'Alto'
		} else {
			this.estilo = 'Bajo'
		}
	}


	/*function*/ tocar_bocina() {
		console.log('Piiiip');
	}
}

//					( marca, modelo, precio)
let auto1 = new Auto('Fiat','600',20000, 'Rojo')
let auto2 = new Auto('BMW','330i',10000, 'Negro')
let auto3 = new Auto('Ferrari','LaFerrari',3000, 'Azul')
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)
// let auto3 = new Auto('Ferrari','LaFerrari',3000)

console.table(auto1)
console.table(auto2)
console.table(auto3)


// Usamos objetos literales cuando son pocos y diferentes en estructura (propiedades)


// Usamos clases cuando son muchos objetos iguales en estructura