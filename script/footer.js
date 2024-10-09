// Crear el footer y añadirlo al final del cuerpo del documento
function cargarFooter() {
    const footerHTML = `
      <footer class="mt-5">
        <div>
          <p>&copy; 2024 Decoraciones D'Andrea. Todos los derechos reservados.</p>
          <nav>
            <a href="https://www.facebook.com" target="_blank" style="color: white; margin: 0 15px;">Facebook</a>
            <a href="https://www.tiktok.com" target="_blank" style="color: white; margin: 0 15px;">TikTok</a>
            <a href="https://www.instagram.com" target="_blank" style="color: white; margin: 0 15px;">Instagram</a>
          </nav>
          <p>
            <a href="https://wa.me/998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos" style="color: white;">Sr. Fredy Aranibar</a> | 
            <a href="https://wa.me/993003810?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos" style="color: white;">Sra. Giovana Quispe</a>
          </p>
        </div>
      </footer>
    `;
  
    // Insertar el footer al final del cuerpo de la página
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  
  // Llamar a la función para cargar el footer cuando la página haya terminado de cargar
  document.addEventListener('DOMContentLoaded', cargarFooter);
  