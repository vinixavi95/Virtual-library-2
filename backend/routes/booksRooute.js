var express = require('express');
var router = express.Router();
var booksController= require('../controllers/booksController');

router.get('/books-data', booksController.fetchData);

module.exports = router;