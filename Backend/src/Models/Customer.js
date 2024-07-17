const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['ADMIN','USER'],
        default: 'USER'
    }
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;