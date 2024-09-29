function handleResize() {
    const button = document.getElementById('btn-contactanos');

    // Verificar si el ancho es menor a 768px
    if (window.innerWidth < 768) {
        // Eliminar el botón si está en el DOM
        if (button) {
            button.remove(); // Elimina el botón del DOM
        }
    } else {
        // Si el botón no está en el DOM, lo recreamos
        const padrebtn = document.getElementById('container-nav');

        if (!document.getElementById('btn-contactanos')) {
            const newLink = document.createElement('a'); // Crear un elemento <a>
            newLink.className = 'nav-link'; // Clase para el enlace
            newLink.href = 'https://wa.me/998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos'; // Define la URL de destino
            newLink.textContent = 'Contacto'; // Texto del enlace
            
            const newButton = document.createElement('button');
            newButton.id = 'btn-contactanos'; // Usa el mismo ID
            newButton.className = 'btn btn-success';

            newButton.appendChild(newLink);
            padrebtn.appendChild(newButton); // Agrega el botón de nuevo al DOM
        }
    }
}

// Agregar evento de resize
window.addEventListener('resize', handleResize);

// Ejecutar la función al cargar la página
handleResize();