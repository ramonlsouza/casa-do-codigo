/*
/ coisas que ficam fora do exports rodam só uma vez
/ se cada vez que o modulo for chamado precisar criar novamente, 
/ essa parte deve ser colocada dentro da função
*/

var express = require('express');
var load = require('express-load');

module.exports = function(){
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
}