# RedirectLink

Language / Idioma: [English](README.md) | **Español**

![RedirectLink Banner](docs/banner.jpg)

Linktree personal y centro de navegación de **Gustavo Francisco** — un sitio estático, rápido y moderno de una sola página que lista proyectos, enlaces sociales y experiencia profesional. Equipado con un modal interactivo "Sobre mí" y soporte multilenguaje de internacionalización (i18n) listo para producción.

## 🚀 Características

- **Extremadamente Rápido**: Construido con Astro 6, sirviendo prácticamente cero JavaScript al cliente.
- **Componentes Interactivos**: Svelte 5 maneja la lógica interactiva, como el modal "Sobre mí".
- **Soporte Multilenguaje (i18n)**:
  - Rutas dinámicas en inglés (EN) y español (ES).
  - Detección automática y suave del idioma del navegador.
  - Rutas localizadas: `/` para español (por defecto) y `/en/` para inglés.
  - Persistencia de preferencia de idioma manual en `localStorage`.
- **Contenido Dinámico**: Archivo centralizado de configuración de enlaces y biografía como única fuente de verdad.
- **Métricas**: Integración preconfigurada con Vercel Analytics para medir interacciones.
- **Despliegue Listo para Producción**: Configurado para Vercel con cabeceras de seguridad optimizadas y almacenamiento en caché.

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 6](https://astro.build/) (Generación de Sitio Estático - SSG)
- **Componentes de Interfaz**: [Svelte 5](https://svelte.dev/)
- **Iconos**: [Astro Icon](https://github.com/natemoo-re/astro-icon) y `@iconify-json/lucide` / `@iconify-json/simple-icons` para elementos estáticos; `@lucide/svelte` para componentes interactivos.
- **Hosting y Analytics**: [Vercel](https://vercel.com/) y [@vercel/analytics](https://vercel.com/analytics).

## 📁 Estructura del Proyecto

```text
├── .agents/          # Instrucciones de agentes y metadatos del espacio de trabajo
├── openspec/         # Seguimiento del desarrollo guiado por especificaciones (SDD)
├── public/           # Archivos estáticos (favicons, imágenes)
└── src/
    ├── components/   # Componentes de Astro y Svelte
    ├── data/         # Archivos de datos y configuración de traducciones
    │   ├── i18n/     # Diccionarios de traducción multilenguaje (EN/ES)
    │   └── links.json# Configuración de perfil, enlaces y proyectos
    ├── layouts/      # Plantillas principales de página HTML
    ├── pages/        # Enrutado basado en archivos (incluyendo la carpeta /en)
    ├── styles/       # Sistema de estilos (Vanilla CSS)
    └── utils/        # Módulos auxiliares y utilidades
```

## ⚙️ Comenzando

Primero, asegúrate de tener instalado [pnpm](https://pnpm.io/).

### 1. Instalar Dependencias
```bash
pnpm install
```

### 2. Servidor de Desarrollo
Inicia el servidor local con recarga en vivo:
```bash
pnpm dev
```

### 3. Compilación de Producción
Compila el sitio estático optimizado en el directorio `dist/`:
```bash
pnpm build
```

### 4. Vista Previa Local
Previsualiza el sitio de producción localmente:
```bash
pnpm preview
```

## ✏️ Personalización

Todos los detalles personales, datos de proyectos y rutas de redirección están centralizados:
- **Enlaces y Biografía**: Modificá `src/data/links.json` para actualizar los detalles de tu perfil, enlaces de redes sociales y proyectos.
- **Traducciones**: Los textos para páginas y componentes se encuentran en `src/data/i18n/`.

## 🌐 Despliegue

El proyecto está configurado para desplegarse de manera estática y directa en **Vercel**. Las políticas de caché personalizadas, redirecciones y cabeceras de seguridad (como CSP, X-Frame-Options y HSTS) están definidas en el archivo `vercel.json`.
