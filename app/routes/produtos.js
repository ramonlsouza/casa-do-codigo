module.exports = function(app){
    app.get('/produtos', function(req,res){
        var mysql = require('mysql');
        var connect = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        });

        connect.query('select * from livros', function(err, results){
            res.send(results);
        });

        connect.end();
    });
    
}
