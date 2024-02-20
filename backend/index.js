const express = require('express');
const mongoose = require("mongoose");
const app = express();
const booksRoute = require('./routes/booksRoute'); // Atualize o caminho conforme necessário

require("dotenv").config();
// It is recommended to use an environment variable so that your credentials will not be exposed when you are uploading your repository online/ dotenv npm package can be used to provide environment variables

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Conectado ao banco de dados MongoDB'));

app.use('/api', booksRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

var connected = mongoose.connection;

// var booksRoute= require('../backend/routes/booksRoute');

connected.on('connected', function() {
    console.log('database is connected successfully');
});

connected.on('disconnected',function(){
    console.log('database is disconnected successfully');
});

connected.on('error', (err) => {
    console.error('connection error:', err);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`));

module.exports = connected;
