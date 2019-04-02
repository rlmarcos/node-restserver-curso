require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Configuración global de rutas
app.use( require('./routes/index') );

let settings = {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true};

mongoose.connect(process.env.URLDB, settings, (err, res) => {
	if(err) throw err;

	console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => console.log('Server listening on port:', process.env.PORT));