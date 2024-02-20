const mongoose = require("mongoose");
// var db = require('../Virtual-library-2');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    published: String,
    synopsis: String
}, { collection : 'livros' });

const Book = mongoose.model('Book', bookSchema);

module.exports={

    fetchData: async function (callback) {
        try {
            const booksData = await Book.find({});
            console.log('CHEGA NO MODELO???? ', booksData);
            callback(booksData);
        } catch (err) {
            console.error('Error fetching data from MongoDB:', err);
            console.error(err);
            callback(null); // ou outra lógica de tratamento de erro
        }
    }
    
}