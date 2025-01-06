const express = require ('express');
const session = require ('express-session');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

// Configuracion de la sesion 
app.use(session ({
    secret:'mi-clave-secreta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
    
}));

// Middleware para mostrar detalles de la sesion 
app.use((req, res, next) => {
    if (req.session) {
        if (!req.session.createAt){
            req.session.createAt = new Date ();
        }
        req.session.lastAccess = new  Date();
    }
    next();
})

// Ruta para mostrar la informacion de la sesion 
app.get('/session', (req, res) => {
    if (req.session){
        const sessionid = req.session.id;
        const createAt = req.session.createAt;
        const lastAccess = req.session.lastAccess;
        const sessionDuration = (new Date() - createAt) / 1000; // duracion de la sesion en segundos 

        //PENDIENTEEEEE

        res.send (
            <h1>Detalles de la sesion </h1>
            <p><strong>ID de </strong></p>
        )
        
    {   
})



