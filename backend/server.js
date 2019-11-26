const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');


const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors())
app.use(express.json()) // no need for body-parser

const uri = process.env.ATLAS_URI;
try {

    mongoose.connect(uri, {
        useNewUrlParser: true, useCreateIndex: true,
        useUnifiedTopology: true
    });
}
catch (err) {
    console.log('Error connecting to the database');
}
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
});

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})