module.exports = function(app){
    app.get('/produtos', function(req,res,next){
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);

        produtosDAO.lista(function(err, results){
            if(err){
                return next(err);
            }
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
        res.render('produtos/form', {errosValidacao:{}, produto: {}});
    });

    app.post('/produtos',function(req,res){
        var produto = req.body;

        //utilizando express-validator para realizar validacao dos campos
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();

        var erros = req.validationErrors();

        if(erros){
            res.format({
                html: function(){
                    res.status(400).render('produtos/form', {errosValidacao: erros, produto: produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            return;
        }
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);
        produtosDAO.salva(produto,function(err,result){
            res.redirect('/produtos');
        });
    });
}
