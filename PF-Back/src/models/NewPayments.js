const mongoose = require('mongoose');
const { Schema } = mongoose;

const newPaymentsSchema = new Schema({
    ref_mp: {
        type: String,
    },
    identification:{
        type: String,
        require: true
    },
    status: {
        type: String,
        require: false,
        default: 'in progress'
    },
    date_created: {
        type: String,
        require:true
    }
})
module.exports = mongoose.model('NewPayments', newPaymentsSchema);