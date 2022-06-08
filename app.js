const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();

app.use(express.static('public'));



app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, './views/login.html'));
});


/* ------Servidor en escucha ---*/
app.listen(3005, () => {
    console.log('Servidor corriendo');
});