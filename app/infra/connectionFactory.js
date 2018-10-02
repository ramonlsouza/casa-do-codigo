var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'casadocodigo'
    });
}

//wrapper, para que a função nao seja chamada diretamente ao fazer autoload
module.exports = function(){
    return createDBConnection;
}