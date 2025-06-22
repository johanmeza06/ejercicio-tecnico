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

### Pre requisitos

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
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=
DB_PASSWORD=
DB_NAME=prueba_tecnica
# Configuraciones Generales
PORT= 8000
PREFIX=api
NODE_ENV=development
#URL FRONTEND
FRONTEND_URL=http://localhost:5173
```

3. **Ejecutar migraciones y seeders:**

```bash
npm run seed
```

4. **Iniciar servidor de desarrollo:**

```bash
npm run start:dev
```

5. **Documentación de los endpoints SWAGGER:**

```bash
http://localhost:8000/api/swagger
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

## 📊 API Endpoints

### Médicos

- `GET /doctor` - Obtener lista de médicos con paginación

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

## 📃 Documentación word solicitada en el ejercicio

https://docs.google.com/document/d/1U7jpvn0-d4jvA3Ff7uqcB48dH5hX5tCd/edit?usp=sharing&ouid=107420201254208484172&rtpof=true&sd=true

## 📃 DB excel corregida

https://docs.google.com/spreadsheets/d/1B7k2QwXlnkfB347ko0baZA1TtqawR3KT/edit?usp=sharing&ouid=107420201254208484172&rtpof=true&sd=true

## 👨‍💻 Autor

**Johan Meza** - [GitHub](https://github.com/johanmeza06)
