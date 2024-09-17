




// Armamos un objeto notebook
let notebook_original = {
    marca: 'Lenovo',
    color: 'negro',
    OS: 'Windows 10',
    funciona: true,
    procesador: 'Intel I7'
}


// let notebook_copia = {
//     marca: 'Asus',
//     color: 'blanco',
//     OS: 'Windows 10',
//     funciona: true,
//     procesador: 'Intel I7'
// }

// Queremos armar otro objeto identico en propiedades (estructura), 
// pero . . . . nos da pereza copiar y pegar lineas asi que
// meto en una variable el objeto original
let notebook_copia = notebook_original

// Almacena los objetos de forma especial en las variables
// Objeto es una cosa compleja, si copiamos usando =
// darle al mismo objeto otro nombre
// pero objeto hay uno solo



// Le cambio las propiedades a mi gusto, entonces 
// tengo una notebook con las mismas propiedades pero
// valores diferentes
notebook_copia.OS = 'Linux'      // sistema operativo es linux
notebook_copia.color = 'gris'    // el color de la nb es gris

// Y muestro los objetos
console.log('Notebook original 👇')
console.table(notebook_original)


console.log('\n\nNotebook copia 👇')
console.table(notebook_copia)    







