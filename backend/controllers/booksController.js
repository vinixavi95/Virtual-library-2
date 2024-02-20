var booksModel= require('../models/books/booksModel');

module.exports={
    fetchData: function(req, res) {
        booksModel.fetchData(function(data) {
            console.log('RECEBENDO DADOS DO MongoDB ?? ', data);
            res.render('books', { booksData: data });
        });
    }
}
