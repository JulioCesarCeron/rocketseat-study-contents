const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect('mongodb+srv://admin:admin@cluster0-tve4c.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
 

app.listen(3333);
