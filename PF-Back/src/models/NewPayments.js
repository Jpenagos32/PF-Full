const mongoose = require('mongoose');
const { Schema } = mongoose;

const newPaymentsSchema = new Schema({
    ref_mp: {
        type: String,
    },
    status: {
        type: String,
        require: false,
        default: 'in progress'
    },
})
module.exports = mongoose.model('NewPayments', newPaymentsSchema);