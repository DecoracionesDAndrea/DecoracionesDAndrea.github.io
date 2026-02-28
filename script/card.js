let titulos = [];

// Leer el archivo JSON y llenar el arreglo titulos
fetch('../script/titulos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    titulos = data.titulos;
    actualizarTitulos();
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Función para obtener el id de la URL
function obtenerID() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Función para actualizar los títulos en el DOM
function actualizarTitulos() {
    // Obtener el ID de la URL
    const id = obtenerID();

    // Seleccionamos todos los elementos que tienen la clase "titulo-card"
    const elementosTitulo = document.getElementsByClassName("titulo-card");
    const elementosImagenMain = document.getElementsByClassName("imagen-card");

    // Verificar si el ID es válido
    if (id && id >= 1 && id <= titulos.length) {
        // Asignar el título correspondiente a todos los elementos con la clase "titulo-card"
        elementosImagenMain[0].src = "../images/card/" + id  + ".jpeg"; // unica imagenmain
        for (let i = 0; i < elementosTitulo.length; i++) {
          elementosTitulo[i].innerText = titulos[id - 1];
        }
    } else {
        // Si no hay ID válido, mostrar un mensaje de error en todos los elementos
        for (let i = 0; i < elementosTitulo.length; i++) {
            elementosTitulo[i].innerText = "Título no encontrado";
        }
    }
}
