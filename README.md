# 🏥 Sistema de Gestión de Médicos

Aplicación web completa para la gestión y búsqueda de médicos, desarrollada con React, NestJS y PostgreSQL.

## 🚀 Tecnologías Utilizadas

### Frontend

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Query** - Gestión de estado del servidor
- **React Hook Form** - Manejo de formularios
- **DevExtreme** - Componentes de UI avanzados
- **React Router** - Enrutamiento

### Backend

- **NestJS** - Framework de Node.js
- **TypeScript** - Tipado estático
- **PostgreSQL** - Base de datos
- **Sequelize** - ORM
- **JWT** - Autenticación

## 📁 Estructura del Proyecto

```
PRUEBA TECNICA/
├── frontend/          # Aplicación React
│   ├── src/
│   │   ├── api/       # Servicios de API
│   │   ├── components/ # Componentes reutilizables
│   │   ├── pages/     # Páginas de la aplicación
│   │   └── layout/    # Layouts
│   └── package.json
├── backend/           # API NestJS
│   ├── src/
│   │   ├── doctor/    # Módulo de médicos
│   │   ├── region/    # Módulo de regiones
│   │   ├── specialty/ # Módulo de especialidades
│   │   └── entities/  # Entidades de base de datos
│   └── package.json
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- PostgreSQL
- npm o yarn

### Backend

1. **Instalar dependencias:**

```bash
cd backend
npm install
```

2. **Configurar base de datos:**

```bash
# Crear archivo .env en backend/
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=tu_usuario
DATABASE_PASSWORD=tu_password
DATABASE_NAME=medicos_db
```

3. **Ejecutar migraciones y seeders:**

```bash
npm run migration:run
npm run seed:run
```

4. **Iniciar servidor de desarrollo:**

```bash
npm run start:dev
```

### Frontend

1. **Instalar dependencias:**

```bash
cd frontend
npm install
```

2. **Configurar variables de entorno:**

```bash
# Crear archivo .env en frontend/
VITE_API_BACKEND_URL=http://localhost:3000
```

3. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

## 🎯 Funcionalidades

### ✅ Implementadas

- ✅ Búsqueda de médicos por nombre
- ✅ Filtrado por especialidad
- ✅ Filtrado por región
- ✅ Paginación de resultados
- ✅ Ordenamiento de columnas
- ✅ Redimensionamiento de columnas
- ✅ Interfaz responsive
- ✅ Manejo de errores
- ✅ Estados de carga

### 🔄 En Desarrollo

- 🔄 Autenticación de usuarios
- 🔄 CRUD completo de médicos
- 🔄 Exportación de datos
- 🔄 Dashboard con estadísticas

## 📊 API Endpoints

### Médicos

- `GET /doctor` - Obtener lista de médicos con paginación
- `GET /doctor/:id` - Obtener médico por ID

### Regiones

- `GET /region` - Obtener todas las regiones

### Especialidades

- `GET /specialty` - Obtener todas las especialidades

## 🎨 Características de la UI

- **Diseño moderno** con Tailwind CSS
- **Responsive** para móviles y desktop
- **Componentes reutilizables**
- **Feedback visual** para todas las acciones
- **Manejo de errores** elegante
- **Estados de carga** informativos

## 🚀 Despliegue

### Frontend (Vercel/Netlify)

```bash
cd frontend
npm run build
```

### Backend (Railway/Render)

```bash
cd backend
npm run build
npm start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Johan Meza** - [GitHub](https://github.com/johanmeza06)

---

⭐ Si este proyecto te ayuda, ¡dale una estrella!
