![Faldón de The Bridge](/public/img/faldon-the-bridge.png)

# Templates con Node.js + Express + Pug

## Descripción del proyecto

Este ejercicio tiene como objetivo aplicar los conceptos aprendidos previamente en el curso para crear una pequeña aplicación web utilizando Express y PUG. En este proyecto se han implementado rutas básicas y vistas renderizadas con PUG, siguiendo buenas prácticas de organización mediante el uso de módulos separados. Además, se ha trabajado con la carpeta ``public`` para servir archivos estáticos (CSS, imágenes y JS), y se ha probado el paso de variables a las plantillas PUG para generar vistas dinámicas.

## Estructura del proyecto

- views/: Carpeta donde se encuentran las plantillas PUG que se usan para renderizar las vistas.

- public/: Carpeta destinada a almacenar los archivos estáticos como CSS, imágenes y JS que se utilizan en las vistas.

- app.js: Archivo principal de la aplicación donde se configuran y gestionan las rutas, las vistas y el servidor Express.

## Funcionalidades implementadas

- Se han creado rutas para servir las páginas clásicas de un sitio web:

    * ``GET http://localhost:3000/``: Página de inicio (Home)
    * ``GET http://localhost:3000/about``: ¿Quiénes somos?
    * ``GET http://localhost:3000/location``: ¿Dónde estamos?
    * ``GET http://localhost:3000/mission``: ¿Qué hacemos?
    * ``GET http://localhost:3000/contact``: Contacto

- Renderizado de Vistas con PUG: Cada ruta sirve una vista correspondiente renderizada con PUG. Se ha utilizado el motor de plantillas PUG para crear páginas dinámicas.

- Archivos Estáticos: Los archivos estáticos como CSS, imágenes y archivos JS se sirven correctamente desde la carpeta public. Estos archivos se utilizan en las plantillas PUG para aplicar estilos y efectos visuales.

## Comandos y Ejecución

Para ejecutar la aplicación, sigue estos pasos:

1. Clona este repositorio o descarga el proyecto.

2. Abre una terminal en la carpeta del proyecto.

3. Instala las dependencias necesarias utilizando el siguiente comando:

   ```bash
   npm install
   ```

4. Una vez instaladas las dependencias, ejecuta la aplicación con:

    ```bash
    npm start
    ```

5. Abre tu navegador y accede a http://localhost:3000 para ver la aplicación en funcionamiento.

## Endpoints
Los siguientes son los endpoints disponibles en la aplicación:

* GET /: Página de inicio.

* GET /about: Página "¿Quiénes somos?".

* GET /location: Página "¿Dónde estamos?".

* GET /mission: Página "¿Qué hacemos?".

* GET /contact: Página de contacto.

## Requisitos

- Node.js y npm instalados en tu máquina.

- Un navegador web para visualizar las páginas generadas.

