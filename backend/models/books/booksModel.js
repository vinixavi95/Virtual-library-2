const mongoose = require("mongoose");
// var db = require('../Virtual-library-2');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    published: String,
    synopsis: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports={
     
    fetchData:function(callback){
       const booksData=Book.find({});
       booksData.exec(function(err, data){
           if(err) throw err;
           return callback(data);
       })
    }
}