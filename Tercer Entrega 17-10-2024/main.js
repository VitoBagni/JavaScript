// Función para generar una contraseña
function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let contraseña = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }

    return contraseña;
}

// Función para guardar la contraseña en localStorage
function guardarContraseña(contraseña) {
    localStorage.setItem('ultimaContraseña', contraseña);
}

// Función para manejar el evento de generar contraseña
function generarEvento() {
    const longitud = parseInt(document.getElementById('longitud').value);

    if (longitud < 8 || longitud > 16 || isNaN(longitud)) {
        mostrarMensaje('La longitud debe estar entre 8 y 16 caracteres.', 'error');
        return;
    }

    const contraseña = generarContraseña(longitud);
    document.getElementById('resultado').innerText = contraseña;
    guardarContraseña(contraseña);
    mostrarMensaje('Contraseña generada correctamente!', 'exito');
}

// Función para borrar la contraseña almacenada
function borrarEvento() {
    document.getElementById('resultado').innerText = '';
    localStorage.removeItem('ultimaContraseña');
    mostrarMensaje('Contraseña borrada.', 'exito');
}

// Función para mostrar mensajes al usuario
function mostrarMensaje(mensaje, tipo) {
    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.innerText = mensaje;
    
    if (tipo === 'error') {
        mensajeElemento.classList.add('error');
        mensajeElemento.classList.remove('exito');
    } else {
        mensajeElemento.classList.add('exito');
        mensajeElemento.classList.remove('error');
    }
}

// Agregar eventos a los botones
document.getElementById('generarBtn').addEventListener('click', generarEvento);
document.getElementById('borrarBtn').addEventListener('click', borrarEvento);

// Cargar la última contraseña guardada al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const ultimaContraseña = localStorage.getItem('ultimaContraseña');
    if (ultimaContraseña) {
        document.getElementById('resultado').innerText = ultimaContraseña;
    }
});
