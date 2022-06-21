const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();

app.use(express.static('public'));


// Ruts 
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/detalle-del-producto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle-del-producto.html'));
});

app.get('/carrito-de-compras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'));
});

app.get('/seccion', (req, res) => {
    res.sendFile(path.join(__dirname, './views/seccion.html'));
});
app.get('/formulario-login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/formulario.html'));
});


/* ------Servidor en escucha ---*/
app.listen(3005, () => {
    console.log('Servidor corriendo');
});