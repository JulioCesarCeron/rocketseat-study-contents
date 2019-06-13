const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jorge:jorge@cluster0-ii4eh.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

app.use(require('./routes'))

app.listen(3333);