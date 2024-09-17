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


let num1;
let num2;
let operacion;
let resultado;

num1 = parseFloat(prompt("Ingrese el primer número: "));
num2 = parseFloat(prompt("Ingrese el segundo número: "));
operacion = prompt("Ingrese la operación (+, -, *, /): ");

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        alert("No se puede dividir por 0");
    }
} else {
    alert("Operación no válida");
}

alert("El resultado es: " + resultado);