const app = require('./app/app');
const CONFIG = require('./app/config/config');
const morgan = require('morgan');
const conexion = require('./app/config/conexion')

conexion.connect();

app.use(morgan('dev'));

app.listen(CONFIG.PORT,function(erro){
    if(erro) return console.log(error);
    console.log(`Servidor en el puerto ${CONFIG.PORT}`);
});

