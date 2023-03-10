const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(connectionString, {useNewUrlParser: true})
.then(() => console.log('mongoDB is connected'))
.catch((err) => console.log(err));

const route = require('./routes/route');
app.use('/', route);

app.listen(port, function () {
    console.log('server is listening on port ' + port);
});