var http = require('http');
var configuracoes = {
    hostname: '127.0.0.1',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
};

var client = http.request(configuracoes, function(res){
    console.log(res.statusCode);

    res.on('data',function(body){
        console.log('body: '+body);
    });
});

var produto = {
    titulo: 'mais sobre node',
    descricao: 'node, javascript e um pouco sobre http',
    preco: 100
};
//só dispara a requisicao com a chamada do metodo end
client.end(JSON.stringify(produto));