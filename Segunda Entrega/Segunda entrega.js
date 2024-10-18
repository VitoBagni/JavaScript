// Función para generar una contraseña
function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let contraseña = '';

    // Bucle para crear la contraseña
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }

    return contraseña;
}

// Función principal para pedir la longitud de la contraseña y mostrarla
function main() {
    const longitud = parseInt(document.getElementById('longitud').value);

    // Validación simple usando un condicional
    if (longitud < 8 || longitud > 16 || isNaN(longitud)) {
        document.getElementById('resultado').innerText = 'La longitud debe estar entre 8 y 16 caracteres.';
        return;
    }

    const contraseña = generarContraseña(longitud);
    document.getElementById('resultado').innerText = contraseña;
}
