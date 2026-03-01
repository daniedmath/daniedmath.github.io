// Configuración de MathJax
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
  },
  options: {
    renderActions: {
      findScript: [10, function (doc) {
        if (doc.isSVG) {
          doc.scriptData.push(['svg', 1]);
        }
      }, '']
    }
  }
};
