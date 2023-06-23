const mongoose = require('mongoose')
const { Schema } = mongoose

const staticRoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    room_number: {
        type: Number,
        required: true
    },
    room_type: {
        name: {
            type: String,
            required: true
        },
        room_inventory: {
            type: Number,
            required: true
        },
    },
    available: {
        type: Boolean,
        default: true
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    number_of_beds: {
        type: Number,
        required: true
    },
    discount_start: Date,
    discount_end: Date,
    image: [String],
    facilities: {
        kitchen: {
            type: Boolean,
            default: false
        },
        tv: {
            type: Boolean,
            default: false
        },
        free_parking: {
            type: Boolean,
            default: false
        },
        wifi: {
            type: Boolean,
            default: true
        },
        refrigerator: {
            type: Boolean,
            default: false
        },
        pets_allowed: {
            type: Boolean,
            default: true
        },
        air_conditioning: {
            type: Boolean,
            default: false
        },
        heat: {
            type: Boolean,
            default: false
        },
        safe_deposit_box: {
            type: Boolean,
            default: false
        },
        jacuzzi: {
            type: Boolean,
            default: false
        },
        hair_dryer: {
            type: Boolean,
            default: false
        },
        breakfast: {
            type: Boolean,
            default: false
        },
        clothes_iron: {
            type: Boolean,
            default: false
        },
        desk: {
            type: Boolean,
            default: false
        },
        room_service: {
            type: Boolean,
            default: true
        },
        accesibility: {
            type: Boolean,
            default: true
        }
    },
    review: {
        description: {
            type: String,
            required: true
        },
        score: [
            { cleanliness: Number },
            { communication: Number },
            { check_in: Number },
            { accuracy: Number },
            { location: Number },
            { value: Number }
        ]
    }
});

module.exports = mongoose.model('StaticRooms', staticRoomSchema)