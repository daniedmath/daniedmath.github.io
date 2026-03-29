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
});

// Mensaje de carga en consola
console.log('Página cargada exitosamente');
