module.exports = function(app){
    app.get('/', function(req,res){
        var connect = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connect);

        produtosDAO.lista(function(err, results){
            res.render('home/index',{livros: results});
        });
        connect.end();
    });
}