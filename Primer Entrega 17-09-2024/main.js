//  ### ¿Que entra en la primer pre-entrega?
// 
// cuerda que si o si deben incluirse las siguientes sentencias y conceptos
// 
// **Variables**
//   - let
//   - const
//   - var . . . . . . . 👀❌
// **Condicionales**
//   - if + if else + else
//   - switch
// **Ciclos y bucles**
//   - for
//   - while y do while
// **Funciones**
//   - Siempre traten de usar funciones con sentido, no engloben todo el codigo en una funcion y luego la llaman una vez
//   - Y es mas, una funcion que solo se llama una vez en la vida del programa es una función innecesaria, es decir que no necesitamos a esa porción de codigo como funcion, por que las funciones nos ayudan a no repetir líneas de codigo.
//   - Como regla principal, una funcion NO esta justificada (no se justifica tenerla) cuando
//       - Se llama UNA sola vez en la vida del programa
//       - No tiene parámetros
//       - No tiene return
//       - Si cumple con los 3 puntos anteriores, entonces no necesitamos una funcion ahi!


// Funciones para las operaciones básicas


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por 0";
    }
}

// Función principal que realiza la operación
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return sumar(num1, num2);
        case "-":
            return restar(num1, num2);
        case "*":
            return multiplicar(num1, num2);
        case "/":
            return dividir(num1, num2);
        default:
            return "Operación no válida";
    }
}

// Ciclo para permitir al usuario realizar múltiples operaciones
let continuar = true;

while (continuar) {
    // Tomar los números y la operación del usuario
    const num1 = parseFloat(prompt("Ingresa un numero: "));
    const num2 = parseFloat(prompt("Ingresa otro numero: "));
    const operacion = prompt("Ingresa lo que queres hacer (+, -, *, /): ");

    // Realizar la operación y mostrar el resultado
    const resultado = realizarOperacion(num1, num2, operacion);
    alert("El resultado es: " + resultado);

    // Preguntar si el usuario quiere realizar otra operación
    continuar = confirm("¿Quieres realizar otra operación?");
}

alert("Gracias por usar la calculadora.");
