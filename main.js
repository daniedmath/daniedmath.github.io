// Función para toggle del menú responsive
function toggleMenu() {
  var menu = document.querySelector('nav ul');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Mensaje de carga en consola
console.log('Página cargada exitosamente');
