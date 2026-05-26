# Librería - cliente prueba

Este repositorio contiene la implementación del sistema de diseño para **[cliente prueba]**, construido sobre **Tropikux UI**, una librería de componentes React basada en tokens CSS.

> Este proyecto está completamente configurado y listo para usar. Solo necesitas instalar las dependencias y correr el proyecto. Todo el sistema de componentes, tokens de diseño y documentación interactiva ya está incluido.

---

## Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Correr el proyecto](#correr-el-proyecto)
- [Storybook](#storybook)
- [Uso de componentes](#uso-de-componentes)
- [Sistema de tokens](#sistema-de-tokens)
- [Modo oscuro](#modo-oscuro)
- [Accesibilidad WAI-ARIA](#accesibilidad-wai-aria)

---

## Requisitos

- [Node.js](https://nodejs.org) v18 o superior
- [Git](https://git-scm.com)

---

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/Lalafe03/cliente-prueba.git

# Asegúrate de estar en la carpeta del proyecto
cd cliente-prueba

# Instala las dependencias
npm install
```

---

## Estructura del proyecto

```
src/
├── lib/
│   ├── tropikux-library.js       ← librería compilada
│   └── tropikux-library.css      ← estilos de todos los componentes base
├── tokens/
│   ├── global.css                ← escala de colores, spacing, radius del proyecto
│   ├── theme.css                 ← colores con light y dark mode
│   └── typography.css            ← fuente, tamaños y alturas de línea
└── components/                   ← componentes extra específicos de este proyecto y archivos para visualización en storybook
```

## Abrir proyecto en el navegador

```bash
npm run dev
```

Se abre en `http://localhost:5173`.



## Storybook

Storybook es la herramienta de documentación interactiva de este proyecto. Aquí puedes ver y probar todos los componentes disponibles con el tema visual del proyecto ya aplicado.

```bash
npm run storybook
```

Se abre en `http://localhost:6006`.

### Qué puedes hacer en Storybook

- **Ver todos los componentes** con el tema del proyecto aplicado
- **Explorar las props de cada componente** desde el panel de controles en la parte inferior. Aquí puedes ver todos los valores disponibles para cada prop y probarlos en tiempo real sin escribir código
- **Probar el modo oscuro** con el botón Light/Dark en la barra superior
- **Revisar la documentación automática** en la pestaña Docs, donde se listan todas las props con su tipo y valor por defecto
- **Verificar accesibilidad** en la pestaña Accessibility

> **Tip:** Antes de usar un componente en tu código, explóralo primero en Storybook. Ahí encontrarás exactamente qué props tiene, qué valores acepta y cómo se ve cada combinación.

---

## Uso de componentes

### Importación

```jsx
import { Button, TextField, Avatar, Alert } from "./lib/tropikux-library.js";
```

### Ejemplo básico — Button

```jsx
import { Button } from "./lib/tropikux-library.js";

<Button
  variant="Filled"
  color="primary"
  size="Medium"
  buttonText="Guardar"
  onClick={() => handleGuardar()}
/>;
```

### Cómo cambiar íconos

Todos los componentes que tienen íconos aceptan cualquier componente React que renderice un SVG. Tienes tres opciones:

**Opción 1 — Íconos de Phosphor Icons (ya instalado)**

Explora todos los íconos en [phosphoricons.com](https://phosphoricons.com).

```jsx
import { House, MagnifyingGlass, Bell } from '@phosphor-icons/react';

<Button leadingIcon={House} showLeadingIcon={true} buttonText="Inicio" />
<TextField leadingIcon={MagnifyingGlass} placeholder="Buscar..." />
```

**Opción 2 — Íconos de otra librería**

Cualquier librería que exporte componentes React funciona igual:

```jsx
// Material Icons
import { Home } from "@mui/icons-material";
<Button leadingIcon={Home} showLeadingIcon={true} buttonText="Inicio" />;

// Heroicons
import { HomeIcon } from "@heroicons/react/24/solid";
<Button leadingIcon={HomeIcon} showLeadingIcon={true} buttonText="Inicio" />;
```

Instala la librería que quieras usar:

```bash
npm install @mui/icons-material
# o
npm install @heroicons/react
```

**Opción 3 — SVG propio**

```jsx
const MiIcono = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
);

<Button leadingIcon={MiIcono} showLeadingIcon={true} buttonText="Mi acción" />;
```

> **Importante:** El SVG debe tener `fill="currentColor"` para heredar el color del componente automáticamente.

---

## Sistema de tokens

Los tokens son variables CSS que definen los valores visuales del proyecto: colores, espaciados, tipografía y radios de borde. Están en `src/tokens/` y fueron generados directamente desde las variables de Figma del proyecto.

### `global.css`

Contiene las escalas de valores base: colores del proyecto en escalas de tonos (del 5 al 100), spacing, padding, sizing y corner radius. Son la fuente de la que beben los tokens semánticos.

```css
--global-primary-60: #056cf2;   ← color base del primario
--global-primary-10: #e6f1ff;   ← tono muy claro (fondos sutiles)
--global-spacing-2: 16px;
--global-radius-md: 8px;
```

### `theme.css`

Contiene los tokens semánticos con nombre y propósito claro. Por ejemplo `--primary` no es un color fijo, sino una referencia a `--global-primary-60`. Esto es lo que permite que el sistema de diseño sea coherente: cambiar un valor en `global.css` actualiza automáticamente todos los componentes que lo usen.

```css
--primary: var(--global-primary-60);
--surface: var(--global-primary-5);
--on-surface: var(--global-gray-100);
```

Este archivo también contiene la configuración del modo oscuro dentro del selector `[data-theme="dark"]`.

### `typography.css`

Contiene la fuente del proyecto, los pesos y los tamaños. Las combinaciones de tamaño y altura de línea se exponen como clases CSS (`.text--h1`, `.text--p1`, etc.) que los componentes usan directamente.

> **Nota:** Estos archivos están configurados específicamente para este proyecto. No deben modificarse sin coordinación con el equipo de diseño.

---

## Modo oscuro

El proyecto incluye soporte para modo oscuro. Los colores están definidos en `tokens/theme.css` dentro del selector `[data-theme="dark"]`.

Para activar el modo oscuro:

```js
document.documentElement.setAttribute("data-theme", "dark");
```

Para volver al modo claro:

```js
document.documentElement.setAttribute("data-theme", "light");
```

Ejemplo con un toggle en React:

```jsx
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme}>
      {isDark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
```

Puedes probar el modo oscuro en Storybook con el botón Light/Dark antes de implementarlo.

---

## Accesibilidad WAI-ARIA

WAI-ARIA significa **Web Accessibility Initiative — Accessible Rich Internet Applications**. Es un conjunto de atributos HTML estándar que permiten que las personas con discapacidades visuales o motoras puedan usar interfaces web a través de tecnologías de asistencia como lectores de pantalla (NVDA, VoiceOver, JAWS).

Todos los componentes incluyen los atributos ARIA correspondientes por defecto.

### Qué significa cada atributo

**`role`** — Le dice al lector qué tipo de elemento es cuando el HTML no es suficiente.

```html
<div role="alert">
  → el lector anuncia este contenido inmediatamente
  <div role="progressbar">
    → barra de progreso <span role="checkbox"> → checkbox</span>
  </div>
</div>
```

**`aria-label`** — Describe el propósito de un elemento sin texto visible.

```html
<button aria-label="Cerrar modal">
  <svg>...</svg>
</button>
```

**`aria-hidden`** — Oculta elementos decorativos del lector.

```html
<button>
  <svg aria-hidden="true">...</svg>
  Guardar
</button>
```

**`aria-checked`, `aria-expanded`, `aria-invalid`, `aria-disabled`** — Comunican el estado actual.

```html
<span role="checkbox" aria-checked="true">
  <button aria-expanded="false">
    <input aria-invalid="true" /></button
></span>
```

**`aria-live`** — Anuncia cambios dinámicos en el contenido.

```html
<span aria-live="polite">Cambios guardados</span>
```

### Qué tiene implementado cada componente

| Componente      | ARIA implementado                                                                            |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Button**      | `aria-label` cuando no hay texto visible, `aria-hidden` en íconos                            |
| **TextField**   | `role="group"`, `aria-label`, `aria-invalid`, `aria-disabled`, `aria-live` en helper text    |
| **Checkbox**    | `role="checkbox"`, `aria-checked` (incluye `mixed`), `aria-disabled`, navegación por teclado |
| **Avatar**      | `role="group"`, `aria-label`, `aria-haspopup`, `aria-expanded` en dropdown                   |
| **Asset**       | `role="img"` en tipo Photo, `aria-label`, `aria-hidden` en contenido interno                 |
| **StatusDot**   | `role="status"`, `aria-label`                                                                |
| **CounterDot**  | `aria-label` cuando hay texto visible                                                        |
| **ProgressBar** | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`        |
| **Stepper**     | `aria-label`, `role="group"` en líneas                                                       |
| **Alert**       | `role="alert"`, `aria-live="polite"`                                                         |
| **Title**       | `aria-label` en el contenedor, `aria-hidden` en íconos                                       |
| **ButtonLink**  | `aria-label` cuando no hay texto visible, `aria-hidden` en íconos                            |
