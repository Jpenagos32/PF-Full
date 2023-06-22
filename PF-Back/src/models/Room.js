const mongoose = require('mongoose')
const { Schema } = mongoose

const roomSchema = new Schema({

    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    "room-type": String,
    available: Boolean,
    capacity: Number,
    price: Number,   
    "number-of-beds": Number,
    "discount-start": Date,
    "discount-end": Date,
    image: [String],
    facilities: {
      kitchen: Boolean,
      tv: Boolean,  
      "free-parking": Boolean,
      wifi: Boolean,
      refrigerator: Boolean,    
      "pets-allowed": Boolean,    
      "air-conditioning": Boolean,
      heat: Boolean,
      "safe-deposit-box": Boolean,
      jacuzzi: Boolean,
      "hair-dryer": Boolean,
      breakfast: Boolean,
      "clothes-iron": Boolean,
      desk: Boolean,
      "room-service": Boolean,    
      accesibility: Boolean
    },
    review: {
      description: String,
      score: [
        { cleanliness: Number },
        { communication: Number },
        { "check-in": Number },      
        { accuracy: Number },      
        { location: Number },      
        { value: Number }
      ]
    }
  });
  
module.exports = mongoose.model('Room', roomSchema)