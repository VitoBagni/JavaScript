


// Armar un sistema para un profesor de matemáticas que quiere tomar examen a 2 alumnos diferentes
// Se pide el nombre del alumno
// Se le pregunta por el área de un cuadrado según el lado
// Se muestra si el alumno contestó bien


// Un programa sin funciones seria tal como

// let lado_1 = 1 // pregunta para el alumno 1
// let lado_2 = 2 // pregunta para el alumno 2

// // Pregunta a alumno 1 ////////////////////////////////////////
// let alumno = prompt('Ingrese su nombre por favor')
// let respuesta_alumno = Number(prompt('Cual es el area de un cuadrado cuyo lado mide ' + lado_1))
// let calculo = lado_1 * lado_1

// if (calculo == respuesta_alumno) {
//     console.log('Excelente ' + alumno + ', aprobaste!')
// } else {
//     console.log('Para nada excelente ' + alumno + ', desaprobaste!')
// }


// // Pregunta a alumno 2 ////////////////////////////////////////
// alumno = prompt('Ingrese su nombre por favor')
// respuesta_alumno = Number(prompt('Cual es el area de un cuadrado cuyo lado mide ' + lado_2))
// calculo = lado_2 * lado_2

// if (calculo == respuesta_alumno) {
//     console.log('Excelente ' + alumno + ', aprobaste!')
// } else {
//     console.log('Para nada excelente ' + alumno + ', desaprobaste!')
// }




// A cada alumno le pregunto cosas diferentes
// for (let i = 0; i < 4; i++) {
//     alumno = prompt('Ingrese su nombre por favor')
//     respuesta_alumno = Number(prompt('Cual es el area de un cuadrado cuyo lado mide ' + lado_2))

//     if (calculo == respuesta_alumno) {
//         console.log('Excelente ' + alumno + ', aprobaste!')
//     } else {
//         console.log('Para nada excelente ' + alumno + ', desaprobaste!')
//     }
// }


// ALGUNAS PREGUNTAS . . .
// Que pasa si no son 2 alumnos y son 4?
// Por que no se puede usar un for? 🤔


// Armar mismo programa pero con funciones 👇👇👇👇👇👇

let pais_1 = 'Argentina'
let cap_1 = 'Buenos Aires'

let pais_2 = 'Uruguay'
let cap_2 = 'Montevideo'


function quizz(pais, capital) {
    let nombre = prompt('Ingrese su nombre por favor')
    let respuesta_alumno = prompt('Cual es la capital de ' + pais + '?').toLowerCase()


    if (respuesta_alumno == capital.toLowerCase()) {
        console.log('Excelente ' + nombre + ', aprobaste!')
        
        // Pasemos a la sig pregunta / Hacer otra pregunta
        quizz('Canada', 'Otawa')



    } else {
        console.log('Para nada excelente ' + nombre + ', desaprobaste!')
    }
}

// quizz(pais_1, cap_1)


quizz('Argentina', 'Buenos Aires')
quizz('Uruguay', 'Montevideo')

alert('sadkjalskdjakjd')

alert('oifjewioer')