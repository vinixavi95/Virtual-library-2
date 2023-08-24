const express = require('express');

require("dotenv").config();
// It is recommended to use an environment variable so that your credentials will not be exposed when you are uploading your repository online/ dotenv npm package can be used to provide environment variables

const app = express();

app.get('/', (req, res) => res.send('Conectarei o Banco de Dados MongoDB'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`));

// node index.js - COMANDO PARA RODAR O BACKEND - NAVEGAR ATÉ backend folder
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

var connected = mongoose.connection;

connected.on('connected', function() {
    console.log('database is connected successfully');
});

connected.on('disconnected',function(){
    console.log('database is disconnected successfully');
});

connected.on('error', console.error.bind(console, 'connection error:'));

module.exports = connected;
