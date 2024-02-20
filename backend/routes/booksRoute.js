var express = require('express');
var router = express.Router();
var booksController= require('../controllers/booksController');

// Rota
router.get('/books', booksController.fetchData);

module.exports = router;