const mongoose = require('mongoose');

const RefrescosSchema = new mongoose.Schema({
    codigo:{
        type: Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    fecha:{
        type: Date,
        required:true
    }
})

const Refresco = mongoose.model('Refresco', RefrescosSchema);

module.exports = Refresco;
