const mongoose = require('mongoose');
const CONFIG = require('../config/config')
module.exports={
    connection: null,
    connect: function(){
        if (this.connection) return this.connection
        return mongoose.connect(CONFIG.BD).then(conexion => {
            this.connection = conexion;
            console.log('La conexion se realizo correctamente');
        }).catch(error => console.log(error));
            
    }
}