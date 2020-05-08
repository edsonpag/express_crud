const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://edsonpagani:edsonpagani@cluster0-blmxi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);


app.listen(3000);