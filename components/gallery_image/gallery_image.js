function ver_imagen()
{
    if (!document.images)
    return
    document.images.img.src=
    document.imagenes.imagen.options[document.imagenes.imagen.selectedIndex].value
}