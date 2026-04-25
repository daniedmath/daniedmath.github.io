# Guía Completa de Entornos Personalizados de MathJax en Español

## Resumen de Implementación ✅

He implementado un sistema completo de entornos personalizados de MathJax en español para tu página web. Esto incluye:

### Archivos Creados/Modificados

1. **styles.css**: Estilos CSS para cada tipo de entorno
2. **mathjax-config.js**: Configuración de entornos en español e inglés
3. **mathjax-environments.js**: Procesador JavaScript de entornos
4. **demos.html**: Página de demostración con ejemplos completos
5. **sitemap.xml**: Actualizado con la nueva página

## Entornos Personalizados Disponibles 📚

### En Inglés
- `\begin{theorem} ... \end{theorem}` - Teorema
- `\begin{lemma} ... \end{lemma}` - Lema
- `\begin{proposition} ... \end{proposition}` - Proposición
- `\begin{corollary} ... \end{corollary}` - Corolario
- `\begin{definition} ... \end{definition}` - Definición
- `\begin{example} ... \end{example}` - Ejemplo
- `\begin{remark} ... \end{remark}` - Observación
- `\begin{proof} ... \end{proof}` - Demostración

### En Español
- `\begin{teorema} ... \end{teorema}` - Teorema
- `\begin{lema} ... \end{lema}` - Lema
- `\begin{proposicion} ... \end{proposicion}` - Proposición
- `\begin{corolario} ... \end{corolario}` - Corolario
- `\begin{definicion} ... \end{definicion}` - Definición
- `\begin{ejemplo} ... \end{ejemplo}` - Ejemplo
- `\begin{observacion} ... \end{observacion}` - Observación
- `\begin{demostracion} ... \end{demostracion}` - Demostración

## Uso Básico 🎯

### Sintaxis en HTML

```html
<div class="math-env theorem">
  <div class="math-env-title">Teorema</div>
  <div class="math-env-content">
    <!-- Tu contenido matemático aquí -->
    $$\text{Tu fórmula aquí}$$
  </div>
</div>
```

### Ejemplo Completo

```html
<div class="math-env theorem">
  <div class="math-env-title">Teorema Fundamental del Cálculo</div>
  <div class="math-env-content">
    <p><strong>Enunciado:</strong> Sea $f: [a,b] \to \R$ continua.</p>
    $$F(x) = \int_a^x f(t) \, \dif t$$
    <p>Entonces $F'(x) = f(x)$.</p>
  </div>
</div>
```

## Sistema de Colores 🎨

Cada entorno tiene su propio esquema de colores:

- **Teorema**: Azul (`#2196F3`) - Fondo azul claro
- **Lema**: Amarillo (`#FFC107`) - Fondo amarillo claro
- **Proposición**: Púrpura (`#9C27B0`) - Fondo púrpura claro
- **Corolario**: Verde (`#4CAF50`) - Fondo verde claro
- **Definición**: Naranja (`#FF9800`) - Fondo naranja claro
- **Ejemplo**: Azul claro (`#03A9F4`) - Fondo azul muy claro
- **Observación**: Rosa (`#E91E63`) - Fondo rosa claro
- **Demostración**: Gris (`#607D8B`) - Fondo gris con borde punteado

## Ejemplos del Archivo demos.html 💡

### 1. Teorema Fundamental del Cálculo

```html
<div class="math-env theorem">
  <div class="math-env-title">Teorema Fundamental del Cálculo</div>
  <div class="math-env-content">
    <p><strong>Enunciado:</strong> Sea $f: [a,b] \to \R$ continua.</p>
    $$F(x) = \int_a^x f(t) \, \dif t$$
    <p>Entonces $F'(x) = f(x)$.</p>
  </div>
</div>
```

### 2. Demostración Estructurada

```html
<div class="math-env proof">
  <div class="math-env-title">Demostración</div>
  <div class="math-env-content">
    <p><strong>Parte 1:</strong> Demostrar derivabilidad...</p>
    $$F'(x_0) = \lim_{h \to 0} \frac{F(x_0 + h) - F(x_0)}{h}$$
    <p><strong>Parte 2:</strong> Fórmula de Newton-Leibniz...</p>
    <p><strong>Conclusión:</strong> ∎</p>
  </div>
</div>
```

### 3. Definición

```html
<div class="math-env definition">
  <div class="math-env-title">Definición</div>
  <div class="math-env-content">
    <p>Una función $F$ se llama <strong>antiderivada</strong> de $f$ si...</p>
  </div>
</div>
```

### 4. Ejemplo Aplicado

```html
<div class="math-env example">
  <div class="math-env-title">Ejemplo</div>
  <div class="math-env-content">
    <p>Calcular $\int_0^1 x^2 \, \dif x$.</p>
    <p><strong>Solución:</strong> Una antiderivada es $F(x) = \frac{x^3}{3}$.</p>
    $$\int_0^1 x^2 \, \dif x = \frac{1}{3}$$
  </div>
</div>
```

## Características Avanzadas 🚀

### 1. Numeración Automática

El sistema `mathjax-environments.js` puede numerar automáticamente los entornos:

```javascript
// Agregar numeración a teoremas, lemas, etc.
MathJaxEnvironments.addEnvironmentNumbering();
```

### 2. Referencias Cruzadas

Crear enlaces entre entornos:

```javascript
const referencia = MathJaxEnvironments.createReference(
  'teorema-1', 
  'Teorema 1.1'
);
```

### 3. Creación Dinámica de Entornos

Crear entornos desde JavaScript:

```javascript
const teorema = MathJaxEnvironments.createCustomEnvironment(
  'theorem',
  'Contenido del teorema',
  'Mi Teorema Personalizado'
);
document.body.appendChild(teorema);
```

### 4. Procesamiento de Pasos de Demostración

Estructurar demostraciones largas en pasos:

```javascript
MathJaxEnvironments.processProofSteps();
```

## Uso de Macros Personalizados 🔧

Los entornos funcionan perfectamente con los macros que configuramos:

```html
<div class="math-env theorem">
  <div class="math-env-title">Teorema</div>
  <div class="math-env-content">
    <p>Para $x \in \R$ y $n \in \N$:</p>
    $$\norm{\vec{v}} = \sqrt{\vec{v} \cdot \vec{v}}$$
    <p>La derivada es $\dd{f}{x}$ y el gradiente es $\grad$.</p>
  </div>
</div>
```

## Mejores Prácticas 📋

### 1. Estructura de Documentos

```html
<!-- 1. Definiciones primero -->
<div class="math-env definition">...</div>

<!-- 2. Lemas auxiliares -->
<div class="math-env lemma">...</div>

<!-- 3. Teorema principal -->
<div class="math-env theorem">...</div>

<!-- 4. Demostración -->
<div class="math-env proof">...</div>

<!-- 5. Corolarios -->
<div class="math-env corollary">...</div>

<!-- 6. Ejemplos -->
<div class="math-env example">...</div>

<!-- 7. Observaciones -->
<div class="math-env remark">...</div>
```

### 2. Uso de Macros

- ✅ Usar macros para notación repetitiva
- ✅ Mantener consistencia en todo el documento
- ✅ Aprovechar los 50+ macros configurados

### 3. Accesibilidad

- ✅ Proporcionar descripciones textuales
- ✅ Usar `\text{}` para palabras en fórmulas
- ✅ Estructurar contenido lógicamente

### 4. Responsividad

- ✅ Los entornos son responsivos por defecto
- ✅ Funcionan en móviles y tablets
- ✅ Se adaptan a diferentes anchos de pantalla

## Ejemplos Adicionales 📝

### Desigualdad de Cauchy-Schwarz

```html
<div class="math-env theorem">
  <div class="math-env-title">Desigualdad de Cauchy-Schwarz</div>
  <div class="math-env-content">
    <p>Para $\vec{u}, \vec{v} \in \R^n$:</p>
    $$|\vec{u} \cdot \vec{v}| \leq \norm{\vec{u}} \cdot \norm{\vec{v}}$$
  </div>
</div>
```

### Teorema de Green

```html
<div class="math-env theorem">
  <div class="math-env-title">Teorema de Green</div>
  <div class="math-env-content">
    $$\oint_{\partial D} (P \, \dif x + Q \, \dif y) = \iint_D \left( \pd{Q}{x} - \pd{P}{y} \right) \, \dif A$$
  </div>
</div>
```

## Integración con JavaScript 🔗

### Renderizado bajo demanda

```javascript
// Renderizar MathJax en entornos específicos
MathJaxUtils.renderMathJax();
```

### Crear entornos interactivos

```javascript
function crearTeoremaInteractivo(titulo, contenido) {
  const entorno = MathJaxEnvironments.createCustomEnvironment(
    'theorem',
    contenido,
    titulo
  );
  document.getElementById('contenedor').appendChild(entorno);
  MathJaxUtils.renderMathJax();
}
```

## Personalización 🎨

### Modificar Colores

Edita `styles.css`:

```css
.math-env.theorem {
  background: #f0f7ff;
  border-left-color: #2196F3;
}
```

### Agregar Nuevos Entornos

En `mathjax-config.js`:

```javascript
environments: {
  conjecture: ['{\\begin{conjecture}#1\\end{conjecture}}', 1],
  axioms: ['{\\begin{axioms}#1\\end{axioms}}', 1]
}
```

En `mathjax-environments.js`:

```javascript
const environmentNames = {
  'conjecture': 'Conjetura',
  'axioms': 'Axiomas'
};
```

## Solución de Problemas 🔧

### Problema: Entornos no se visualizan correctamente

**Solución**: Asegúrate de que los archivos CSS y JavaScript estén cargados en el orden correcto:

```html
<link rel="stylesheet" href="styles.css" />
<script src="mathjax-config.js"></script>
<script src="mathjax-environments.js" defer></script>
```

### Problema: MathJax no renderiza dentro de entornos

**Solución**: Llama al renderizado explícitamente:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  MathJaxUtils.renderMathJax();
});
```

### Problema: Colores no se aplican

**Solución**: Verifica que las clases CSS estén correctamente definidas y que no haya conflictos con otros estilos.

## Ventajas del Sistema ✨

1. **Profesional**: Presentación académica de alto nivel
2. **Consistente**: Mismo estilo en todo el sitio
3. **Responsivo**: Funciona en todos los dispositivos
4. **Accesible**: Mejor lectura para usuarios
5. **Flexible**: Fácil de personalizar y extender
6. **Bilingüe**: Soporte para español e inglés
7. **Automatizado**: Procesamiento JavaScript automático

## Conclusión 🎯

Con este sistema de entornos personalizados, tu página web ahora tiene:

- ✅ **8 tipos de entornos** en español e inglés
- ✅ **Estilos profesionales** con esquema de colores
- ✅ **Ejemplos completos** en demos.html
- ✅ **Integración total** con MathJax
- ✅ **Soporte para macros** personalizados
- ✅ **Funcionalidades JavaScript** avanzadas
- ✅ **Documentación completa** para uso

Esto te permite presentar contenido matemático de manera profesional, como en libros y papers académicos, mejorando significativamente la calidad y presentación de tu blog de matemáticas.

---

**Para ver los ejemplos en acción**, visita `demos.html` en tu sitio web.