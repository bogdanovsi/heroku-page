const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contracts = new Schema({
    number_contract: Number,
    created: Date,
    expiration_date: Date,
    annulment: Boolean,
    annulment_date: Date,
});
Contracts.method({});
Contracts.static({});

mongoose.model('Contracts', Contracts);