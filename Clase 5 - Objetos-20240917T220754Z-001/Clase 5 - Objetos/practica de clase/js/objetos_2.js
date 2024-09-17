




// Armamos un objeto notebook
let notebook_original = {
    marca: 'Lenovo',
    color: 'negro',
    OS: 'Windows 10',
    funciona: true,
    procesador: 'Intel I7'
}

// Queremos armar otro objeto identico en propiedades (estructura), 
// pero . . . . nos da pereza copiar y pegar lineas asi que
// meto en una variable el objeto original
let otra_notebook = notebook_original

// Le cambio las propiedades a mi gusto, entonces 
// tengo una notebook con las mismas propiedades pero
// valores diferentes
otra_notebook.OS = 'Linux'      // sistema operativo es linux
otra_notebook.color = 'gris'    // el color de la nb es gris

// Y muestro los objetos
console.log('Notebook original 👇')
console.table(notebook_original)


console.log('\n\nNotebook copia 👇')
console.table(otra_notebook)    







