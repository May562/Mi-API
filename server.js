const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", Users)

mongoose.connect(
    "mongodb://localhost/usuarios",
    {userNewUrlParser: true },
    (err, res) => {
        err && console.log("Error conectando a la bd");
        app.listen(4000, () => {
            console.log("Servidor corriendo en http://localhost:4000");
        });
    }
);
