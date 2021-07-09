const ModeloRefrescos = require('../models/ModeloRefrescos');

function index2(req,res){
    ModeloRefrescos.find({})
    .then(refrescos => {
        if(refrescos.length)return res.status(200).send({refrescos});
        return res.status(204).send({message: 'NO SE VISUALIZAN DATOS'});
    }).catch(error => res.status(500).send({error}));
}

function crearRefresco(req,res){
    new ModeloRefrescos(req.body).save()
    .then(refrescos => res.status(200).send({refrescos}))
    .catch(error => res.status(500).send({error}));
}

function buscar(req,res,next){
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloRefrescos.find(consulta).then(refrescos => {
        if (!refrescos.length)return next();
        req.body.refrescos = refrescos;
        return next();
    }).catch(error => {
        req.body.error = error;
        next(); 
})
}

function mostrarRefresco(req,res){
    if(req.body.error)return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'NO SE ENCONTRO EL REFRESCO'});
    let refrescos=req.body.refrescos;
    return res.status(200).send({refrescos});
}


function actualizarRefresco(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'NO SE PUEDE ACTUALIZAR EL REFRESCO'});
    let refrescosObj = req.body.refrescos[0];
    refrescosObj = Object.assign(refrescosObj,req.body);
    refrescosObj.save().then(refrescosAlta =>{
        res.status(200).send({message: 'Refresco Actualizado',refrescosAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminarRefresco(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'NO SE PUEDE ELIMINAR'});
    req.body.refrescos[0].remove().then(refrescosEliminar => {
        res.status(200).send({message: 'Se Elimino Correctamente', refrescosEliminar});
    }).catch(error => res.status(500).send({message: 'No logro Eliminar', error}));

} 
module.exports={
    index2,
    crearRefresco,
    buscar,
    mostrarRefresco,
    actualizarRefresco,
    eliminarRefresco

  
}