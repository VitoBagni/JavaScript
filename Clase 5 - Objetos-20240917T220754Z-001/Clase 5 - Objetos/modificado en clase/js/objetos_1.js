


// Somos un tremendo detective que tiene que interrogar a un posible sospechoso de usar var en su codigo
// Nosotros tenemos al sospechoso delante, entonces queremos preguntarle por sus caracteristicas (propiedades)
// De esta forma, si preguntamos una caracteristica existente, obtendremos una respuesta
// Si hacemos la pregunta incorrecta o sobre una caracteristica inexistente, no tendremos respuesta

let sospechoso = {
    nombre: 'Fulanito',
    edad: 42,
    dni: 390843092,
    grupo_sanguineo: 'A-',

    contacto: {
        mail: 'fulanito19xd@codermail.com',
        telefono: 49815
    },  // Ojo con esta coma! 👀

    usa_var: true,
    hijos: 10
}

console.log('Le traemos al sospechoso llamado: ' + sospechoso.nombre)

// Armamos un sistema perpetuo

while (true) {
    //              <=  'edad'
    let pregunta = prompt('Que quiere preguntarle al sospechoso?' , 'edad, nombre, dni, etc')
    // pregunta = 'edad'

    // sospechoso.'edad' ❌
    // sospechoso['edad']
    respuesta = sospechoso[pregunta]
    
    // respuesta = sospechoso[prompt('....')]
    // Si ponemos sospechoso['pregunta'] -> sospechoso.pregunta

    // Aqui deberia acceder a la caracteristica del sospechoso por la cual pregunte
    // Ahora que somos programadores, nuestra cabeza lo traduciria como
    // Ahora tengo que acceder a la propiedad del objeto 'sospechoso'
    // Pista, la variable pregunta es un string
    
    if (respuesta) {
        console.log('La respuesta a esa pregunta es ',respuesta)
    } else {
        console.log('No tenemos datos para esa pregunta')
    }

    // Recordemos que confirm devuelve un booleano
    // Si se da a aceptar da true
    // Si se da a cancelar da false
    // Si quiere seguir preguntando va a dar a aceptar --> true, entonces niego el valor para seguir preguntando
    if (!confirm('Quiere seguir preguntando?')) {
        break
    }
}

