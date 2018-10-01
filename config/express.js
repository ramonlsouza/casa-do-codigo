/*
/ coisas que ficam fora do exports rodam só uma vez
/ se cada vez que o modulo for chamado precisar criar novamente, 
/ essa parte deve ser colocada dentro da função
*/

var app = require('express')(); 
app.set('view engine', 'ejs');

module.exports = function(){
    return app;
}