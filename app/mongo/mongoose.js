const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true });

const Book = require('../models/book.js');

module.exports.findOneBook = function findOneBook(name, callback) {
  // name: {$regex : `.*${name}.*`}
    Book.find({}, {}, function (err, book) {
      if (err) return handleError(err);
      
      callback(JSON.stringify(book));
    });
}