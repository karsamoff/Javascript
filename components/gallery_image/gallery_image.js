function ver_imagen()/* with the tag (function) + attribute "ver_imagen" damos la funcion del html */
{
    if (!document.images)/* si no existe la imegen en el documento */
    return/* retorneme  */
    document.images.img.src=/* a esta imagen (indexa a la imagen llamada por defecto) */
    document.imagenes.imagen.options[document.imagenes.imagen.selectedIndex].value/* cuando seleccione en opciones indexe me la imagen que corresponda */
}