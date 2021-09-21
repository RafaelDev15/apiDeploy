
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();


class App{
    constructor(){
        this.server = express();

        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.server.listen(3333);

        this.middlewares();
        this.routes();
    }

    middlewares(){

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;