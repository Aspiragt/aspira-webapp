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
- React
- Chakra UI
- React Router
- Axios

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
   - Copiar el archivo `.env.example` a `.env` en la carpeta backend
   - Ajustar las variables según sea necesario

5. Iniciar MongoDB:
\`\`\`bash
mongod
\`\`\`

6. Iniciar el servidor backend:
\`\`\`bash
cd backend
npm run dev
\`\`\`

7. Iniciar el frontend:
\`\`\`bash
cd frontend
npm run dev
\`\`\`

## Deployment en Render.com

### Pasos para el Deployment

1. Crear una cuenta en [Render.com](https://render.com)

2. Conectar con GitHub:
   - Ve a tu dashboard en Render
   - Haz clic en "New +"
   - Selecciona "Blueprint"
   - Conecta tu repositorio de GitHub

3. Configurar el Deployment:
   - Render detectará automáticamente el archivo `render.yaml`
   - Creará dos servicios:
     - Backend (Web Service)
     - Frontend (Static Site)

4. Variables de Entorno:
   - NODE_ENV: production
   - PORT: 5001

5. Conectar Dominio:
   - En GoDaddy:
     1. Ve a DNS Management
     2. Añade un registro CNAME:
        - Type: CNAME
        - Host: www
        - Points to: [tu-app].onrender.com
        - TTL: 1 Hour
     3. Añade un registro A:
        - Type: A
        - Host: @
        - Points to: 76.76.21.21
        - TTL: 1 Hour

### Desarrollo Local

```bash
# Instalar dependencias
cd frontend && npm install
cd backend && npm install

# Iniciar en desarrollo
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && npm run dev
```

La aplicación estará disponible en:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## Estructura del Proyecto

\`\`\`
aspira-webapp/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    └── package.json
\`\`\`

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
