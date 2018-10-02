module.exports = function(app){
    app.get('/produtos', function(req,res){
        var connect = app.infra.connectionFactory();

        connect.query('select * from livros', function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connect.end();
    });
    
}
