// Procesador de entornos personalizados de MathJax en español
(function() {
  'use strict';

  // Configuración de nombres de entornos en español
  const environmentNames = {
    'theorem': 'Teorema',
    'lemma': 'Lema',
    'proposition': 'Proposición',
    'corollary': 'Corolario',
    'definition': 'Definición',
    'example': 'Ejemplo',
    'remark': 'Observación',
    'proof': 'Demostración',
    // Alias en español
    'teorema': 'Teorema',
    'lema': 'Lema',
    'proposicion': 'Proposición',
    'corolario': 'Corolario',
    'definicion': 'Definición',
    'ejemplo': 'Ejemplo',
    'observacion': 'Observación',
    'demostracion': 'Demostración'
  };

  // Función para procesar entornos personalizados
  function processCustomEnvironments() {
    // Buscar todos los entornos personalizados en el contenido
    const patterns = [
      /\\begin\{(theorem|lemma|proposition|corollary|definition|example|remark|proof|teorema|lema|proposicion|corolario|definicion|ejemplo|observacion|demostracion)\}([\s\S]*?)\\end\{\1\}/g
    ];

    let content = document.body.innerHTML;

    patterns.forEach(pattern => {
      content = content.replace(pattern, (match, envType, envContent) => {
        const displayName = environmentNames[envType] || envType;
        const envClass = envType.length > 10 ? envType.substring(0, 10) : envType; // Normalizar nombre de clase
        
        // Crear el contenedor HTML con estilos
        return `
          <div class="math-env ${envClass}">
            <div class="math-env-title">${displayName}</div>
            <div class="math-env-content">
              ${processMathContent(envContent)}
            </div>
          </div>
        `;
      });
    });

    document.body.innerHTML = content;
  }

  // Función para procesar contenido matemático dentro de entornos
  function processMathContent(content) {
    // Procesar Q.E.D. al final de demostraciones
    content = content.replace(/\\qed\s*$/g, '<span class="qed">∎</span>');
    content = content.replace(/\\QED\s*$/g, '<span class="qed">∎</span>');
    content = content.replace(/\\blacksquare\s*$/g, '<span class="qed">∎</span>');
    
    return content;
  }

  // Función para inicializar los entornos personalizados
  function initCustomEnvironments() {
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', processCustomEnvironments);
    } else {
      processCustomEnvironments();
    }
  }

  // Función para crear entornos personalizados dinámicamente
  function createCustomEnvironment(type, content, title = null) {
    const displayName = title || environmentNames[type] || type;
    const envClass = type.length > 10 ? type.substring(0, 10) : type;
    
    const container = document.createElement('div');
    container.className = `math-env ${envClass}`;
    
    const titleElement = document.createElement('div');
    titleElement.className = 'math-env-title';
    titleElement.textContent = displayName;
    
    const contentElement = document.createElement('div');
    contentElement.className = 'math-env-content';
    contentElement.innerHTML = processMathContent(content);
    
    container.appendChild(titleElement);
    container.appendChild(contentElement);
    
    return container;
  }

  // Función para añadir numeración a entornos
  function addEnvironmentNumbering() {
    const envTypes = ['theorem', 'lemma', 'proposition', 'corollary', 'definition'];
    const counters = {};
    
    envTypes.forEach(type => {
      counters[type] = 0;
      const environments = document.querySelectorAll(`.math-env.${type}`);
      environments.forEach((env, index) => {
        counters[type]++;
        const title = env.querySelector('.math-env-title');
        if (title) {
          const numberSpan = document.createElement('span');
          numberSpan.className = 'math-env-number';
          numberSpan.textContent = ` ${counters[type]}.${index + 1}`;
          title.appendChild(numberSpan);
        }
      });
    });
  }

  // Función para crear referencias cruzadas
  function createReference(envId, referenceText) {
    const link = document.createElement('a');
    link.href = `#${envId}`;
    link.className = 'math-ref';
    link.textContent = referenceText;
    link.id = `ref-${envId}`;
    return link;
  }

  // Función para procesar pasos de demostración
  function processProofSteps() {
    const proofs = document.querySelectorAll('.math-env.proof .math-env-content');
    proofs.forEach(proof => {
      const content = proof.innerHTML;
      // Buscar patrones de pasos en la demostración
      const steps = content.split(/(?=\n\s*\d+\.|\n\s*Paso|\n\s*Step)/);
      
      if (steps.length > 1) {
        const container = document.createElement('div');
        container.className = 'proof-container';
        
        steps.forEach((step, index) => {
          if (step.trim()) {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'proof-step';
            stepDiv.innerHTML = step.trim();
            container.appendChild(stepDiv);
          }
        });
        
        proof.innerHTML = '';
        proof.appendChild(container);
      }
    });
  }

  // Inicializar cuando el documento esté listo
  initCustomEnvironments();

  // Exportar funciones para uso global
  window.MathJaxEnvironments = {
    createCustomEnvironment,
    addEnvironmentNumbering,
    createReference,
    processProofSteps,
    environmentNames
  };

  // Procesar después de que MathJax termine de renderizar
  if (typeof MathJax !== 'undefined') {
    MathJax.startup.promise.then(() => {
      addEnvironmentNumbering();
      processProofSteps();
    });
  }
})();