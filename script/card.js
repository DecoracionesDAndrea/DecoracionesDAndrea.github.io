// Arreglo con los títulos
const titulos = [
    "Fondos",
    "Mesa principal",
    "Laterales de pared",
    "Centro de mesa",
    "Sillas"
];

// Función para obtener el id de la URL
function obtenerID() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Obtener el ID de la URL
const id = obtenerID();

// Seleccionamos todos los elementos que tienen la clase "titulo"
const elementosTitulo = document.getElementsByClassName("titulo-card");

// Verificar si el ID es válido
if (id && id >= 0 && id <= titulos.length) {
    // Asignar el título correspondiente a todos los elementos con la clase "titulo"
    for (let i = 0; i < elementosTitulo.length; i++) {
        elementosTitulo[i].innerText = titulos[id-1];
    }
} else {
    // Si no hay ID válido, mostrar un mensaje de error en todos los elementos
    for (let i = 0; i < elementosTitulo.length; i++) {
        elementosTitulo[i].innerText = "Título no encontrado";
    }
}