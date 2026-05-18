// Configuración completa de MathJax con macros personalizados para uso matemático
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,

    // Paquetes adicionales de LaTeX
    packages: {
      '[+]': [
        'base',
        'ams',
        'newcommand',
        'noerrors',
        'noundefined'
      ]
    },

    // Macros personalizados para notación matemática común
    macros: {
      // Conjuntos numéricos
      N: '{\\mathbb{N}}',   // Naturales
      Z: '{\\mathbb{Z}}',   // Enteros
      Q: '{\\mathbb{Q}}',   // Racionales
      R: '{\\mathbb{R}}',   // Reales
      C: '{\\mathbb{C}}',   // Complejos
      H: '{\\mathbb{H}}',   // Cuaterniones
      P: '{\\mathbb{P}}',   // Primos

      // Operadores comunes
      dif: '{\\mathrm{d}}',   // Diferencial
      Dif: '{\\mathrm{D}}',   // Diferencial mayúscula
      e: '{\\mathrm{e}}',     // Número de Euler
      i: '{\\mathrm{i}}',     // Unidad imaginaria

      // Símbolos frecuentes
      eps: '{\\varepsilon}',   // Épsilon variable
      phi: '{\\varphi}',      // Phi variable
      theta: '{\\vartheta}',  // Theta variable
      kappa: '{\\varkappa}',  // Kappa variable
      rho: '{\\varrho}',      // Rho variable
      sigma: '{\\varsigma}',  // Sigma variable

      // Operadores matemáticos
      lim: '{\\lim}',         // Límite
      Lim: '{\\lim}',         // Límite mayúscula
      sin: '{\\sin}',         // Seno
      cos: '{\\cos}',         // Coseno
      tan: '{\\tan}',         // Tangente
      cot: '{\\cot}',         // Cotangente
      sec: '{\\sec}',         // Secante
      csc: '{\\csc}',         // Cosecante
      arcsin: '{\\arcsin}',   // Arco seno
      arccos: '{\\arccos}',   // Arco coseno
      arctan: '{\\arctan}',   // Arco tangente

      // Límites y sumatorias
      sum: '{\\sum}',         // Suma
      prod: '{\\prod}',       // Producto
      coprod: '{\\coprod}',   // Coproducto
      bigoplus: '{\\bigoplus}', // Suma directa
      bigotimes: '{\\bigotimes}', // Producto directo

      // Derivadas e integrales
      dd: ['{\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}}', 2],  // Derivada total
      pd: ['{\\frac{\\partial #1}{\\partial #2}}', 2],  // Derivada parcial
      grad: '{\\nabla}',      // Gradiente
      div: '{\\nabla\\cdot}',  // Divergencia
      curl: '{\\nabla\\times}',  // Rotacional
      laplacian: '{\\Delta}',  // Laplaciano

      // Vectores y matrices
      vec: ['{\\mathbf{#1}}', 1],       // Vector
      mat: ['{\\begin{pmatrix}#1\\end{pmatrix}}', 1], // Matriz con paréntesis
      bmat: ['{\\begin{bmatrix}#1\\end{bmatrix}}', 1], // Matriz con corchetes
      vmat: ['{\\begin{vmatrix}#1\\end{vmatrix}}', 1], // Determinante

      // Notación de conjuntos
      set: ['{\\{#1\\}}', 1],           // Conjunto
      suchthat: '{\\,|\\,}',            // Tal que
      empty: '{\\varnothing}',          // Conjunto vacío

      // Lógica
      iff: '{\\Leftrightarrow}',        // Si y solo si
      implies: '{\\Rightarrow}',         // Implica
      impliedby: '{\\Leftarrow}',        // Es implicado por

      // Estadística
      E: '{\\mathbb{E}}',              // Esperanza
      Var: '{\\mathrm{Var}}',          // Varianza
      Cov: '{\\mathrm{Cov}}',          // Covarianza
      corr: '{\\mathrm{corr}}',        // Correlación

      // Análisis
      norm: ['{\\left\\lVert#1\\right\\rVert}', 1],   // Norma
      abs: ['{\\left|#1\\right|}', 1],               // Valor absoluto
      floor: ['{\\left\\lfloor#1\\right\\rfloor}', 1], // Piso
      ceil: ['{\\left\\lceil#1\\right\\rceil}', 1],   // Techo

      // Física matemática
      hbar: '{\\hbar}',                // h barra
      partial: '{\\partial}',          // Parcial
      nabla: '{\\nabla}'              // Nabla
    }
  },

  // Configuración de renderizado SVG (más nítido)
  svg: {
    fontCache: 'global',
    scale: 1,
    minScale: 0.5,
    mtextInheritFont: false,
    merrorInheritFont: true,
    mathmlSpacing: false,
    skipAttributes: {},
    exFactor: 0.5,
    displayAlign: 'center',
    displayIndent: '0'
  },

  // Configuración de CommonHTML (fallback)
  chtml: {
    scale: 1,
    minScale: 0.5,
    mtextInheritFont: false,
    merrorInheritFont: true,
    mathmlSpacing: false,
    skipAttributes: {},
    exFactor: 0.5,
    displayAlign: 'center',
    displayIndent: '0'
  },

  // Opciones avanzadas
  options: {
    renderActions: {
      findScript: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    },
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },

  // Configuración de inicio
  startup: {
    typeset: false // Renderizado bajo demanda
  }
};
