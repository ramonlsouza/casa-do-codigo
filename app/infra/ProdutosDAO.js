//inicia com letra maiuscula (classe)
//DAO: Data Access Object
function ProdutosDAO(connection){
    //quando tiver _ no inicio do nome do atributo, ele nao deve ser utilizado fora da classe
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
}

module.exports = function(){
    return ProdutosDAO;
}