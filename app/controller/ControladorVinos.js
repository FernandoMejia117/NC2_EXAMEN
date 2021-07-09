const ModeloVinos = require('../models/ModeloVinos');

function index(req,res){
    console.log('ok');
    ModeloVinos.find({})
    .then(vinos => {
        if(vinos.length)return res.status(200).send({vinos});
        return res.status(204).send({message: 'No hay datos papu'});
    }).catch(error => res.status(500).send({error}));
}

function crear(req,res){
    new ModeloVinos(req.body).save()
    .then(vinos => res.status(200).send({vinos}))
    .catch(error => res.status(500).send({error}));
}


function buscar(req,res,next){
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloVinos.find(consulta).then(vinos => {
        if (!vinos.length)return next();
        req.body.vinos = vinos;
        return next();
    }).catch(error => {
        req.body.error = error;
        next(); 
})
}

function mostrar(req,res){
    if(req.body.error)return res.status(500).send({error});
    if(!req.body.vinos) return res.status(404).send({message:'NO SE ENCONTRO EL PRODUCTO'});
    let vinos=req.body.vinos;
    return res.status(200).send({vinos});
}


function actualizar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.vinos) return res.status(404).send({message:'NO SE PUEDE ACTUALIZAR'});
    let vinosObj = req.body.vinos[0];
    vinosObj = Object.assign(vinosObj,req.body);
    vinosObj.save().then(vinosAlta =>{
        res.status(200).send({message: 'Registro Actualizado',vinosAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.vinos) return res.status(404).send({message:'NO SE PUEDE ELIMINAR'});
    req.body.vinos[0].remove().then(vinosEliminar => {
        res.status(200).send({message: 'Se Elimino Correctamente', vinosEliminar});
    }).catch(error => res.status(500).send({message: 'No logro Eliminar', error}));

}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}