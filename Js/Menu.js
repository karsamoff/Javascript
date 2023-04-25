const btn = document.getElementById("Mybtn")

const contentMenu = document.getElementById("menuContent")

btn.onclick = function () {
  contentMenu.style.display = "block";
 // Preguntar como cerrar haciendo click en la cualquier parte de la ventana Y en el mismo button
}

window.onclick = function (event) {
  if (event.target == menuContent) {
    menuContent.style.display = "none";
  }
}