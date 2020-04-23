const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    book_cipher: { type: Number, default: '' },
    name: { type: String, default: '' },
    circulation: { type: Number, default: '' },
    publication_date: { type: Date, default: Date.now },
    cost_price: Number, 
    selling_price: Number, 
    fee: Number
});

Book.method({});

Book.static({});

module.exports = mongoose.model('User', Book);