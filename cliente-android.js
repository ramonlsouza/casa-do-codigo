var http = require('http');
var configuracoes = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configuracoes, function(res){
    res.on('data',function(body){
        console.log('body: '+body);
    });
});