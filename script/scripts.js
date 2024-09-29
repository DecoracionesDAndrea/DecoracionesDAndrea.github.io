function handleResize() {
    const button = document.getElementById('btn-contactanos');
    const item = document.getElementById('li-contactanos');

    // Verificar si el ancho es menor a 768px
    if (window.innerWidth < 1000) {//768
        // Eliminar el botón si está en el DOM
        if (button) {
            button.remove(); // Elimina el botón del DOM
        }
        if(!document.getElementById('li-contactanos')){
            const padreliitem = document.getElementById('navbar-lista');
            const newLink2 = document.createElement('a'); // Crear un elemento <a>
            newLink2.className = 'nav-link'; // Clase para el enlace
            newLink2.href = 'https://wa.me/998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos'; // Define la URL de destino
            newLink2.textContent = 'Contacto'; // Texto del enlace
            const newLinkItem = document.createElement('li');
            newLinkItem.id='li-contactanos';
            newLinkItem.className='nav-item';
            newLinkItem.appendChild(newLink2);
            padreliitem.appendChild(newLinkItem);

        }
    } else {
        // Si el botón no está en el DOM, lo recreamos
        
        if (!document.getElementById('btn-contactanos')) {
            const padrebtn = document.getElementById('container-nav');
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
        if (item) {
            item.remove(); // Elimina el botón del DOM
        }
        
    }
}

// Agregar evento de resize
window.addEventListener('resize', handleResize);

// Ejecutar la función al cargar la página
handleResize();