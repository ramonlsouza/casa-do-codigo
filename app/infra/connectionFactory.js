var mysql = require('mysql');

function createDBConnection(){
    if(!process.env.NODE_ENV){
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        });
    }

    if(process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'casadocodigo_test'
        });
    }
}

//wrapper, para que a função nao seja chamada diretamente ao fazer autoload
module.exports = function(){
    return createDBConnection;
}