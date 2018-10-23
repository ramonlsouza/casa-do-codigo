module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);

        produtosDAO.lista(function(err, results){
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });

        connect.end();
    });

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    });

    app.post('/produtos',function(req,res){
        var produto = req.body;

        //utilizando express-validator para realizar validacao dos campos
        var validaTitulo = req.assert('titulo', 'Título é obrigatório');
        validaTitulo.notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('produtos/form');
            return;
        }
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);
        produtosDAO.salva(produto,function(err,result){
            res.redirect('/produtos');
        });
    });
}
