/**
 * En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.
 * 
 * Teniendo en cuenta cómo funciona el hoisting, podemos llamar a una función y definirla más abajo, porque automáticamente JS la “subirá”.
 */




// Variables globales
let variable01 = true
let variable02 = 'Hola'

// Funciones

// Variables
// Las variables deben declararse antes de ser utilizada, si no se crea (undefined)

// Para una buena practica en TODOS los proyectos, la declaración de variables "globales" debe de estar al inicio del código.

// Funciones
// Una función se pude llamar antes de ser declarada y es correcto.
// Las funciones que tienen variables en su interior que no han sido previamente declaradas, nos van a dar un resultado de 'undefined'
// Las funciones también tienen que declararse al inicio como una buena práctica y por debajo de las variables globales

//A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas let y function.

//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.