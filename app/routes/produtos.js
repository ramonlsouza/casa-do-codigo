module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);

        produtosDAO.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connect.end();
    });
    
    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    });

    app.post('/produtos',function(req,res){
        var produto = req.body;

        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);
        produtosDAO.salva(produto,function(err,result){
            res.redirect('/produtos');
        });
    });
}
