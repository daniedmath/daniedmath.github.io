// Función para toggle del menú responsive
function toggleMenu() {
  var menu = document.querySelector('nav ul');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Función para toggle del dropdown en móvil
function toggleDropdown(event) {
  // Solo actuar en móvil (cuando el menú está visible)
  if (window.innerWidth <= 600) {
    event.preventDefault();
    var dropdown = event.currentTarget;
    dropdown.classList.toggle('active');
  }
}

// Agregar event listeners a los dropdowns
document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('nav ul li.dropdown > a');
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', toggleDropdown);
  });

  // Re-renderizar MathJax cuando se muestra un contenedor que estaba oculto
  // al cargar la página (<dialog> o <details>): las fórmulas ocultas se
  // dimensionan mal (ancho/altura 0) si no se vuelven a componer al revelarse.
  document.querySelectorAll('dialog').forEach(function(dialog) {
    var showModal = dialog.showModal.bind(dialog);
    dialog.showModal = function() {
      showModal();
      renderMathIn(dialog);
    };
  });

  document.querySelectorAll('details').forEach(function(details) {
    details.addEventListener('toggle', function() {
      if (details.open) {
        renderMathIn(details);
      }
    });
  });
});

// Renderiza (o re-renderiza) las fórmulas de MathJax dentro de un contenedor
function renderMathIn(container) {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise([container]).catch(function(err) {
      console.warn('Error al renderizar MathJax:', err);
    });
  }
}

// Mensaje de carga en consola
console.log('Página cargada exitosamente');
