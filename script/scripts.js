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
            newLink.href = 'https://wa.me/51998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos'; // Define la URL de destino
            newLink.textContent = 'Contacto'; // Texto del enlace
            const button = `<button class="btn btn-primary ms-5" id="btn-contactanos">
              <a class="nav-link" href="https://wa.me/998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos">
                <img src="../images/wsp-icon.png" alt="WhatsApp" style="width: 22px; height: 22px; margin-right: 5px;">
                Contacto
              </a>
            </button>`
            const newButton = document.createElement('button');
            newButton.id = 'btn-contactanos'; // Usa el mismo ID
            newButton.className = 'btn btn-success';
            
            newButton.appendChild(newLink);
            padrebtn.appendChild(newButton); // Agrega el botón de nuevo al DOM
            const darkMode = localStorage.getItem("dark-mode");

            // Si el modo oscuro estaba activo, aplicarlo al cargar la página
            if (darkMode === "enabled") {
                const btnContactanos = document.getElementById("btn-contactanos");
                if (btnContactanos) {
                btnContactanos.classList.add("btn-dark-mode"); // Agregar la clase correctamente
                }
            }
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


function toggleMessageBox() {
    var messageBox = document.getElementById('messageBox');
    if (messageBox.style.display === 'none' || messageBox.style.display === '') {
        messageBox.style.display = 'flex';
    } else {
        messageBox.style.display = 'none';
    }
}

function sendWhatsAppMessage() {
    var message = document.getElementById('whatsappMessage').value;
    var phoneNumber = '51998805588';  // Reemplaza con tu número de teléfono
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}