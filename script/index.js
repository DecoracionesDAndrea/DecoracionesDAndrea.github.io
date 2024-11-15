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
    const elementosImagenMain = document.getElementsByClassName("imagen-card");
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
    for (let i = 0; i < elementosImagenMain.length ; i++) {
      //elementosImagenMain[i].src = './images/card/'+ (i+2) + '.jpeg';
      let href = elementosImagenMain[i].closest('.card').querySelector('a').href;
    
      // Usa URLSearchParams para extraer el valor del parámetro 'id'
      let urlParams = new URLSearchParams(href.split('?')[1]); 
      let idcard = urlParams.get('id'); // Obtiene el valor del parámetro 'id'
      
      // Asigna la nueva fuente de la imagen usando el 'id' extraído
      if (idcard) {
          elementosImagenMain[i].src = './images/card/' + idcard + '.jpeg';
      }
    }
}

// Seleccionamos todos los elementos que tienen la clase "titulo"

// Obtén el input, el botón y los párrafos
const buscarInicioBtn = document.getElementById("buscarInicioBtn");
const inputBuscadorInicio = document.getElementById("buscadorInicio");

// Función para filtrar los párrafos
function filtrarCards() {
  const cards = document.querySelectorAll(".card");
  const textoBusqueda = inputBuscadorInicio.value.toLowerCase(); // Convierte el texto a minúsculas

  cards.forEach(c => {
    const tittlecard = c.querySelector('.titulo-card').textContent.toLowerCase();
    console.log(tittlecard);
    if (tittlecard.includes(textoBusqueda)) {
      c.style.display = "block"; // Muestra el párrafo si coincide
    } else {
      c.style.display = "none"; // Oculta el párrafo si no coincide
    }
  });
}

buscarInicioBtn.addEventListener("click", filtrarCards);

// Evento para el campo de texto (cuando se presiona Enter)
inputBuscadorInicio.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    filtrarCards();
  }
});