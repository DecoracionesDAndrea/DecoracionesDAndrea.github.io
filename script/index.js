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
}

// Seleccionamos todos los elementos que tienen la clase "titulo"

