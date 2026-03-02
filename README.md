# Bento Photo Gallery

Aplicación de búsqueda de imágenes con diseño Bento Grid y modo oscuro integrado.

**[🌐 Ver en vivo](https://bento-photo-gallery.vercel.app/)**

---

## Stack Tecnológico

| Tecnología | Porcentaje | Descripción |
|-----------|-----------|-----------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white) | **57.2%** | Tipado estático y mayor seguridad en el código |
| ![SCSS](https://img.shields.io/badge/SCSS-C69ECB?style=flat-square&logo=Sass&logoColor=white) | **35.2%** | Estilos modularizados y reutilizables |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black) | Dependencia | Interfaz de usuario interactiva |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white) | Herramienta | Build tool rápido y optimizado |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black) | **4.8%** | Lógica del cliente |
| ![HTML](https://img.shields.io/badge/HTML-E34C26?style=flat-square&logo=HTML5&logoColor=white) | **2.8%** | Estructura del proyecto |

---

## Características Principales

- 🎨 **Diseño Bento Grid** - Galería con layout dinámico y responsivo
- 🌙 **Tema Oscuro** - Soporte completo para modo oscuro
- 🔍 **Búsqueda de Imágenes** - Filtrado en tiempo real
- ⚡ **Rendimiento** - Optimización de carga y animaciones suaves
- 📱 **Responsive** - Adaptable a cualquier dispositivo

---

## Arquitectura y Métodos

### Hooks Personalizados
- **`usePhotos()`** - Gestiona la obtención y estado de las imágenes
- **`generateBentoPattern()`** - Genera patrones dinámicos para el grid

### Estado Global
- **`useThemeStore`** - Zustand store para persistencia del tema

### Componentes Principales
- `Header` - Barra de navegación con controles
- `BentoGrid` - Componente de galería principal
- `BentoSkeleton` - Skeleton loaders durante la carga

---

## Optimizaciones y Buenas Prácticas

✓ **Type Safety** - TypeScript para prevención de errores  
✓ **Modularización** - Componentes reutilizables y mantenibles  
✓ **State Management** - Zustand para estado global simplificado  
✓ **Code Splitting** - Vite optimiza automáticamente los bundles  
✓ **ESLint & Prettier** - Código consistente y formateado  
✓ **Lazy Loading** - Carga eficiente de recursos  
✓ **Skeleton Loaders** - UX mejorada durante carga de datos