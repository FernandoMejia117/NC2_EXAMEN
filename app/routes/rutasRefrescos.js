const express = require('express');
const controladorRefrescos = require('../controller/ControladorRefrescos');

const Router = express.Router();

Router.get('/',controladorRefrescos.index2)
        .post('/',controladorRefrescos.crearRefresco)
        .get('/:key/:value',controladorRefrescos.buscar,controladorRefrescos.mostrarRefresco)
        .put('/:key/:value',controladorRefrescos.buscar,controladorRefrescos.actualizarRefresco)
        .delete('/:key/:value',controladorRefrescos.buscar,controladorRefrescos.eliminarRefresco);

module.exports = Router;