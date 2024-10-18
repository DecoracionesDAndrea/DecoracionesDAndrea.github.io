// Crear el footer y añadirlo al final del cuerpo del documento
function cargarFooter() {
    const footerHTML = `
      <footer class="mt-5">
        <div>
          <p>&copy; 2024 Eventos y Detalles D'Andrea. Todos los derechos reservados.</p>
          <p>
            <a href="https://www.facebook.com" target="_blank" style="color: white; margin: 0 15px;">Facebook</a>
            <a href="https://www.tiktok.com/@giovanamilagros19" target="_blank" style="color: white; margin: 0 15px;">TikTok</a>
            <a href="https://www.instagram.com" target="_blank" style="color: white; margin: 0 15px;">Instagram</a>
          </p>
          <nav>Whatsapp</nav>
          <p>
            <a href="https://wa.me/51998805588?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos" style="color: white;">Fredy Aranibar</a> | 
            <a href="https://wa.me/51993003810?text=Estoy%20interesado%20en%20decoraciones%20de%20eventos" style="color: white;">Giovana Quispe</a>
          </p>
        </div>
      </footer>
    `;
  
    // Insertar el footer al final del cuerpo de la página
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  
  // Llamar a la función para cargar el footer cuando la página haya terminado de cargar
  document.addEventListener('DOMContentLoaded', cargarFooter);
  

  // Función para insertar el botón de WhatsApp en todas las páginas
(function() {
  // Crear el contenedor del botón flotante
  var whatsappButton = document.createElement('div');
  whatsappButton.innerHTML = `
      <div class="whatsapp-button" onclick="toggleMessageBox()">
    <img src="../images/wsp-icon-orig.png" alt="WhatsApp" style="position: relative; top: 2.5px; width: 90%; height: 90%;">
  </div>

  <div class="message-box" id="messageBox">
      <textarea id="whatsappMessage" placeholder="Escribe tu mensaje..."></textarea>
      <button onclick="sendWhatsAppMessage()">Enviar</button>
  </div>
  `;
  document.body.appendChild(whatsappButton);

  
  var backbutton = document.createElement('div');
  backbutton.innerHTML = `<button id="btnArriba" onclick="irArriba()">
  <img src="../images/backtop.png" style="position: relative; top: 0px; width: 60px; height: 60px;">
  </button>`;
  document.body.appendChild(backbutton);

  var btnDarkMode = document.createElement('div');
  btnDarkMode.innerHTML = `<!-- Botón para alternar modo oscuro con íconos -->
    <button id="toggle-dark-mode" class="btn btn-secondary">
      <i id="icon-mode" class="fas fa-moon"></i>
    </button>`
  
  const navbar = document.querySelector(".navbar-container");
  navbar.insertAdjacentElement("afterend", btnDarkMode);


})();

document.addEventListener("DOMContentLoaded", function() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbarHeight + 'px';
  document.getElementById('toggle-dark-mode').style.position = "relative";
  document.getElementById('toggle-dark-mode').style.marginTop = "0px";
});


// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
  mostrarBoton();
};

function mostrarBoton() {
  const btn = document.getElementById("btnArriba");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
}

// Función para volver a la parte superior
function irArriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-dark-mode");
  const icon = document.getElementById("icon-mode");
  const btnContactanos = document.getElementById("btn-contactanos");

  // Verificar si el modo oscuro está almacenado en localStorage
  const darkMode = localStorage.getItem("dark-mode");

  // Si el modo oscuro estaba activo, aplicarlo al cargar la página
  if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
      document.querySelector('.navbar').classList.add("dark-mode");
      document.querySelectorAll('.card').forEach(card => {
          card.classList.add("dark-mode");
      });
      document.querySelectorAll('.container').forEach(container => {
          container.classList.add("dark-mode");
      });
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.add("dark-mode");
      });
      document.querySelectorAll('.nav-tabs.nav-link.active').forEach(link => {
        link.classList.toggle("dark-mode");
      });
      document.querySelectorAll('.nav-tabs.nav-link').forEach(link => {
          link.classList.toggle("dark-mode");
      });
      // Aplicar dark mode al botón de contactanos
      btnContactanos.classList.add("btn-dark-mode");

      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
  }

  // Evento para alternar el modo oscuro
  toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      document.querySelector('.navbar').classList.toggle("dark-mode");
      document.querySelectorAll('.card').forEach(card => {
          card.classList.toggle("dark-mode");
      });
      document.querySelectorAll('.container').forEach(container => {
          container.classList.toggle("dark-mode");
      });
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle("dark-mode");
      });
      document.querySelectorAll('.nav-tabs.nav-link.active').forEach(link => {
          link.classList.toggle("dark-mode");
      });
      document.querySelectorAll('.nav-tabs.nav-link').forEach(link => {
          link.classList.toggle("dark-mode");
      });

      // Alternar dark mode en el botón de contactanos
      btnContactanos.classList.toggle("btn-dark-mode");

      // Alternar el ícono entre la luna y el sol
      if (document.body.classList.contains("dark-mode")) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");

          // Guardar el estado del modo oscuro en localStorage
          localStorage.setItem("dark-mode", "enabled");
      } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");

          // Guardar el estado del modo claro en localStorage
          localStorage.setItem("dark-mode", "disabled");
      }
  });
});
