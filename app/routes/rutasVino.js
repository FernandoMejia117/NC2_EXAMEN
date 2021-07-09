const express = require('express');
const controladorVinos = require('../controller/ControladorVinos');

const Router = express.Router();

Router.get('/',controladorVinos.index)
        .post('/',controladorVinos.crear)
        .get('/:key/:value',controladorVinos.buscar,controladorVinos.mostrar)
        .put('/:key/:value',controladorVinos.buscar,controladorVinos.actualizar)
        .delete('/:key/:value',controladorVinos.buscar,controladorVinos.eliminar);

module.exports = Router;