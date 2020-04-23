const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// customer_id: { type: String, default: '' }, 
const Order = new Schema({
    book_cipher: { type: Number, default: '' },
    customer : [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    receipt_date: { type: Date, default: Date.now },
    completion_date: { type: Date, default: Date.now },
    oredered_book_copies_number: Number
}, { collection: 'orders' });

Order.method({});
Order.static({});

mongoose.model('Order', Order);

