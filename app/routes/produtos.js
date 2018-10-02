module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        produtosBanco.lista(connect,function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connect.end();
    });
    
}
