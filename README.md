# ASPIRA - Plataforma de Experiencias en Guatemala

ASPIRA es una plataforma digital para descubrir, personalizar y regalar experiencias únicas y memorables. La aplicación permite a los usuarios explorar una variedad de experiencias en diferentes categorías, desde aventuras emocionantes hasta experiencias gastronómicas exclusivas.

## Características Principales

- **Registro y Autenticación de Usuarios**
  - Soporte para usuarios individuales y empresas
  - Sistema seguro de autenticación con JWT
  - Recuperación de contraseña

- **Catálogo de Experiencias**
  - Exploración por categorías
  - Filtros por ubicación y precio
  - Visualización detallada de cada experiencia
  - Diseño moderno y responsivo
  - Animaciones y transiciones suaves

- **Proceso de Reserva**
  - Selección de fecha y número de participantes
  - Personalización de la experiencia
  - Sistema de mensajes especiales

## Tecnologías Utilizadas

### Backend
- Node.js
- Express
- MongoDB
- JWT para autenticación
- Express Validator

### Frontend
- React 18
- Vite
- Styled Components
- React Router DOM
- Chakra UI
- Framer Motion
- React Icons

## Diseño y UI/UX

### Componentes Principales
- **Hero Section**: Banner principal con video/imagen de fondo y llamado a la acción
- **How It Works**: Sección explicativa del proceso en 3 pasos
- **Featured Experiences**: Grid de experiencias destacadas
- **Testimonials**: Testimonios de usuarios con diseño moderno
- **Footer**: Pie de página con información de contacto y enlaces importantes

### Sistema de Diseño
- Paleta de colores cuidadosamente seleccionada
- Tipografía moderna y legible
- Componentes reutilizables
- Diseño responsivo mobile-first
- Microinteracciones y animaciones sutiles

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

## Configuración del Proyecto

1. Clonar el repositorio:
\`\`\`bash
git clone [URL_DEL_REPOSITORIO]
cd aspira-webapp
\`\`\`

2. Instalar dependencias del backend:
\`\`\`bash
cd backend
npm install
\`\`\`

3. Instalar dependencias del frontend:
\`\`\`bash
cd frontend
npm install
\`\`\`

4. Configurar variables de entorno:
   - Crear archivo `.env` en la carpeta backend
   - Crear archivo `.env` en la carpeta frontend

5. Iniciar el servidor de desarrollo:

Backend:
\`\`\`bash
cd backend
npm run dev
\`\`\`

Frontend:
\`\`\`bash
cd frontend
npm run dev
\`\`\`

## Estructura del Proyecto Frontend

\`\`\`
frontend/
├── src/
│   ├── components/
│   │   ├── common/         # Componentes reutilizables
│   │   │   ├── Button.js
│   │   │   ├── ExperienceCard.js
│   │   │   └── Footer.js
│   │   └── home/          # Componentes específicos de la página principal
│   │       ├── Hero.js
│   │       ├── HowItWorks.js
│   │       ├── FeaturedExperiences.js
│   │       └── Testimonials.js
│   ├── styles/
│   │   ├── theme.js       # Configuración del tema
│   │   └── GlobalStyles.js # Estilos globales
│   └── App.js             # Componente principal
├── public/                # Archivos estáticos
└── package.json
\`\`\`

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
