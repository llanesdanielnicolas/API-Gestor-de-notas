# API-Gestor-de-notas

Una descripción breve y concisa de qué hace este proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

* **Node.js** (Versión sugerida: v18 o superior)
* **npm**

## Instalación y Configuración

Sigue estos pasos para clonar el proyecto y ponerlo en marcha localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/llanesdanielnicolas/API-Gestor-de-notas
   ```

2. **Instalar las dependencias:**
   Este paso descargará automáticamente todos los paquetes necesarios y volverá a crear la carpeta `node_modules`.
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   * Crea el archivo: `.env`
   * Abre `.env` y completa los datos requeridos (puerto, nombre de la base de datos, user, password y jwt-secret).

4. **Crear la base de datos:**
   * Crea una base de datos con el mismo nombre que el archivo .env con cualquier SGBD

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo local, ejecuta el siguiente comando:

```bash
npm run dev
```

Una vez ejecutado, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto.
