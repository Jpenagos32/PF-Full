const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentsSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email address',
        ],
    },
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    price: {
        type: Number,
        ref: 'Room',
    },
    room_description: {
        type: String,
        minlength: [25, 'Room description must be greater than 25 chars'],
        maxlength: [500, 'Room description must be less than 500 chars'],
        ref: 'Room',
    },
});

module.exports = mongoose.model('Payments', paymentsSchema);