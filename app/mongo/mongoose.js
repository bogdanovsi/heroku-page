const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mvc-mongo', {useNewUrlParser: true, useUnifiedTopology: true });

const { Book } = require('../models');

module.exports.findOneBook = async function findOneBook(name) {  
    // Book.find({}, {}, function (err, book) {
    //   if (err) return handleError(err);
    //   callback(JSON.stringify(book));
    // });

    return await Book.find();
}