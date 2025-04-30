const express = require('express')
const path = require('path')

const app = express(); // Incializar servidor con express
const port = 3000; // Puerto a usar por el servidor

//Middleware Morgan
const morgan = require("./middlewares/morgan");

// Logger
/*app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));*/
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

//Definimos rutas
// GET http://localhost:3000/
app.get('/', (req, res) => {
    res.render('home', { title: 'Home'})
})

// GET http://localhost:3000/about
app.get('/about', (req, res) => {
    res.render('about', { title: '¿Quiénes somos?'})
})

// GET http://localhost:3000/location
app.get('/location', (req, res) => {
    res.render('location', { title: '¿De dónde somos?'})
})

// GET http://localhost:3000/mission
app.get('/mission', (req, res) => {
    res.render('mission', { title: '¿Qué hacemos?' })
})

// GET http://localhost:3000/contact
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto'})
})

/*app.get('/', (req, res) => {
    // req: request, res: response
    res.send('Hola hola. Prueba de pug');
});*/


//Arrancar el puerto
const server = app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});