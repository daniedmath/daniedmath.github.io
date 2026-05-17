// Configuración básica de MathJax con solo macros
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: {
      N: '{\\mathbb{N}}',   // Naturales
      Z: '{\\mathbb{Z}}',   // Enteros
      Q: '{\\mathbb{Q}}',   // Racionales
      R: '{\\mathbb{R}}',   // Reales
      C: '{\\mathbb{C}}'    // Complejos
    }
  }
};
