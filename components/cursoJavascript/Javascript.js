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

/* console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var a = 8;
console.log((a < 5) || (a > 15)); //false

console.log((a > 5) || (a > 15)); //true

 */
//Tabla de verdad del operador NOT
//Para: !X

/*
|  X  |  !X  |
--------------
|  T  |  F   |
|  F  |  T   |
--------------
*/

/* console.log(!true);
console.log(!false);

var a = 8 ;
console.log((!(a > 5)));// !false > true, tenemos una negacion del valor verdadero ya que a = 8 es mayor que 5.

console.log(!(a < 5)); //  !true  > false, tenemos una negacion del valor verdadero ya que a = ( es mayor que 5) */

// CONDICIONALES *****

/* IF () { } */

/* if (true) {
    console.log("La condicion es verdadera.");

} */

/* var x = 5;
if (x > 2) {
    console.log("La condición es verdadera.")
} */

/* var estacion = "Invierno"

if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno.")
}

*/

//ELSE*****

/* if (true) {
    console.log("La condición es verdadera.")
} else {
    console.log("La condición es falsa.")
} */

/* var x = 5; 
if (x > 2) {   // La condición es verdadera.
    console.log("La condición es verdadera.")
} else {
    console.log("La condición es falsa.")
} 
var x = 5; //  La condición es falsa.
if (x < 2) {
    console.log("La condición es verdadera.")
} else {
    console.log("La condición es falsa.")
}  */

/* var estacion = "Invierno"; // VERDADERA
if (estacion === "Invierno") {
    console.log("La condición es verdadera.")
} else {
    console.log("La condición es falsa.")
}
var estacion = "Verano"; // FALSA
if (estacion == "Invierno") {
    console.log("La condición es verdadera.")
} else {
    console.log("La condición es falsa.")
} */

//ELSE IF******

/* function clasificarValor(valor){
    if (valor % 2 == 0){
        console.log("Divisible entre 2.")
    } else if (valor % 3 == 0){
        console.log("Divisible entre 3.")
    } else {
        console.log("No es divisible entre las opciones.")
    }
}
    clasificarValor(2);
    clasificarValor(15);
    clasificarValor(7); */
//CONDICONALES ORDEN LOGICO
/* function clasificarValor(valor){
    if (valor < 5){
        console.log("Menor que 5");
    } else if (valor < 10){
        console.log("Menor que 10");
    } else {
        console.log("Mayor o igual que 10");
    }
}
clasificarValor(2);
clasificarValor(7);
clasificarValor(15); */

/* function interpretarIMC(IndiceDeMasaCorporal){
    if (IndiceDeMasaCorporal< 18.5){
        console.log("Bajo de peso.")
    } else if (IndiceDeMasaCorporal <= 24.9){
        console.log("Normal")
    } else if (IndiceDeMasaCorporal <= 29.9){
        console.log("Sobre Peso")
    } else {
        console.log("Obeso")
    }
}
interpretarIMC(10)
interpretarIMC(19)
interpretarIMC(25)
interpretarIMC(30)
 */


// Codigo De Golf

/* En el juego de golf cada joyo tiene un par que representa el numero promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.
Hay un nombre diferente dependiendo de que tan por encima o por debajo del par estén tus golpes.
Tu funcion tomará los argumentos par y golpes.
Retorna la cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor prioridad: 
GOLPES          RETORNAR
------------------------
1               "HOLE-IN-ONE!"
<= par - 2      "EAGLE" 
par -  1        "BIRDIE"
par             "Par"
par + 1         "Bogey"             
par + 2         "Double Bogey"
>= par + 3      "Go Home!"
par y golpes siempre serán numericos y positivos.
*/

/* function puntajeDeGolf(par,golpes){
    if (golpes == 1){
        return "HOLE IN ONE!";
    } else if (golpes <= par - 2) {
        return "EAGLE";
    } else if (golpes == par){
        return "par";
    } else if (golpes == par -  1){
        return "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home!"
    }
}
console.log(puntajeDeGolf(4, 1))
console.log(puntajeDeGolf(3, 2))
console.log(puntajeDeGolf(4, 5))
console.log(puntajeDeGolf(6, 8))
console.log(puntajeDeGolf(8, 6))
console.log(puntajeDeGolf(10, 13))
console.log(puntajeDeGolf(10, 10)) */

//SENTENCIAS SWITCH

/* function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta ="gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}
console.log(clasificarValor(1))
console.log(clasificarValor(2))
console.log(clasificarValor(3))
console.log(clasificarValor(4)) */

/* var producto = "hamburguesa"
switch (producto) {
    case "pizza":
        console.log("la pizza básica cuesta $10.55")
    break;
    case "hamburguesa":
        console.log("la hamburguesa cuesta $6.78")
        break;
    case "helado":
        console.log("el helado cuesta $2.8")
        break;
}
 */

//opcionPredeterminadaALaSentenciaSwitch

/* function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma(1))
console.log(seleccionarIdioma(2))
console.log(seleccionarIdioma(3))
console.log(seleccionarIdioma()) //Predeterminado
*/

/* function clasificarVolumen (valor) {
    var volumen;
    switch (valor) {
        case 1: 
        volumen = "bajo";
        break;
        case 2:
            case 3:
                volumen = "Intermedio";
                break;
                case 4:
                case 5:
                case 6:
                    volumen = "alto";
                    break;
    }
    return volumen;
}
console.log(clasificarVolumen(1))
console.log(clasificarVolumen(2))
console.log(clasificarVolumen(3))
console.log(clasificarVolumen(4))
console.log(clasificarVolumen(5))
console.log(clasificarVolumen(6)) */


//Reemplazar if...else con switch

/* function seleccionarIdioma(valor) {
    var idioma;
    if (valor == 1) {
        idioma = "Español";
    } else if (valor == 2) {
        idioma = "Frances";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Ingles";
    }
    return idioma;
} */

/* function seleccionarIdioma(valor) {
    var idioma;
    switch(valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma()) // default
console.log(seleccionarIdioma(1))
console.log(seleccionarIdioma(2))
console.log(seleccionarIdioma(3)) */

/* function esMenorQue(a, b){
    if (a < b) {
        return true;
    } else { 
        return false;
    }
}
console.log(esMenorQue(45, 50)) // esta funcion simplificada seria:
 */
/* function esMenorQue(a, b) {
    return a < b;
}
console.log(esMenorQue(45, 50))
console.log(esMenorQue(45, 5))
 */

//propiedadesDeObjetos 

/* var miPerro = {
    "nombre": "coco",
    "edad": 5,
    "peso": 6,
    "raza": "tacita de té"
};

console.log(miPerro.nombre);//asi se accede a las propiedades de los objetos. el nombre de la var seguido de un punto la propiedad.
 */

/* var myBook = {
    "color": "verde",
    "categoria": 3,
    "número de paginas": 200,
    "número de hojas": 100
};
console.log(myBook["número de hojas"])//usamos los corchetes cuando tenemos propiedades separadas por espacio *número de paginas-número de hojas*
 */

//ACCEDER A PROPIEDADES: VARIABLES

/* var resultados = {
   1: "nora26",
   2: "gino577",
   3: "estef543",
   4: "kiara566"
};
var posicion = 4;
console.log(resultados[posicion]);
 */

//ACTUALIZAR_PROPIEDADES
/* 
 var mochila ={
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
 };

 console.log(mochila.color)//azul
 mochila.color = "verde"
 console.log(mochila.color)//seActualizaElColorAlQueModificamos"verde"

 console.log(mochila.contenido)
 mochila.contenido.push("lapíz");
console.log(mochila.contenido) */

//AGREGAR_PROPIEDADES
/* 
var curso = {
    "titulo": "Aprende Javascript desde cero.",
    "idioma": "Español",
    "duracion": 9
};
curso.vistas = 23423476
console.log(curso.vistas) */

//EliminarUnaPropiedad

/* var curso = {
    "titulo": "Aprende Javascript desde cero.",
    "idioma": "Español",
    "duracion": 9
};
curso.vistas = 23423476
console.log(curso)
delete curso.duracion;
console.log(curso.duracion)
console.log(curso) */

//VERIFICAR_PROPIEDADES

/* var curso = {
    "titulo": "Aprende Javascript desde cero.",
    "idioma": "Español",
    "duracion": 9
};
console.log(curso.hasOwnProperty("titulo"))//true
console.log(curso.hasOwnProperty("categoria"))//false
console.log(curso.hasOwnProperty("duracion"))//true */

/* function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad";
    }
}                                                       //Funcion para verificar si el objeto tiene o no la propiedad.

var curso = {
    "titulo": "Aprende Javascript desde cero.",
    "idioma": "Español",
    "duracion": 9
};

console.log(verificarPropiedad(curso,"duracion"))
console.log(verificarPropiedad(curso,"categoria"))
 */

/* function actualizarDiscos(discos, id, propiedad, valor){
    if (valor == "") {
        delete discos[id][propiedad];       
    } else if (propiedad === "canciones") { 
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}   

var coleccionDeDiscos = {
    7853: {
        tituloDelALbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

console.log(coleccionDeDiscos[7853].tituloDelALbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelALbum)
console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma mia");
console.log(coleccionDeDiscos[5439].canciones)
console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista) */

//CICLO_WHILE 
/* 
 var i = 0; // la variable i es igual a 0
 while (i <= 3) { //while es nuestro ciclo en español significa "mientras" entonces mientras que la condicion se cumpla i menor o igual a 3 se muestra el mensaje Hola, Mundo! 
    console.log("Hola, Mundo!")
    i++;// incrementamos la variable para que por logica del programa no se repita indefinidamente 
 } */

/*  var miArr = []; // var miArr es un arreglo vacio 
 var i = 0; // var i es igual a =
  
 console.log(miArr); // comprobamos en la consola

 while (i < 10) { // mientras la variable i sea menor a 10 
    miArr.push(i); // la condicion es que agregamos a la variable i mientras se cumpla la condicion de que sea menor al llegar a 10 finaliza la funcion
    i++;//IMPORTANTE!! INCREMENTAR LA VARIABLE PARA QUE NO SE REPITA INFINIDAD DE VECES
}
console.log(miArr)
 */

/* var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
    numeros.pop();
}
console.log(numeros) */

// CICLO_FOR
/* var myArr = [];

for (var i = 0; i < 10; i += 2) {
    myArr.push(i);
}
console.log(myArr); */

/* var miArreglo = []; // DEFINIMOS UN ARREGLO

for (var i = 1; i < 50; i += 2 ){ // FOR ES EL CICLO i = 0 SE INICIA LA VARIABLE, i < 20 ES LA CONDICION VERDADERA PARA EL CICLO; i += 2 LA USAMOS PARA MOSTRAR LOS NUMEROS IMPARES HASTA EL 19
    miArreglo. push(i); // agregamos push para cada numero mas desde 1
}
console.log(miArreglo) */

/* var miArreglo = [] // Tenemos los numeros impares del 1 hasta el 20
for (var i = 1; i < 20; i += 2) 
miArreglo.push(i); 
console.log(miArreglo) */ 

// CICLOS_FOR_PARA_CONTAR_HACIA_ATRAS



/* for (var i = 15; i >= 10; i--){
    console.log(i)
} */


/* var miArreglo = [];
 for (var i = 50; i > 0; i -= 2) {
    miArreglo.push(i);
 }
 console.log(miArreglo) */

 //ITERAR_CON_LOS_CICLOS_FOR

 /* var miArreglo = [4, 6, 8, 2];
 var total = 0;

 for (var i = 0; i < miArreglo.length; i ++) {
    total += miArreglo[i];

 }
 console.log(total ) */

 /* var lenguajes = ["JavaScript", "Python", "Java", "C++"];
 
 for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());//.toUpperCase() modifica las cadenas de texto a mayuscula
 } */

 /* function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total
 }
 console.log(contarNumerosPares([10, 6, 1, 2])) */
 
 //CICLOS_ANIDADOS
/* 
 var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

 for (var i = 0; i < miArreglo.length; i++) {
    var arregloAnidado = miArreglo[i];
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j])
    }
 }
 */


 //DO_WHILE

 // Para esto sirve un ciclo DO While cuando el usuario ingrese un valor le oedimos que ingrese un valor y con while lo verificamos 

 /* var x;
 x = 16;
  do {
    console.log(x);
    x++;
 } while (x < 20);// se muestran los numeros del 16 al 19 */

 // MINI_PROYECTO_VERIFICAR_CONTACTOS
/* 
 var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violin"]
    }
 ]

 function buscarPerfil(nombre, propiedad){
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre){
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no esta en la lista."
 }
 console.log(buscarPerfil("Harry", "direccion"));
  */

 //NUMEROS_ALEATORIOS

 /* function generarFraccionAleatoria(){ 
    return Math.random(); // Entre 0 y 1 pero el 1 no esta dentro de los resultados 
 }

 console.log(generarFraccionAleatoria())
 console.log(generarFraccionAleatoria())
 console.log(generarFraccionAleatoria())
 console.log(generarFraccionAleatoria())
 console.log(generarFraccionAleatoria())
 console.log(generarFraccionAleatoria())

 console.log(Math.random())

 var numeroALeatorio = Math.random

 console.log(numeroALeatorio()) */

 /* var numeroALeatorioEntre0y19 = Math.floor(Math.random() * 20);
 console.log(numeroALeatorioEntre0y19) */

 /* function generarEnteroAleatorio(limiteSuperior) {
    // Generar un entero aleatorio entre 0 y el limite superior sin incluir lo
    return Math.floor(Math.random() * limiteSuperior);
 }

 for (var i = 0; i < 15; i++){
    console.log(generarEnteroAleatorio(15))
 }
 */

//ALEATORIO_CON_UN_RANGO

/* function rangoAleatorio(limeteInferior,limiteSuperior){  
return Math.floor(Math.random() * (limiteSuperior - limeteInferior + 1)) + limeteInferior;
}
for (var i = 0; i < 15; i++) {
    console.log(rangoAleatorio(2, 17))
} 
 */

//FUNCION_PARSEiNT()

/* var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);
 */
/* 
console.log(parseInt("110111", 2))//Mosttramos un numero binario agregando  el numero 2 
 */
/* 
console.log(parseInt("3E0A", 16)) // Mostramos un numero exagecimal con el 16 
 */

/* function retornarMinimo(x, y) {
console.log(x < y ? x : y); /* la condicion es x < y "?" lo usamos como return x : y; es nuestro else     if (x < y) {
    return x;
} else  {
    return y;
} //
}
 console.log(retornarMinimo(12, 19)) */

/* 
 var a = 5; 
 var b = 9;

 console.log(a > b ? a + 2 : b * 3); // consola 27
 var a = 15;
 var b = 9;
 console.log(a > b ? a + 2 : b * 3); // consola 17 */

 //MULTIPLES CONDICINALES 

 /* function compararNumeros(a, b) {
    return a == b ? "a y b son iguales" 
    : a > b ? " a es mayor que b" 
    : "b es mayor que a"; 
 }

 /* La funcion de arriba es igual a esto
 if (a == b) {
        return "a y b son iguales"
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        return "b es mayor que a";
    }//  

    console.log(compararNumeros(11, 27))
    console.log(compararNumeros(27, 27))
    console.log(compararNumeros(27, 11))
     */

    /* var campista = "James";
    var campista = "David";
    var campista = "Jhon";
    console.log(campista)
    console.log(campista) // var lo podemos llamar o usar mas de una vez a diferencia de let solo se puede una vez
    let campist = "Sebastian"
    console.log(campist) */

    //AMBITO VAR VS LET

/*     var miVariableGlobal = 4;
    console.log(miVariableGlobal);

    function miFuncion() {
        console.log(miVariableGlobal);
        var miVariableLocal = 8;
        console.log(miVariableLocal);

    }
miFuncion();
console.log(miVariableGlobal);
console.log(miVariableLocal); // Error la variable esta dentro de la funcion
 */
/* 
for (let i = 0; i < 3; i ++) {
    console.log(i);
}
console.log("Variable: " + i); // let solo sirve en el bloque o funcion donde se usa no existe fuera.
 */
/* 
var mostrarColor = true;
if (mostrarColor) {
    let color = "verde";
    console.log("Mi color favorito es " + color)
}
console.log(color); // let en este punto no existe solo se usa en la funcion a diferencia de var 
 */

//CONST
 
/* const miConstante = 35;
console.log(miConstante)
miConstante = 15; // const solo se puede signar una vez a diferencia de var y tampoco se puede crear la variable y asignar un valor luego con const
 */
// const la designamos en desarrollos para informar a los demas que esa variable const no se puede modificar

/* function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined; 
    }
    return PI * (radio ** 2);
        
}
console.log(calcularAreaCirculo(10))
 */
/* 
const  MI_ARREGLO = [1, 2, 3, 4];
 // PODEMOS MUTAR EL VALOR DEL ARREGLO OSEA CAMBIAR LO DE LA SIGUIENTE MANERA

 MI_ARREGLO[0] = 5;
 MI_ARREGLO[1] = 6;
 MI_ARREGLO[2] = 7;
 MI_ARREGLO[3] = 8;
// LLAMAMOS EL INDICE QUE QUEREMOS CAMBIAR Y ASIGNAMOS EL VALOR
 console.log(MI_ARREGLO)
 */

 // COMO NO INMUTAR UN OBJETO

 /* let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
 };
 Object.freeze(colores);//con esta linea congelamos cualquier intento de modificacion delete o agregar a las variables 
 console.log(colores) */


 // FUNCIONES_FLECHA
 /* const fecha = function () {
    return new Date();
 }; */

 /* 
const fecha = () => new Date();//asi usamos la funcion fecha, la usamos para reducir la funcion
 */

//funcion con uno o mas parametros
/* 
const sumarTres = function(x) {
    return x + 3;
};
 */

/* 
const sumarTres = (x) => x + 3;// asi reducimos la funcion de arriba la escribimos en funcion flecha con tal de abreviar las funciones
console.log(sumarTres(4))
 */

/* const concatenarArreglos = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(concatenarArreglos([1, 2],[3, 4, 5]))
 */

//asi abreviamos el codigo
/* 
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos([1, 2],[3, 4, 5])) */

//VALORES_POR_DEFECTO_PARA_UNA_FUNCION 
/* 
const incrementar = (num, valor = 1) => num + valor; 

console.log(incrementar(5, ));// consola 6
console.log(incrementar(5, 3));// consola 8
 */

//OPERADOR_REST

//PASAR CUALQUIER ARGUMENTO A ARREGLO

/* function miFuncion(...args) {//no necesariamente es args solo es para abreviar la palabra argumentos lo principal es agregar los tres puntos antes
    console.log(args);
}

miFuncion([1, 2, 3, 4],[5, 6, 7, 8]);

 */

/* function miFuncion(...args) {
    console.log(args.length);
}

miFuncion([1, 2, 3, 4, 5, 6, 7, 8]);//1 array
miFuncion(1, 2, 3, 4, 5, 6, 7, 8);// 8 caracteres
 */

/* const sumar = (x, y, z) => {
    return args.reduce((a, b) => a + b, 0);
} // con esta funcion solo teniamos 3 parametros para trabajar con el metodo args de abajo podemos agregar mas arreglos para trabajar
 */

/* 
const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
console.log()
 */

//OPERADOR_SPREAD
// TOMA UN ARRAY Y LO DESCOMPONE EN ELELEMTOS INDIVUADUALES PARA QUE LA FUNCION LOS TOOME EN PARTES ESPECIFICAS

/* const numeros = [1, 2, 3];
function sumar(x, y, z) {
    return x + y + z;
}

console.log(sumar(...numeros))// el operador spread los usamos cuando llamamos la funcion en este caso la usamos para poder tomar los valores del arreglo y no llamar uno por uno example sumar(numeros[0],numeros[1], numeros[2])
 */
/* 
//SINTAXIS_DE_DESTRUCTURACION
const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

//const nombre = usuario.nombre;
//const edad = usuario.edad; asi llamabamos antes a las propiedades, ahora con la sintaxis de desestructuracion lo hacemos de la siguiente manera

const {nombre, edad} = usuario; 

 */
/* 
var coordenadas = { 
    x: 4,
    y: 6,
    z: 12
};

const {x, y, z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);
 */

//SINTAXIS_DE_DESESTRUCTURACION:_OBJETOS_ANIDADOS:
/* 
const usuario = { 
    johnDoe:{
        edad: 27,
        correo: "johnDoe@freecodecamp.com"
    }
};

//const {johnDoe: {edad, correo}} = usuario;
// tambien podemos modificar el nombre de la propiedad agregando dos puntos y el nombre que deseemos
const {johnDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = usuario;
//console.log(edad)
console.log(edadDelUsuario, correoDelUsuario)
 */
/* 
const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana":{
        minima: 68,
        maxima: 80
    }
};

/* const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimaHoy,maximaHoy)
//de la siguiente manera lo hacemos con la sintaxis de desestructuracion
const {hoy: {minima: minimaHoy}, mañana: {minima: minimaMañana, maxima}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, minimaMañana, maxima)
 */

//SINTAXIS DE DESESTRUCTURACION: ARREGLOS

/* var a;
var b;
var c
[a, b,,,, c] = [1, 2, 3, 4, 5, 6]; // De esta manera llamamos el 6 y ni el 3 agregando comas como si se corriera un espacio por coma

console.log(a, b, c)
 */

/* INTERCAMBIO DE VARIABLES EN UNA MISMA LINEA
 var a = 8;
var b = 6;

[b, a] = [a ,b];

console.log("a: " + a);
console.log("b: " + b)
 */

/* var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("a: " + a)
console.log("b: " + b)
console.log("demas numeros del array: " + arr)
 */
/* 
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8]; //Definimos un arreglo
function removerTresPrimerosElementos(arreglo) { //definimos lo que va hacer la funcion 
    const [ , , , ...nuevoArreglo] = arreglo; // la funcion va a tomar la constante removera los tres primeros elementos y dejamoa el arreglo que tomamos como argumento
    return nuevoArreglo; // finalmente retornamos el nuevo arreglo con los cambios en la funcion
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial); // por ultimo creamos la variable const arregloFinal con la funcion y el arreglo que queremos modicicar
console.log(arregloFinal);
 */

// SINTAXIS DE DESESTRUCTURACION: PASAR OBJETO COMO ARGUMENTO

/* var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España",
};

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};

actualizarPerfil(nuevoPerfilCliente) */

/* const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85,
};

/* const mitad = (e) => (e.max + e.min) / 2.0; llamamos la const mitad para saber el punto medio de las estadisticas anteriores entonces tomamos el valor maximo del objeto y el minimo del objeto y lo dividimos en 2
esto lo pasamos a manera que usemos la desestructuracion de objetos 

const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadisticas))
 */

//PLANTILLAS_LITERALES O PLANTILLAS DE CADENAS

/* 
CARACTERISTICAS:
    - SE USA EL ACENTO INVERTIDO (BACKTICK) ` EN LUGAR DE COMILLAS.
    - PUEDEN CONTENER COMILLAS SIMPLES Y DOBLES.
    - LAS LINEAS SE PRESERVAN COMO SE ESCRIBEN EN EL CODIGO.
    - PARA REEMPLAZAR UNA VARIABLE SE ESCRIBE ${VARIABLE}.
    - DENTRO DE ${} TAMBIEN PUEDES ESCRIBIR EXPRESIONES.
*/

/* var a = 6;
console.log(`el valor de a es ${a} `) // consola el valor de a es 6
 */
/* 
var nombre = "Nora";
var edad = 6;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años. `); // Mi nombre es Nora y tengo 6 años.
 */

/* var myArray = [1, 2, 3, 4, 5, 6]

// console.log(`Mi arreglo es ${myArray}`) //Mi arreglo es 1,2,3,4,5,6 
console.log(`Mi arreglo es ${JSON.stringify(myArray)}`) // consola Mi arreglo es [1,2,3,4,5,6]
 */

//tambien podemos cambiar  el valor de las propiedades de un objeto en otra variable y no directamente en console.log.


/* var persona = { 
    nombre: "Gino Cass",
    edad: 10
};

const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años. `;

console.log(SALUDO);
 */

// CREAR OBJETOS DE FORMA CONCISA


// esta es la forma tradicional de crear objetos
/* const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    }
};

console.log(crearPersona("Gino Smith", 28, "Español"))
 */

// esta es la forma concisa

/* const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"))

 */

//METODOS => TAMBIEN PODEMOS DECLARAR FUNCIONES DENTRO DE LOS OBJETOS QUE CREE 

/* const persona = {
    nombre: "Isabel",
    presentarse: function() {
        return `¡Hola! Mi nombre es ${this.nombre}.`;
    }
};

console.log(persona.presentarse())
 */

// de esta forma lo hacemos mas conciso
/* 
const persona = {
    nombre: "Isabel",
    presentarse() { //el cambio es omitir la palabra function
        return `¡Hola! Mi nombre es ${this.nombre}.`;
    }
};

console.log(persona.presentarse()) // consola Mi nombre es Isabel.
 */

//Definir una clase

/* class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial ("Júpiter")
var apolo = new TransbordadorEspacial ("Marte");
console.log(zeus.planeta, apolo.planeta)
 */

/* class Mascota {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota ("Coco", 7);

console.log("Nombre: " + miMascota.nombre)
console.log("Edad: " + miMascota.edad)

var tuMascota = new Mascota ("Max" , 3);

console.log("Nombre: " + tuMascota.nombre)
console.log("Edad: " + tuMascota.edad)
 */
// GETTERS & SETTERS 

//nos permiten proteger la data de ese objeto.

class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor(){
        return this._autor;
    } // nos permiten obtener el valor de una propiedad privada accediendo de una forma indirecta

    set autor(nuevoAutor){
        this._autor = nuevoAutor;

    } // funcion que nos permite actualizar el valor de una propiedad.
}

var libro = new Libro ("anónimo")
console.log(libro.autor)//Getter

libro.autor = "Gino Smith";
console.log(libro.autor)

