// Arreglo con los títulos
const titulos = [
    "Fondos",
    "Mesa principal",
    "Laterales de pared",
    "Centro de mesa",
    "Sillas"
];

// Seleccionamos todos los elementos que tienen la clase "titulo"
const elementosTitulo = document.getElementsByClassName("titulo-card");

// Iteramos sobre los elementos y les asignamos los títulos
for (let i = 0; i < elementosTitulo.length; i++) {
    // Verificamos que haya suficientes títulos en el arreglo
    if (i < titulos.length) {
        elementosTitulo[i].innerText = titulos[i];
    } else {
        // Si hay más elementos que títulos, podrías asignar un valor por defecto
        elementosTitulo[i].innerText = "Título no disponible";
    }
}
