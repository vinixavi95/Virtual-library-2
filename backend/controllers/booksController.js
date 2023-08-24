var booksModel= require('../models/books/booksModel');

module.exports={
    fetchData: function(req, res) {
        booksModel.fetchData(function(data) {
            res.render('books', { booksData: data }); // Assuming you have a 'books' view
        });
    }
}
