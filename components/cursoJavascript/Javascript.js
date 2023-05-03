/* const miSustantivo = "perro";
const miAdjetivo = "negro";
const miVerbo = "corrió"
const miAdverbio = "rápidamente"

const fraseCompleta = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda."
console.log(fraseCompleta)
console.log(fraseCompleta.length)

var Mi = "lentamente"
var mi = "bicicleta"
var Car = "La"
var fr = "voló"
var segundafrase = Car + " " + mi +" pequeña ";

var terceraFrase = segundafrase + " " + fr + " " + "a la tienda " + Mi + ".";
console.log(terceraFrase)


let estaciones = ["invierno", "otoño", "primavera"]
estaciones.push("verano"); //agregar al final del arreglo a la cadena
console.log(estaciones)

estaciones.pop(); // remover el ultimo arreglo
console.log(estaciones)

season = estaciones.pop(estaciones)
console.log(season)

estaciones.shift();
console.log(estaciones) //remover el primer arreglo

estaciones.unshift("primavera"); // agregar al principio del arreglo 
console.log(estaciones)

//funciones de los arreglos (push) agregar al final, (pop) remover el ultimo arreglo, (shift) remover el primer arreglo, (unshift) agregar al principio del arreglo.

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]]
//cereral
console.log("Voy a comprar "+ miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".")
//leche
console.log("voy a comprar " + miListaDeCompras[1][1] + " unidedes de " + miListaDeCompras[1][0] + "." )
//galletas
console.log("voy a comprar " + miListaDeCompras[2][1] + " unidedes de " + miListaDeCompras[2][0] + "." )
//pan
console.log("voy a comprar " + miListaDeCompras[3][1] + " unidedes de " + miListaDeCompras[3][0] + "." )
//refresco
console.log("voy a comprar " + miListaDeCompras[4][1] + " unidedes de " + miListaDeCompras[4][0] + "." )
//pollo
console.log("voy a comprar " + miListaDeCompras[5][1] + " unidedes de " + miListaDeCompras[5][0] + "." )

 */
/*function mostrarMensaje() {
    console.log("Hola, Mundo");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();*/

/* function sumar(a, b) {
     var suma = a + b;
     console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(8, 9);
sumar(4, 5);
sumar(9, 4);
sumar(4, 8);

var x = 5;
var y = 3;
sumar(x, y)

function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar"); */

//Varaibles globales y locales

/* var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion(){
console.log(miVariableGlobal);
}

miFuncion();
console.log(miVariableGlobal);

//variable Local

function miFuncion(){
    var miVariableLocal = 4; //varaible dentro de la funcion es una variable no se puede llamar por fuera *ReferenceError*
    console.log(miVariableLocal)
}

miFuncion();
console.log(miVariableLocal); */

/* var miNombre = "Nora";

function mostrarMiNombre(){
    var miNombre = "Gino";
    console.log(miNombre)
}
mostrarMiNombre();

console.log(miNombre); */

/* function sumar(a, b){
    return a + b;
}
console.log(sumar(5,3));
 */

/* function sumar(a, b){
    return a + b;
}
var resultado = sumar(5, 3);
console.log(resultado)
let result = sumar(894, 900)
console.log(result)
 */
/* 
function crearCadenaConMeta(lenguajeDeProgramacion){
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("Javascript");

console.log(miMeta) // Como agregar valor retornado a una variable */

//queu estrucutura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

//Define una funcion proximo En LaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento que fue removido.

/* function proximoEnLaFila(arr, elem){
    arr.push(elem); // agregar al final del arreglo
    return arr.shift();    //remover el primer elemento
    
}
var miArr = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArr)); //JSON.stringfy: Nos permite ver el arrglo antes y despues del arreglo

console.log(proximoEnLaFila(miArr, 6));

console.log("Después: " + JSON.stringify(miArr)); */

//valoresBooleanos True . False

/* console.log(5 == 5); // return true
console.log(5 == 6); // return flase  */

//operadorDeIgualdadEstricta

/* console.log(9 === 9) //true son el mismo tipo de dato
console.log(9 === "9") //False no son el mismo tipo de dato 
 */

/* var a;
var b;

a = 5;
b = 5;

console.log(a == b); // true

console.log(a === b); //true

b = 8;

console.log(a == b); //false
 console.log(a === b); // false

b = "5";
console.log(a == b); //true
console.log(a === b); //false
 */


//operadorDeDesigualdad

/* console.log(9 != 6); //true != distinto de 

console.log(9 != 9); // false 
 */

//operadorDeDesigualdadEstricta

/* console.log(1 !== 1); //false
console.log(1 !== "1") //true
 */

//operadorMayorQue

/* console.log(6 > 9); //false
console.log(9 > 6); //true
console.log("B" > "A"); // true
console.log("ACB" > "ABC"); //true
console.log("AB" > "A"); //true
 */

/* var a = 15;
var b = 7;
console.log(a >b); //true
console.log(b > a); //false
 */

//mayorIgualQue

/* console.log(5 > 5); // false
console.log(5 >= 5); //true
 */

//menorQue
/* console.log(5 < 6); // true
console.log("A"< "B"); //true
console.log("B" < "A") //false

 */

//menorIgualQue

/* console.log(5 <= 5 ); //true
 */

//operadorLogico

/* TABLA DE VERDAD DEL OPERADOR AND &

|  X  |  Y  |  X && Y  |
------------------------
|  T  |  T  |    T     |
|  T  |  F  |    F     |
|  F  |  T  |    F     |
|  F  |  F  |    F     |
------------------------

LA EXPRESION ES SOLO VERDADERA CUANDO AMBOS VALORES SON VERDADEROS
*/

/* var a = 8;
console.log((a > 5) && (a < 10)); // true

var b 
console.log((b > 5) && (b < 10)); //false
*/

//operadorLogicoOr

/* TABLA DE VERDAD DEL OPERADOR OR ||

|  X  |  Y  |  X || Y  |
------------------------
|  T  |  T  |    T     |
|  T  |  F  |    T     |
|  F  |  T  |    T     |
|  F  |  F  |    F     |
------------------------
* LA EXPRESION ES VERDADERA SI ALGUNO DE LOS DOS OPERANDOS O AMBOS SON VERDADEROS*  
*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var a = 8;
console.log((a < 5) || (a > 15)); //
console.log((a > 5) || (a > 15));
