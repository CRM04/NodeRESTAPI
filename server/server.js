require('./config/config')
const express = require('express');
const app = express();
/**
 * Middelware
 * Parse de application/x-www-form-urlencoded
 */
app.use(express.urlencoded({extended:false}))

/**
 * Middelware
 * parse application/json
 */
app.use(express.json())


/**
 * Solicitar data al servidor.
 */
app.get('/usuario', function (req, res) {
  res.json({
      mensaje: "Hola mundo GET"
  });
});


/**
 * Crear un registro nuevo
 */
app.post('/usuario', function(req, resp){
    let body = req.body;
    resp.json({
        form: body
    })
});


/**
 * Actualizar un registro
 */
app.put('/usuario/:idUser', (req, resp) => {
    let id = req.params.idUser;

    resp.json({
        mensaje: "Hola mundo PUT",
        id
    })
});


/**
 * Cambiar el estatus o eliminar un registro de DB
 */
app.delete('/usuario', (req, resp) => {
    resp.json({
        mensaje: "Hola mundo DELETE"
    })
});
 
app.listen(process.env.PORT , () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});