 function abrir_ventana()/* ésta es la funcion para abrir ventanas */
 {
    window.open("http://www.eltiempo.com/");
 }/* this funtion open the window  */
 function parar_abrir()
 {
    clearTimeout(pop);
 }/* ésta funcion para de abrir la ventana lo usamos en el btn of the page */
 pop = setInterval ("abrir_ventana()",3000);/* ésta función abre la ventana cada cierto tiempo */