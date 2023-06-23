const mongoose = require('mongoose')
const { Schema } = mongoose
const Room = require('./Room')

const HostsSchema = new Schema({
    identification: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    contact: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        zip_code: {
            type: String,
            required: true,
        },
    },
    check_in_date: {
        type: Date,
        required: true,
    },
    check_out_date: {
        type: Date,
        required: true,
    },
    amount_of_people: {
        type: Number,
        required: true,
    },
    type_of_guest: {
        adult: {
            type: Number,
            required: true,
        },
        children: {
            type: Number,
            required: true,
        },
        baby: {
            type: Number,
            required: true,
        },
        pets: {
            type: Number,
            required: true,
        },
    },
    special_requirements: {
        type: String,
        required: false,
    },
    rooms: {
        room_id: {
            type: Schema.Types.ObjectId,
            ref: 'Room',
        },
        // room_name: {
        //     type: String,
        //     required: true,
        // },
        // active_reservation: {
        //     type: Boolean,
        //     default: true,
        // }
    },
});

module.exports = mongoose.model('Hosts', HostsSchema)