module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connect);

        produtosBanco.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connect.end();
    });
    
}
