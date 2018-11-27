module.exports = function(app){
    app.get("/promocoes/form",function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);

        produtosDAO.lista(function(err, results){
            res.render('promocoes/form',{lista:results});
        });
        connect.end();
    });

    app.post("/promocoes",function(req,res){
        var promocao = req.body;
        console.log(promocao);
        res.redirect('/promocoes/form');
    });
}