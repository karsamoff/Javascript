 function abrir_ventana()
 {
    window.open("http://www.eltiempo.com/");
 }
 function para_abrir()
 {
    clearTimeout(pop);
 }
 pop = setInterval ("abrir_ventana()",3000);