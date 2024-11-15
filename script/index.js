import { cards } from './cardsarray.js'

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
    llenarTodoInicio();
  })
  .catch(error => {
    console.error('Error:', error);
  });


function llenarTodoInicio(){
  const containerBusq = document.getElementById('resultBusquedaInicio');
  let fila = undefined, cant = 0;
  console.log(titulos);
  if(titulos.length > 0){
    console.log("adad");
    for(let index = 0; index < titulos.length; index++){
        if(cant % 3 === 0){
          if(fila !== undefined)
            containerBusq.appendChild(fila);
          fila = document.createElement('div');
          fila.className = 'row';
        }
        fila.insertAdjacentHTML('beforeend', cards[index]);
        cant++;
    }
    containerBusq.appendChild(fila);
  }
}

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
  // const cards = document.querySelectorAll(".card");
  const textoBusqueda = inputBuscadorInicio.value.toLowerCase(); // Convierte el texto a minúsculas
  const containerBusq = document.getElementById('resultBusquedaInicio');
  let cantMostrados = 0, row = undefined;
  containerBusq.innerHTML = '';
  for(let index = 0; index < titulos.length; index++){
    if (titulos[index].toLowerCase().includes(textoBusqueda)) {
      if(cantMostrados % 3 === 0){
        if(row !== undefined)
          containerBusq.appendChild(row);
        row = document.createElement('div');
        row.className = 'row';
      }
      row.insertAdjacentHTML('beforeend', cards[index]);
      cantMostrados++;
    }
  }
  containerBusq.appendChild(row);
}

buscarInicioBtn.addEventListener("click", filtrarCards);

// Evento para el campo de texto (cuando se presiona Enter)
inputBuscadorInicio.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    filtrarCards();
  }
});
