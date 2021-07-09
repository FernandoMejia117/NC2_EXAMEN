const express = require('express');
const rutasVino=require('./routes/rutasVino');
const rutasRefrescos=require('./routes/rutasRefrescos');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVino);
app.use('/refrescos',rutasRefrescos);


module.exports = app;