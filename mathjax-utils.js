// Utilidades avanzadas para MathJax

// Función para renderizar MathJax bajo demanda
function renderMathJax() {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise().then(() => {
      console.log('MathJax renderizado exitosamente');
    }).catch((err) => console.log('Error al renderizar MathJax:', err));
  }
}

// Renderizar solo cuando el contenido sea visible (Intersection Observer)
function setupLazyMathJax() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderMathJax();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observar secciones que pueden contener matemáticas
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  } else {
    // Fallback para navegadores antiguos
    renderMathJax();
  }
}

// Función para convertir texto plano a LaTeX
function escapeLaTeX(text) {
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/#/g, '\\#')
    .replace(/\$/g, '\\$')
    .replace(/%/g, '\\%')
    .replace(/&/g, '\\&')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');
}

// Función para crear ecuaciones interactivas
function createInteractiveEquation(id, latex) {
  const container = document.getElementById(id);
  if (container) {
    container.innerHTML = `$$${latex}$$`;
    renderMathJax();
  }
}

// Función para exportar ecuaciones como imágenes
async function exportEquationAsImage(elementId, filename = 'equation.png') {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    // Usar html2canvas si está disponible
    if (typeof html2canvas !== 'undefined') {
      const canvas = await html2canvas(element);
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL();
      link.click();
    } else {
      console.warn('html2canvas no está disponible. Instálalo para exportar ecuaciones.');
    }
  } catch (error) {
    console.error('Error al exportar ecuación:', error);
  }
}

// Función para buscar y reemplazar notación matemática
function enhanceMathNotation() {
  // Buscar patrones comunes y convertirlos a LaTeX
  const patterns = [
    // Fracciones simples: 1/2 -> \frac{1}{2}
    { regex: /(\d+)\/(\d+)/g, replacement: '\\frac{$1}{$2}' },
    // Potencias simples: x^2 -> x^{2}
    { regex: /([a-zA-Z])\^(\d+)/g, replacement: '$1^{$2}' },
    // Subíndices simples: x_1 -> x_{1}
    { regex: /([a-zA-Z])_(\d+)/g, replacement: '$1_{$2}' },
  ];

  // Esta función se puede personalizar según necesidades específicas
  console.log('Enhancement de notación matemática disponible');
}

// Función para validar sintaxis LaTeX
function validateLatex(latex) {
  // Validación básica de paréntesis y llaves
  const openBraces = (latex.match(/\{/g) || []).length;
  const closeBraces = (latex.match(/\}/g) || []).length;
  const openParens = (latex.match(/\(/g) || []).length;
  const closeParens = (latex.match(/\)/g) || []).length;

  if (openBraces !== closeBraces) {
    return { valid: false, error: 'Paréntesis desbalanceados {}' };
  }
  if (openParens !== closeParens) {
    return { valid: false, error: 'Paréntesis desbalanceados ()' };
  }

  return { valid: true };
}

// Función para agregar animaciones a ecuaciones
function animateEquation(elementId, steps, delay = 1000) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let currentStep = 0;
  
  function showNextStep() {
    if (currentStep < steps.length) {
      element.innerHTML = `$$${steps[currentStep]}$$`;
      renderMathJax();
      currentStep++;
      setTimeout(showNextStep, delay);
    }
  }

  showNextStep();
}

// Función para crear tooltips con explicaciones matemáticas
function addMathTooltip(elementId, explanation) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.title = explanation;
  element.classList.add('math-tooltip');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Configurar renderizado diferido si hay contenido matemático
  if (document.querySelector('section') && 
      (document.body.innerHTML.includes('$') || 
       document.body.innerHTML.includes('\\'))) {
    setupLazyMathJax();
  }
});

// Exportar funciones para uso global
window.MathJaxUtils = {
  renderMathJax,
  setupLazyMathJax,
  escapeLaTeX,
  createInteractiveEquation,
  exportEquationAsImage,
  enhanceMathNotation,
  validateLatex,
  animateEquation,
  addMathTooltip
};