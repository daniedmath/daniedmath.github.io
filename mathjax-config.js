// Configuración avanzada de MathJax para máximo rendimiento y funcionalidad
MathJax = {
  // Configuración de LaTeX/TeX
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
      N: '{\\mathbb{N}}',
      Z: '{\\mathbb{Z}}',
      Q: '{\\mathbb{Q}}',
      R: '{\\mathbb{R}}',
      C: '{\\mathbb{C}}',
      H: '{\\mathbb{H}}',
      
      // Operadores comunes
      dif: '{\\mathrm{d}}',
      Dif: '{\\mathrm{D}}',
      e: '{\\mathrm{e}}',
      i: '{\\mathrm{i}}',
      
      // Símbolos frecuentes
      eps: '{\\varepsilon}',
      phi: '{\\varphi}',
      theta: '{\\vartheta}',
      kappa: '{\\varkappa}',
      rho: '{\\varrho}',
      sigma: '{\\varsigma}',
      
      // Operadores matemáticos
      lim: '{\\lim}',
      Lim: '{\\lim}',
      sin: '{\\sin}',
      cos: '{\\cos}',
      tan: '{\\tan}',
      cot: '{\\cot}',
      sec: '{\\sec}',
      csc: '{\\csc}',
      arcsin: '{\\arcsin}',
      arccos: '{\\arccos}',
      arctan: '{\\arctan}',
      
      // Límites y sumatorias
      sum: '{\\sum}',
      prod: '{\\prod}',
      coprod: '{\\coprod}',
      bigoplus: '{\\bigoplus}',
      bigotimes: '{\\bigotimes}',
      
      // Derivadas e integrales
      dd: ['{\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}}', 2],
      pd: ['{\\frac{\\partial #1}{\\partial #2}}', 2],
      grad: '{\\nabla}',
      div: '{\\nabla\\cdot}',
      curl: '{\\nabla\\times}',
      
      // Vectores y matrices
      vec: ['{\\mathbf{#1}}', 1],
      mat: ['{\\begin{pmatrix}#1\\end{pmatrix}}', 1],
      bmat: ['{\\begin{bmatrix}#1\\end{bmatrix}}', 1],
      vmat: ['{\\begin{vmatrix}#1\\end{vmatrix}}', 1],
      
      // Notación de conjuntos
      set: ['{\\{#1\\}}', 1],
      suchthat: '{\\,|\\,}',
      empty: '{\\varnothing}',
      
      // Lógica
      iff: '{\\Leftrightarrow}',
      implies: '{\\Rightarrow}',
      impliedby: '{\\Leftarrow}',
      
      // Estadística
      E: '{\\mathbb{E}}',
      Var: '{\\mathrm{Var}}',
      Cov: '{\\mathrm{Cov}}',
      corr: '{\\mathrm{corr}}',
      
      // Análisis
      norm: ['{\\left\\lVert#1\\right\\rVert}', 1],
      abs: ['{\\left|#1\\right|}', 1],
      floor: ['{\\left\\lfloor#1\\right\\rfloor}', 1],
      ceil: ['{\\left\\lceil#1\\right\\rceil}', 1],
      
      // Física matemática
      hbar: '{\\hbar}',
      partial: '{\\partial}',
      nabla: '{\\nabla}',
      laplacian: '{\\Delta}'
    },
    
    // Entornos personalizados en español
    environments: {
      proof: ['{\\begin{proof}#1\\end{proof}}', 1],
      theorem: ['{\\begin{theorem}#1\\end{theorem}}', 1],
      lemma: ['{\\begin{lemma}#1\\end{lemma}}', 1],
      proposition: ['{\\begin{proposition}#1\\end{proposition}}', 1],
      corollary: ['{\\begin{corollary}#1\\end{corollary}}', 1],
      definition: ['{\\begin{definition}#1\\end{definition}}', 1],
      example: ['{\\begin{example}#1\\end{example}}', 1],
      remark: ['{\\begin{remark}#1\\end{remark}}', 1],
      // Entornos adicionales en español
      teorema: ['{\\begin{theorem}#1\\end{theorem}}', 1],
      lema: ['{\\begin{lemma}#1\\end{lemma}}', 1],
      proposicion: ['{\\begin{proposition}#1\\end{proposition}}', 1],
      corolario: ['{\\begin{corollary}#1\\end{corollary}}', 1],
      definicion: ['{\\begin{definition}#1\\end{definition}}', 1],
      ejemplo: ['{\\begin{example}#1\\end{example}}', 1],
      observacion: ['{\\begin{remark}#1\\end{remark}}', 1],
      demostracion: ['{\\begin{proof}#1\\end{proof}}', 1]
    }
  },
  
  // Configuración de renderizado SVG (más nítido que CommonHTML)
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
    typeset: false // Renderizado bajo demanda para mejor rendimiento
  },
  
  // Configuración de accesibilidad
  a11y: {
    speech: true,
    subtitles: true,
    braille: false,
    locale: 'es',
    pattern: 'mathjax',
    speechOptions: {
      domain: 'mathjax',
      style: 'default'
    }
  }
};
